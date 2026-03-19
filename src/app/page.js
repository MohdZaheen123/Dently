
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function DentlyLanding() {

  // useEffect(() => {
  //   const onScroll = () => setScrolled(window.scrollY > 40);
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <main className=" text-[#1A1A18] font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; }

        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }

        .fade-up {
          opacity: 0;
          transform: translateY(28px);
          animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.25s; }
        .delay-3 { animation-delay: 0.4s; }
        .delay-4 { animation-delay: 0.55s; }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #1A1A18;
          color: #F7F5F2;
          padding: 14px 32px;
          border-radius: 999px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 15px;
          letter-spacing: 0.02em;
          transition: background 0.2s, transform 0.2s;
          cursor: pointer;
          border: none;
          text-decoration: none;
        }
        .pill-btn:hover { background: #2e7d5c; transform: translateY(-1px); }

        .outline-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #1A1A18;
          padding: 13px 30px;
          border-radius: 999px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 15px;
          letter-spacing: 0.02em;
          border: 1.5px solid #1A1A18;
          transition: all 0.2s;
          cursor: pointer;
          text-decoration: none;
        }
        .outline-btn:hover { background: #1A1A18; color: #F7F5F2; } 

        .card-hover {
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s;
        }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,0,0,0.08); }

        .tooth-dot {
          width: 6px; height: 6px;
          background: #2e7d5c;
          border-radius: 50%;
          display: inline-block;
          margin-right: 8px;
        }

        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #1A1A18;
          text-decoration: none;
          letter-spacing: 0.03em;
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        .nav-link:hover { opacity: 1; }

        .section-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #2e7d5c;
        }

        .big-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(48px, 8vw, 96px);
          font-weight: 300;
          line-height: 1;
          color: #1A1A18;
        }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(52px, 9vw, 110px);
          font-weight: 300;
          line-height: 0.95;
          letter-spacing: -0.02em;
          color: #1A1A18;
        }

        .divider { border: none; border-top: 1px solid rgba(26,26,24,0.12); }

        .bg-sage { background: #2e7d5c; }
        .text-sage { color: #2e7d5c; }

        .noise-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        .service-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 400;
          color: rgba(26,26,24,0.3);
          letter-spacing: 0.05em;
        }

        .testimonial-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 300;
          font-style: italic;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 52px; }
        }
      `}</style>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-10 pt-32">
        {/* Background accent */}
        <div style={{
          position: "absolute", top: "8%", right: "-5%",
          width: "clamp(280px, 45vw, 600px)", height: "clamp(280px, 45vw, 600px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(46,125,92,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "15%", right: "5%",
          width: "clamp(200px, 30vw, 420px)", height: "clamp(200px, 30vw, 420px)",
          borderRadius: "50%",
          border: "1px solid rgba(46,125,92,0.12)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "12%", right: "8%",
          width: "clamp(130px, 20vw, 270px)", height: "clamp(130px, 20vw, 270px)",
          borderRadius: "50%",
          border: "1px solid rgba(46,125,92,0.18)",
          pointerEvents: "none",
        }} />

        <div className="max-w-7xl mx-auto w-full">
          <div className="fade-up delay-1">
            <span className="section-label">Premium Dental Care</span>
          </div>

          <h1 className="hero-title mt-6 fade-up delay-2" style={{ maxWidth: "780px" }}>
            Your smile,<br />
            <em style={{ fontStyle: "italic", color: "#2e7d5c" }}>reimagined.</em>
          </h1>

          <p className="fade-up delay-3 font-body" style={{
            maxWidth: "420px", marginTop: "28px",
            fontSize: "16px", lineHeight: "1.75",
            color: "rgba(26,26,24,0.6)", fontWeight: 300
          }}>
            Modern dentistry designed around you — painless procedures, expert care, and results that speak for themselves.
          </p>

          <div className="flex flex-wrap gap-4 mt-10 fade-up delay-4">
            <a href="#contact" className="pill-btn">
              Book a Free Consult
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#services" className="outline-btn">Explore Services</a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-10 mt-20 fade-up delay-4 pt-10" style={{ borderTop: "1px solid rgba(26,26,24,0.1)" }}>
            {[
              { num: "12+", label: "Years of expertise" },
              { num: "4,800+", label: "Happy patients" },
              { num: "98%", label: "Satisfaction rate" },
            ].map(stat => (
              <div key={stat.num}>
                <div className="big-number">{stat.num}</div>
                <div className="font-body" style={{ fontSize: "13px", color: "rgba(26,26,24,0.5)", marginTop: "4px", letterSpacing: "0.02em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider mx-6 md:mx-10" />

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="section-label">What we do</span>
              <h2 className="font-display mt-4" style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 300, lineHeight: 1.1 }}>
                Every procedure,<br />done right.
              </h2>
            </div>
            <p className="font-body" style={{ fontSize: "14px", color: "rgba(26,26,24,0.55)", maxWidth: "300px", lineHeight: 1.7 }}>
              From routine checkups to complete smile transformations, we have you covered with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                num: "01", title: "General Dentistry",
                desc: "Comprehensive checkups, cleanings, fillings, and preventive treatments to keep your teeth healthy for life.",
                icon: "🦷"
              },
              {
                num: "02", title: "Teeth Whitening",
                desc: "Professional-grade whitening treatments that deliver visibly brighter results, safely and comfortably.",
                icon: "✨"
              },
              {
                num: "03", title: "Orthodontics",
                desc: "Clear aligners and braces customized to your bite. Straighten teeth discreetly, at your own pace.",
                icon: "😁"
              },
              {
                num: "04", title: "Dental Implants",
                desc: "Permanent, natural-looking replacements for missing teeth. Restore function and confidence that lasts decades.",
                icon: "🔩"
              },
              {
                num: "05", title: "Root Canal",
                desc: "Gentle, precise endodontic care to save your natural tooth and eliminate pain without the anxiety.",
                icon: "💉"
              },
              {
                num: "06", title: "Cosmetic Veneers",
                desc: "Ultra-thin porcelain shells that transform the shape, color, and symmetry of your smile in just two visits.",
                icon: "💎"
              },
            ].map(service => (
              <div key={service.num} className="card-hover" style={{
                background: "white",
                borderRadius: "20px",
                padding: "32px",
                border: "1px solid rgba(26,26,24,0.06)",
              }}>
                <div className="flex items-start justify-between mb-6">
                  <span className="service-num">{service.num}</span>
                  <span style={{ fontSize: "28px" }}>{service.icon}</span>
                </div>
                <h3 className="font-display" style={{ fontSize: "22px", fontWeight: 400, marginBottom: "12px" }}>
                  {service.title}
                </h3>
                <p className="font-body" style={{ fontSize: "14px", color: "rgba(26,26,24,0.55)", lineHeight: 1.75 }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / CTA BAND */}
      <section id="about" className="relative overflow-hidden mx-4 md:mx-10 rounded-3xl mb-16 noise-bg" style={{ background: "#1A1A18" }}>
        <div className="relative z-10 py-20 md:py-28 px-8 md:px-16 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div style={{ flex: 1 }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "30px",
              fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2e7d5c"
            }}>
              Why Dently
            </span>
            <h2 className="font-display" style={{ fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 300, lineHeight: 1.1, color: "#F7F5F2", marginTop: "16px" }}>
              Care that goes<br />
              beyond the chair.
            </h2>
          </div>
          <div style={{ flex: 1 }}>
            <div className="flex flex-col gap-6">
              {[
                { label: "Pain-free experience", desc: "Advanced anesthetics and a calm environment for every visit." },
                { label: "Transparent pricing", desc: "No surprise bills. Full treatment breakdowns before you commit." },
                { label: "Latest technology", desc: "Digital X-rays, 3D imaging, and same-day crowns with CEREC." },
              ].map(item => (
                <div key={item.label} className="flex gap-4">
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2e7d5c", marginTop: "8px", flexShrink: 0 }} />
                  <div>
                    <div className="font-body" style={{ color: "#F7F5F2", fontWeight: 500, fontSize: "15px" }}>{item.label}</div>
                    <div className="font-body" style={{ color: "rgba(247,245,242,0.5)", fontSize: "14px", marginTop: "4px", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Decorative circle */}
        <div style={{
          position: "absolute", bottom: "-80px", right: "-80px",
          width: "300px", height: "300px", borderRadius: "50%",
          border: "1px solid rgba(247,245,242,0.06)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-40px", right: "-40px",
          width: "200px", height: "200px", borderRadius: "50%",
          border: "1px solid rgba(247,245,242,0.08)",
          pointerEvents: "none",
        }} />
      </section>
      

      <hr className="divider mx-6 md:mx-10" />

      <Contact/>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(26,26,24,0.1)", padding: "32px 40px" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontWeight: 600 }}>dently</span>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2e7d5c", display: "inline-block", marginBottom: "8px" }} />
          </div>
          <p className="font-body" style={{ fontSize: "13px", color: "rgba(26,26,24,0.4)" }}>
            © 2025 Dently. All rights reserved. — Crafted with care.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Sitemap"].map(link => (
              <a key={link} href="#" className="font-body" style={{ fontSize: "13px", color: "rgba(26,26,24,0.45)", textDecoration: "none" }}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}