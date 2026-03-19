"use client";
import Link from 'next/link';
import { useState, useEffect } from "react";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const items=["Services", "About", "Appoinments", "Contact"];

  return (
    <nav className='shadow-lg'>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link href="/ " className="flex items-center gap-2" style={{ textDecoration: "none" }}>
            <span className='text-3xl font-bold '>
              Dently
            </span>
            <span style={{
              width: "6px", height: "6px",
              borderRadius: "50%",
              background: "#2e7d5c",
              display: "inline-block",
              marginBottom: "10px",
            }} />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {items.map(item => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="font-semibold text-lg">{item}</Link>
            ))}
          </div>

          <Link href="/admin" className="hidden md:flex bg-black text-white text-[14px] font-bold rounded-xl p-3">
            Admin Pannel
          </Link>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <span style={{ width: "22px", height: "1.5px", background: "#1A1A18", display: "block", transition: "all 0.2s",
              transform: menuOpen ? "rotate(45deg) translateY(5px)" : "none" }} />
            <span style={{ width: "22px", height: "1.5px", background: "#1A1A18", display: "block",
              opacity: menuOpen ? 0 : 1, transition: "all 0.2s" }} />
            <span style={{ width: "22px", height: "1.5px", background: "#1A1A18", display: "block", transition: "all 0.2s",
              transform: menuOpen ? "rotate(-45deg) translateY(-5px)" : "none" }} />
          </button>
        </div>

        {menuOpen && (
          <div className='flex flex-col items-end bg-[#f7f5f2f7] gap-3 p-6' >
            {items.map(item => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="">{item}</Link> 
            ))}
          </div>
        )}
      </nav>
  );
}
