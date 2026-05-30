export default function Hero() {
  return (
    <section style={styles.section}>
      <div style={styles.content}>
        <h1 style={styles.h1}>Rishav<br />Karanjit</h1>
        <p style={styles.role}>Software Development Engineer</p>
        <a href="#contact" style={styles.cta}>Get in touch</a>
      </div>
    </section>
  )
}

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '640px',
    margin: '0 auto',
    padding: '8rem 2rem 4rem',
  },
  content: {},
  h1: {
    fontSize: 'clamp(3rem, 8vw, 5rem)',
    fontWeight: 300,
    letterSpacing: '-0.03em',
    lineHeight: 1.05,
    marginBottom: '1.25rem',
  },
  role: {
    color: 'var(--text-muted)',
    fontSize: '0.875rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: '3rem',
  },
  cta: {
    display: 'inline-block',
    padding: '0.7rem 1.6rem',
    border: '1px solid var(--border)',
    color: 'var(--text)',
    fontSize: '0.8rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    transition: 'background 0.2s, border-color 0.2s',
  },
}
