'use client'
import axios from 'axios';
import { MousePointer2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import {toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const image_url = "https://media.istockphoto.com/id/2077095666/vector/default-placeholder-doctor-portrait-photo-avatar-on-gray-background-greyscale-healthcare.jpg?s=2048x2048&w=is&k=20&c=mshZxnokBu14ldavrPRKN5QvtCd2sYOg5XZM8Tkrb_c="

const schema = z.object({
  name: z.string().min(1, 'Full name is required'),
  yoe: z.coerce.number({ invalid_type_error: 'Must be a number' }).min(0, 'Cannot be negative').max(60, 'Enter a valid number'),
  qualification: z.string().min(1, 'Qualification is required'),
  clinic_name: z.string().min(1, 'Clinic name is required'),
  address: z.string().min(1, 'Address is required'),
  image: z.string().url('Enter a valid URL').or(z.literal('')).optional(),
})

const fields = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Your name' },
  { label: 'Years Of Exp', name: 'yoe', type: 'number', placeholder: 'Your YOE' },
  { label: 'Qualification', name: 'qualification', type: 'text', placeholder: 'Your Qualification' },
  { label: 'Clinic Name', name: 'clinic_name', type: 'text', placeholder: 'Clinic Name' },
  { label: 'Address', name: 'address', type: 'text', placeholder: 'Address' },
  { label: 'Image URL', name: 'image', type: 'text', placeholder: 'Your Image URL (optional)' },
]

const FormCard = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema)
  });

  const handleSubmitForm = async (data) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/createdentist`, {
        name: data.name,
        qualification: data.qualification,
        yoe: data.yoe,
        image: data.image || image_url,
        clinic_name: data.clinic_name,
        address: data.address,
      });
      toast.success("New Dentist added")
      console.log('Success:');
    } catch (error) {
      toast.error(`Error: ${error}`);
      console.error('Failed:', error);
    }
  };

  return (
    <div className="flex w-full justify-around items-center p-5">
      <div className="w-[95%] max-w-xl bg-white rounded-3xl p-[30] border border-gray-500">
        <h3 className="font-display" style={{ fontSize: '26px', fontWeight: 400, marginBottom: '28px' }}>
          Enroll New Doctor
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

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex bg-black text-white rounded-md justify-center p-2 gap-2 md:py-4 md:gap-3 text-lg items-center disabled:opacity-50"
          >
            {isSubmitting ? 'Enrolling...' : 'Enroll Now'}
            <MousePointer2 />
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormCard;