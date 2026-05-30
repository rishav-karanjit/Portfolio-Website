export default function Nav() {
  return (
    <nav style={styles.nav}>
      <a href="#" style={styles.logo}>RK</a>
      <ul style={styles.ul}>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  )
}

const styles = {
  nav: {
    position: 'fixed',
    inset: '0 0 auto 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.5rem 2.5rem',
    zIndex: 100,
    background: 'var(--bg)',
    borderBottom: '1px solid var(--border)',
  },
  logo: {
    fontWeight: 500,
    letterSpacing: '0.06em',
    color: 'var(--text)',
    fontSize: '0.875rem',
  },
  ul: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
  },
  link: {
    color: 'var(--text-muted)',
    fontSize: '0.8rem',
    letterSpacing: '0.06em',
    transition: 'color 0.2s',
  },
}
