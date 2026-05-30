const LINKS = [
  { label: 'Email', href: 'mailto:karanjitrishav4@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/rishav-karanjit' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rishav-karanjit' },
]

export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <span style={styles.label}>Contact</span>
        <p style={styles.lead}>Let's work together or just say hello.</p>
        <div style={styles.links}>
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={styles.linkItem}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
            >
              {label}
              <span style={styles.arrow}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '7rem 0',
    borderTop: '1px solid var(--border)',
  },
  container: {
    maxWidth: '640px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  label: {
    display: 'block',
    fontSize: '0.7rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    marginBottom: '2.5rem',
  },
  lead: {
    fontSize: '1.35rem',
    fontWeight: 300,
    lineHeight: 1.5,
    letterSpacing: '-0.01em',
    marginBottom: '2.5rem',
  },
  links: {},
  linkItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.2rem 0',
    borderTop: '1px solid var(--border)',
    color: 'var(--text)',
    fontSize: '0.875rem',
    letterSpacing: '0.02em',
  },
  arrow: {
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
  },
}
