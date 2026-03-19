'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const FakeAppointments = [
  { _id: '1', patient_name: 'Riya Menon', dentist_name: 'Dr. Arun Kumar', gender: 'Female', age: 28, clinic_name: 'SmileCare Dental', appoinment_date: '2026-03-20' },
  { _id: '2', patient_name: 'Arjun Pillai', dentist_name: 'Dr. Sneha Nair', gender: 'Male', age: 34, clinic_name: 'BrightSmile Clinic', appoinment_date: '2026-03-20' },
  { _id: '3', patient_name: 'Priya Krishnan', dentist_name: 'Dr. Arun Kumar', gender: 'Female', age: 22, clinic_name: 'SmileCare Dental', appoinment_date: '2026-03-21' },
  { _id: '4', patient_name: 'Rohit Varma', dentist_name: 'Dr. James Mathew', gender: 'Male', age: 45, clinic_name: 'PearlDent', appoinment_date: '2026-03-21' },
  { _id: '5', patient_name: 'Anjali Das', dentist_name: 'Dr. Sneha Nair', gender: 'Female', age: 31, clinic_name: 'BrightSmile Clinic', appoinment_date: '2026-03-22' },
  { _id: '6', patient_name: 'Vishnu Raj', dentist_name: 'Dr. James Mathew', gender: 'Male', age: 19, clinic_name: 'PearlDent', appoinment_date: '2026-03-22' },
  { _id: '7', patient_name: 'Meera Thomas', dentist_name: 'Dr. Arun Kumar', gender: 'Female', age: 52, clinic_name: 'SmileCare Dental', appoinment_date: '2026-03-23' },
  { _id: '8', patient_name: 'Aditya Suresh', dentist_name: 'Dr. Sneha Nair', gender: 'Male', age: 27, clinic_name: 'BrightSmile Clinic', appoinment_date: '2026-03-23' },
]

export default function AppointmentsTable({logout}) {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [page, setPage] = useState(1)
  const [maxpage, setMaxpage] = useState(1)
  const router = useRouter()

  useEffect(() => {
    if(process.env.NEXT_PUBLIC_PRODUCTION=="false")
      setAppointments(FakeAppointments)
    else{
      axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/allappoinments?page=${page}`)
        .then(res => {
          setAppointments(res.data.data)
          setMaxpage(res.data.totalPages)
          setLoading(false)
        })
        .catch(() => {
          setError('Could not load appointments.')
          setLoading(false)
        })
    }
    setLoading(false)
}, [page])

  const handlePrev =  () => {
    if(page==1) return;
    setPage(page-1);
  };
  const handleNext =  () => {
    if(page==maxpage) return;
    setPage(page+1);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-medium text-gray-900">Appointments</h1>
          <p className="text-sm text-gray-400 mt-1">All scheduled appointments</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => router.push('/admin/adddoctor')}
            className="p-3 text-sm border bg-black text-white rounded-xl cursor-pointer"
          >
            + Add doctor
          </button>
          <button
            onClick={logout}
            className="p-3 text-sm border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Log out
          </button>
        </div>
      </div>

      {/* Table card */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl border border-gray-200 overflow-hidden">

        {loading && (
          <div className="py-16 text-center text-sm text-gray-400">
            Loading appointments...
          </div>
        )}

        {error && (
          <div className="py-16 text-center text-sm text-red-500">
            {error}
          </div>
        )}

        {!loading && !error && appointments.length === 0 && (
          <div className="py-16 text-center text-sm text-gray-400">
            No appointments found.
          </div>
        )}

        {!loading && !error && appointments.length > 0 && (
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {['Patient', 'Dentist', 'Gender', 'Age', 'Clinic', 'Date'].map(h => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {appointments.map((appt, i) => (
                <tr
                  key={appt._id}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                >
                  <td className="px-4 py-3 text-gray-800 font-medium">{appt.patient_name}</td>
                  <td className="px-4 py-3 text-gray-600">{appt.dentist_name}</td>
                  <td className="px-4 py-3 text-gray-600 capitalize">{appt.gender}</td>
                  <td className="px-4 py-3 text-gray-600">{appt.age}</td>
                  <td className="px-4 py-3 text-gray-600">{appt.clinic_name}</td>
                  <td className="px-4 py-3 text-gray-500">{appt.appoinment_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="flex w-screen max-w-6xl justify-center gap-2 mt-10">
          <button onClick={handlePrev} className="bg-black text-white py-3 px-4 rounded-md ">prev</button>
          <button onClick={handleNext} className="bg-black text-white py-3 px-4 rounded-md ">Next</button>
      </div>

      {/* Footer count */}
      {!loading && !error && appointments.length > 0 && (
        <p className="max-w-5xl mx-auto mt-3 text-xs text-gray-400">
          {appointments.length} appointment{appointments.length !== 1 ? 's' : ''} total
        </p>
      )}
    </div>
  )
}