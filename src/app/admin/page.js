import AppointmentsTable from '@/components/AppoinmentsTable';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'



async function logout() {
  'use server'
  const { cookies: cookieStore } = await import('next/headers');
  (await cookieStore()).delete('admin_token')

  redirect('/login')
}

export default async function AdminPage() {

  return (
    <div style={{ padding: 32 }}>
      {/* <h1>Admin Dashboard</h1>
      <p>Welcome, admin! You are securely logged in.</p>
      <form action={logout}>
        <button type="submit">Log out</button>
      </form> */}
      <AppointmentsTable logout={logout}/>
    </div>
  )
}