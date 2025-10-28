export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
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

        <div className="cta" role="region" aria-label="Appel à l'action">
          <strong>Besoin d’un conseil rapide ?</strong>
          <a href="/contact">Parler à un expert</a>
        </div>
      </section>
    </>
  );
}