'use client'
import axios from 'axios';
import { MousePointer2 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Suspense } from 'react';

const schema = z.object({
  name: z.string().min(1, 'Full name is required'),
  age: z.coerce.number({ invalid_type_error: 'Age must be a number' }).min(1, 'Age is required').max(120, 'Enter a valid age'),
  number: z.string().min(10, 'Enter a valid phone number').max(10, 'Enter a valid phone number'),
  date: z.string().min(1, 'Date is required'),
  gender: z.enum(['Male', 'Female', 'Other'], { errorMap: () => ({ message: 'Please select a gender' }) }),
})

// ✅ Inner component uses useSearchParams — must be inside <Suspense>
const FormCardInner = () => {
  const searchParams = useSearchParams();
  const dentistName = searchParams.get('dentist');
  const clinic_name = searchParams.get('clinic_name');

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema)
  });

  const fields = [
    { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Your name' },
    { label: 'Age', name: 'age', type: 'number', placeholder: 'Your age' },
    { label: 'Phone Number', name: 'number', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
    { label: 'Date', name: 'date', type: 'date' },
  ];

  const handleSubmitForm = async (data) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/createappoinment`, {
        patient_name: data.name,
        dentist_name: dentistName,
        gender: data.gender,
        age: data.age,
        clinic_name,
        appoinment_date: data.date,
      });
      console.log('Success:', response.data);
      toast.success("Appoinment Created Successfully")
    } catch (error) {
      toast.error(`Error: ${error}`)
      console.error('Failed:', error);
    }
  };

  return (
    <div className="flex w-full justify-around items-center p-5">
      <div className="w-[95%] max-w-xl bg-white rounded-3xl p-[30] border border-gray-500">
        <h3 className="font-display" style={{ fontSize: '26px', fontWeight: 400, marginBottom: '28px' }}>
          {`Book An Appointment For Dr.${dentistName}`}
        </h3>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleSubmitForm)}>
          {fields.map(field => (
            <div key={field.name}>
              <label className="font-body" style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(26,26,24,0.5)', letterSpacing: '0.06em', display: 'block', marginBottom: '6px' }}>
                {field.label.toUpperCase()}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.name)}
                style={{
                  width: '100%', padding: '13px 16px',
                  borderRadius: '12px',
                  border: errors[field.name] ? '1.5px solid #ef4444' : '1.5px solid rgba(26,26,24,0.1)',
                  background: '#F7F5F2', fontFamily: "'DM Sans', sans-serif",
                  fontSize: '15px', color: '#1A1A18', outline: 'none',
                }}
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm mt-1">{errors[field.name].message}</p>
              )}
            </div>
          ))}

          <div>
            <label className="font-body" style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(26,26,24,0.5)', letterSpacing: '0.06em', display: 'block', marginBottom: '6px' }}>
              GENDER
            </label>
            <div className="flex gap-6">
              {['Male', 'Female', 'Other'].map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" value={option} className="w-5 h-5 text-black" {...register('gender')} />
                  <span style={{ fontSize: '15px', color: '#1A1A18', fontFamily: "'DM Sans', sans-serif" }}>
                    {option}
                  </span>
                </label>
              ))}
            </div>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex bg-black text-white rounded-md justify-center p-2 gap-2 md:py-4 md:gap-3 text-lg items-center disabled:opacity-50"
          >
            {isSubmitting ? 'Booking...' : 'Confirm Booking'}
            <MousePointer2 />
          </button>
        </form>
      </div>
    </div>
  );
};

// ✅ Outer component wraps the inner one in Suspense
const FormCard = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FormCardInner />
    </Suspense>
  );
};

export default FormCard;