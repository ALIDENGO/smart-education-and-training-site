export default function HomePage() {
  return (
    <section className="grid" style={{ gap: 24 }}>
      <div className="hero">
        <h1>Écrans interactifs pour l’éducation et l’entreprise</h1>
        <p>
          SMART EDUCATION AND TRAINING accompagne écoles, universités et entreprises
          avec des solutions d’affichage interactif et de collaboration clé en main.
        </p>
        <div className="btns">
          <a className="btn" href="/contact">Demander une démo / devis</a>
          <a className="btn btn-sec" href="/produits">Voir nos produits</a>
        </div>
      </div>

      <div className="grid cols-3">
        {[
          { title: "Éducation", desc: "Salles de classe numériques, annotation et partage." },
          { title: "Entreprise", desc: "Réunions hybrides, brainstorming et visioconférences." },
          { title: "Accompagnement", desc: "Installation, formation, maintenance et support." }
        ].map((f) => (
          <div key={f.title} className="card">
            <h3>{f.title}</h3>
            <p className="muted">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid cols-2" style={{ alignItems: "center" }}>
        <div className="card" style={{ aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center", color: "#999" }}>
          Image/vidéo produit (placeholder)
        </div>
        <div className="grid" style={{ gap: 8 }}>
          <h2 style={{ margin: 0, fontSize: 22 }}>Pourquoi nous choisir ?</h2>
          <ul className="muted" style={{ lineHeight: 1.6 }}>
            <li>Affichage 4K, écriture fluide, stylets actifs</li>
            <li>Compatibilité Windows/macOS/Android, mirroring</li>
            <li>Logiciels pédagogiques/collaboratifs inclus</li>
            <li>Garantie, installation et formation</li>
          </ul>
          <div>
            <a href="/solutions" style={{ color: "#4338ca", fontWeight: 600 }}>Découvrir nos solutions</a>
          </div>
        </div>
      </div>
    </section>
  );
}
