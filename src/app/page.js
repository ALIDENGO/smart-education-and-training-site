export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <p className="eyebrow">Smart Education and Training</p>
            <h1>Écrans interactifs et classes numériques</h1>
            <p className="lead">
              Matériel + installation + formation. Des salles prêtes à l’emploi pour enseigner et
              collaborer efficacement.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/contact">Demander un devis</a>
              <a className="btn btn-ghost" href="/produits">Voir les produits</a>
            </div>
          </div>
          <div className="hero-media">
            <img src="/images/screen-1.jpg" alt="Écran interactif en classe" loading="eager" />
          </div>
        </div>
      </section>

      <section className="container section">
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

      <section className="container section">
        <h2>Exemples d’installations</h2>
        <div className="gallery">
          <img src="/images/screen-2.jpg" alt="Salle équipée 1" loading="lazy" />
          <img src="/images/screen-3.jpg" alt="Salle équipée 2" loading="lazy" />
          <img src="/images/screen-4.jpg" alt="Salle équipée 3" loading="lazy" />
          <img src="/images/screen-5.jpg" alt="Salle équipée 4" loading="lazy" />
          <img src="/images/screen-6.jpg" alt="Salle équipée 5" loading="lazy" />
          <img src="/images/screen-1.jpg" alt="Zoom écran interactif" loading="lazy" />
        </div>
      </section>
    </>
  );
}