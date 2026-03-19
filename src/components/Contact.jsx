import { Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div>
        <section id="contact" className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          <div style={{ flex: 1 }}>
            <span className="uppercase font-bold text-[#2e7d5c] text-2xl">Get in touch</span>
            <h2 className="font-display mt-4" style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 300, lineHeight: 1.1 }}>
              Start with a<br />free consultation.
            </h2>
            <p className="font-body mt-6" style={{ fontSize: "15px", color: "rgba(26,26,24,0.55)", lineHeight: 1.75, maxWidth: "360px" }}>
              Book a no-obligation 30-minute consultation with one of our specialists and discover what's possible for your smile.
            </p>

            <div className="flex flex-col gap-5 mt-10">
              {[
                { icon: "📍", label: "Location", val: "Near Almas Hospital, Kottakkal, Kerala" },
                { icon: "📞", label: "Phone", val: "+91 98765 43210" },
                { icon: "⏰", label: "Hours", val: "Mon–Sat, 9am – 7pm" },
              ].map(info => (
                <div key={info.label} className="flex gap-4 items-start">
                  <span style={{ fontSize: "18px", marginTop: "2px" }}>{info.icon}</span>
                  <div>
                    <div className="font-body" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2e7d5c", marginBottom: "2px" }}>
                      {info.label}
                    </div>
                    <div className="font-body" style={{ fontSize: "15px", color: "rgba(26,26,24,0.7)" }}>{info.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: 1, width: "100%" }}>
            <div style={{
              background: "white", borderRadius: "24px", padding: "40px",
              border: "1px solid rgba(26,26,24,0.08)",
            }}>
              <h3 className="font-display" style={{ fontSize: "26px", fontWeight: 400, marginBottom: "28px" }}>
                Request A Call From Us
              </h3>

              <div className="flex flex-col gap-4">
                {[
                  { label: "Full name", type: "text", placeholder: "Your name" },
                  { label: "Phone number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                  { label: "Email", type: "email", placeholder: "you@example.com" },
                ].map(field => (
                  <div key={field.label}>
                    <label className="font-body" style={{ fontSize: "12px", fontWeight: 500, color: "rgba(26,26,24,0.5)", letterSpacing: "0.06em", display: "block", marginBottom: "6px" }}>
                      {field.label.toUpperCase()}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      style={{
                        width: "100%", padding: "13px 16px",
                        borderRadius: "12px", border: "1.5px solid rgba(26,26,24,0.1)",
                        background: "#F7F5F2", fontFamily: "'DM Sans', sans-serif",
                        fontSize: "15px", color: "#1A1A18", outline: "none",
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label className="font-body" style={{ fontSize: "12px", fontWeight: 500, color: "rgba(26,26,24,0.5)", letterSpacing: "0.06em", display: "block", marginBottom: "6px" }}>
                    SERVICE
                  </label>
                  <select style={{
                    width: "100%", padding: "13px 16px",
                    borderRadius: "12px", border: "1.5px solid rgba(26,26,24,0.1)",
                    background: "#F7F5F2", fontFamily: "'DM Sans', sans-serif",
                    fontSize: "15px", color: "#1A1A18", outline: "none", appearance: "none",
                  }}>
                    <option value="">Select a service</option>
                    <option>General Checkup</option>
                    <option>Teeth Whitening</option>
                    <option>Orthodontics</option>
                    <option>Dental Implants</option>
                    <option>Root Canal</option>
                    <option>Cosmetic Veneers</option>
                  </select>
                </div>

                <button className="flex items-center justify-center text-white bg-black py-4 rounded-md gap-1">
                  Request A Call
                  <Phone className='h-5 font-bold'/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact