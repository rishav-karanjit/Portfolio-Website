export default function About() {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <span style={styles.label}>About</span>
        <p style={styles.lead}>
          Hi, I'm Rishav — a Software Development Engineer who loves building
          clean, efficient, and user-focused software.
        </p>
        <p style={styles.body}>
          I'm passionate about writing well-crafted code and solving hard
          problems. When I'm not at my keyboard, you'll find me exploring new
          technologies or thinking about ways to make things simpler and better.
        </p>
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
    marginBottom: '1.5rem',
  },
  body: {
    color: 'var(--text-muted)',
    fontSize: '0.95rem',
    lineHeight: 1.75,
  },
}
