
export default function Home() {
  return (
    <main style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Darling, I’ll call you later…</h1>
      <p>Sopron • 10 km-ig ingyenes kiszállítás</p>
      <a
        href="https://darling.waiterio.com/en/menu"
        target="_blank"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '14px 28px',
          background: '#fff',
          color: '#000',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        Rendelés indítása
      </a>
    </main>
  );
}
