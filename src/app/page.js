export default function Home() {
  return (
    <section>
      <h1>Écrans interactifs et classes numériques</h1>
      <p>Bienvenue sur SMART EDUCATION AND TRAINING.</p>

      <div className="cards">
        <a className="card" href="/produits">
          <h3>Produits</h3>
          <p>Écrans, OPS, supports, accessoires…</p>
        </a>
        <a className="card" href="/services">
          <h3>Services</h3>
          <p>Installation, formation, maintenance.</p>
        </a>
        <a className="card" href="/contact">
          <h3>Contact</h3>
          <p>Demandez un devis ou une démo.</p>
        </a>
      </div>
    </section>
  );
}