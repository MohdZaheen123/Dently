'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MousePointer2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";

export default function LoginPage() {


  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const schema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required')
})

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) });

  async function handleLogin(d) {
    try {
        setLoading(true)

        const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: d.username, password: d.password }),
        })

        const data = await res.json()

        if (data.success) {
        toast.success("LoggedIn Successfully!")
        setTimeout(() => {
            router.push('/admin')
        }, 500);
        } else {
            toast.error("Please Check Your Credentials")
        }
    } catch (error) {
        toast.error(`Error: ${error}`)
    }
    
    setLoading(false)
  }

  

  return (
    <div className='flex w-screen justify-around items-center p-5'>
            <div className='w-[95%] max-w-xl p-[30] bg-white rounded-3xl border border-gray-500'>
                <h3 className="uppercase text-center text-xl font-bold py-4">
                    Admin Login
                </h3>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleLogin)}>
                    <div className='flex flex-col'>
                        <label>User Name</label>
                        <input
                            type="text"
                            className='p-5 border rounded-md'
                            placeholder="Username"
                            {...register("username")}
                        />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                    </div>
                    <div className='flex flex-col'>
                        <label>Password</label>
                        <input
                            type="password"
                            className='p-5 border rounded-md'
                            placeholder="Password"
                            {...register("password")}
                        />
                        {errors.password && <p className="text-red-500 text-md">{errors.password.message}</p>}
                    </div>
                    

                    <button type="submit" className="flex bg-black text-white rounded-md justify-center p-2 gap-2 md:py-4 md:gap-3 text-lg items-center">
                        Login
                        <MousePointer2 />
                    </button>
                </form>
            </div>
        </div>
  )
}