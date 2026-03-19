"use client";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";

const fakeDentists = [
    {
      _id: "1",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Arjun Menon",
      qualification: "BDS, MDS",
      yoe: 10,
      clinic_name: "Menon Dental Clinic",
      address: "Near Civil Station, Thrissur",
      location: "Thrissur, Kerala",
    },
    {
      _id: "2",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Sneha Pillai",
      qualification: "BDS",
      yoe: 5,
      clinic_name: "SmileCare Centre",
      address: "MG Road, Kochi",
      location: "Kochi, Kerala",
    },
    {
      _id: "3",
      photo: "https://randomuser.me/api/portraits/men/76.jpg",
      name: "Rahul Thomas",
      qualification: "BDS, MDS (Ortho)",
      yoe: 12,
      clinic_name: "Thomas Orthodontics",
      address: "Convent Road, Ernakulam",
      location: "Ernakulam, Kerala",
    },
    {
      _id: "4",
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Divya Nair",
      qualification: "BDS, MDS (Prostho)",
      yoe: 8,
      clinic_name: "Pearl Dental Studio",
      address: "Statue Junction, Thiruvananthapuram",
      location: "Thiruvananthapuram, Kerala",
    },
    {
      _id: "5",
      photo: "https://randomuser.me/api/portraits/men/52.jpg",
      name: "Siddharth Iyer",
      qualification: "BDS",
      yoe: 3,
      clinic_name: "Bright Smiles Clinic",
      address: "Near Almas Hospital, Kottakkal",
      location: "Malappuram, Kerala",
    },
    {
      _id: "6",
      photo: "https://randomuser.me/api/portraits/women/29.jpg",
      name: "Priya Krishnan",
      qualification: "BDS, MDS (Perio)",
      yoe: 7,
      clinic_name: "Gum & Tooth Care",
      address: "Bank Road, Kozhikode",
      location: "Kozhikode, Kerala",
    },
  ];

// ── Skeleton card shown while loading ──────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-stone-100 animate-pulse">
      <div className="h-56 bg-stone-200" />
      <div className="p-6 flex flex-col gap-3">
        <div className="h-5 bg-stone-200 rounded-full w-2/3" />
        <div className="h-3 bg-stone-100 rounded-full w-1/3" />
        <div className="h-3 bg-stone-100 rounded-full w-1/2 mt-2" />
        <div className="h-3 bg-stone-100 rounded-full w-3/4" />
        <div className="h-10 bg-stone-200 rounded-full mt-4" />
      </div>
    </div>
  );
}

// ── Individual dentist card 
function DentistCard({ dentist }) {
  const {
    photo,
    name,
    qualification,
    yoe,
    clinic_name,
    address,
    location,
  } = dentist;
  const router = useRouter();
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-stone-100 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-50 hover:-translate-y-1 transition-all duration-300 flex flex-col">

      {/* Photo */}
      <div className="relative h-56 bg-stone-100 overflow-hidden">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center from-stone-100 to-emerald-50">
            <span className="text-6xl">🦷</span>
          </div>
        )}

        {/* YOE badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1.5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
          <span className="text-xs font-medium text-stone-700 tracking-wide">
            {yoe} {yoe === 1 ? "yr" : "yrs"} exp
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 gap-4">

        {/* Name + qualification */}
        <div>
          <h3 className="text-stone-900 font-semibold text-lg leading-tight tracking-tight">
            Dr. {name}
          </h3>
          <p className="text-emerald-600 text-sm font-medium mt-0.5 uppercase tracking-widest">
            {qualification}
          </p>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-2.5 flex-1">
          <DetailRow
            icon={
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3" />
              </svg>
            }
            text={clinic_name}
          />
          <DetailRow
            icon={
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            text={address}
          />
          <DetailRow
            icon={
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            }
            text={location}
          />
        </div>

        {/* CTA Button */}
        <button className="w-full mt-2 bg-stone-900 hover:bg-emerald-600 text-white text-sm font-medium tracking-wide py-3.5 rounded-2xl transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer" onClick={() => router.push(`/booking?dentist=${encodeURIComponent(dentist.name)}&&clinic_name=${encodeURIComponent(dentist.clinic_name)}`)}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
            Book Appointment
        </button>
      </div>
    </div>
  );
}

// ── Small reusable detail row ───────────────────────────────────────────────
function DetailRow({ icon, text }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="text-emerald-500 mt-0.5 shrink-0">{icon}</span>
      <span className="text-stone-500 text-sm leading-snug">{text}</span>
    </div>
  );
}

// ── Main page ───────────────────────────────────────────────────────────────
export default function DentistsPage() {
  const [dentists, setDentists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const[page,setPage]=useState(1);
  const[maxpage,setMaxpage]=useState(1);
useEffect(() => {
  
  if(process.env.NEXT_PUBLIC_PRODUCTION=="false")
    setDentists(fakeDentists);
  else{
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/alldentists?page=${page}`)       
      .then((res) => {
        setDentists(res.data.data);
        setMaxpage(res.data.totalPages)
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load dentists. Please try again.");
        setLoading(false);
      });
  }
  setLoading(false);
}, [page]);

  const handlePrev =  () => {
    if(page==1) return;
    setPage(page-1);
  };
  const handleNext =  () => {
    if(page==maxpage) return;
    setPage(page+1);
  };

  const filtered = dentists.filter((d) =>
    [d.name, d.qualification, d.clinic_name, d.location]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F7F5F2]">

      {/* Header */}
      <div className="bg-[#F7F5F2] border-b border-stone-200 sticky top-0 z-10 backdrop-blur-sm bg-opacity-90">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-stone-900 tracking-tight">
              Find a Dentist
            </h1>
            {!loading && !error && (
              <p className="text-stone-400 text-sm mt-0.5">
                {filtered.length} {filtered.length === 1 ? "specialist" : "specialists"} available
              </p>
            )}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by name, clinic, location…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-stone-200 bg-white text-sm text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">

        {/* Error state */}
        {error && (
          <div className="flex flex-col items-center justify-center py-32 text-center gap-3">
            <span className="text-5xl">😕</span>
            <p className="text-stone-500 text-base">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 px-5 py-2.5 bg-stone-900 text-white text-sm rounded-full hover:bg-emerald-600 transition-colors cursor-pointer"
            >
              Retry
            </button>
          </div>
        )}

        {/* Loading skeletons */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {/* Empty search result */}
        {!loading && !error && filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 text-center gap-3">
            <span className="text-5xl">🔍</span>
            <p className="text-stone-500 text-base">No dentists match your search.</p>
            <button
              onClick={() => setSearch("")}
              className="mt-2 px-5 py-2.5 bg-stone-900 text-white text-sm rounded-full hover:bg-emerald-600 transition-colors cursor-pointer"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Grid */}
        {!loading && !error && filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((dentist) => (
              <DentistCard key={dentist._id} dentist={dentist} />
            ))}
          </div>
        )}

        <div className="flex w-screen max-w-6xl justify-center gap-2 mt-10">
          <button onClick={handlePrev} className="bg-black text-white py-3 px-4 rounded-md ">prev</button>
          <button onClick={handleNext} className="bg-black text-white py-3 px-4 rounded-md ">Next</button>
        </div>
      </div>
    </div>
  );
}