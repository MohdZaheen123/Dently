import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--text-primary)',
      color: '#94a3b8',
      padding: '56px 0 28px',
      marginTop: 'auto',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 40,
          marginBottom: 48,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{
                width: 36, height: 36,
                background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: 18 }}>🦷</span>
              </div>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '1.2rem', color: '#fff' }}>
                Oro<span style={{ color: '#60a5fa' }}>Glee</span>
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 240 }}>
              Connecting patients with trusted dental professionals for a healthier, brighter smile.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: 16, fontSize: '0.9375rem' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['/', 'Home'], ['/dentists', 'Find Dentists'], ['/admin', 'Admin Panel']].map(([href, label]) => (
                <Link key={href} href={href} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.15s' }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = '#94a3b8'}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: 16, fontSize: '0.9375rem' }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Orthodontics', 'Root Canal', 'Cosmetic Dentistry', 'Oral Surgery', 'Gum Treatment'].map(s => (
                <span key={s} style={{ fontSize: '0.9rem' }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: 16, fontSize: '0.9375rem' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.9rem' }}>
              <span>📧 support@oroglee.com</span>
              <span>📞 1800-SMILE-NOW</span>
              <span>📍 India-wide network</span>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1e293b', paddingTop: 24, textAlign: 'center', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} OroGlee. All rights reserved. Made with ❤️ for healthier smiles.
        </div>
      </div>
    </footer>
  );
}
