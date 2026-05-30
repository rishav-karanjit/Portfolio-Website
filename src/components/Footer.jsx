export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <span style={styles.text}>© {new Date().getFullYear()} Rishav Karanjit</span>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    padding: '2.5rem 0',
    borderTop: '1px solid var(--border)',
  },
  container: {
    maxWidth: '640px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  text: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.04em',
  },
}
