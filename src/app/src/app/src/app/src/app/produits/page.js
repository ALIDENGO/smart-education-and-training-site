const products = [
  { name: "Écran Interactif 65” 4K", desc: "Idéal pour salles de classe et petites salles de réunion.", specs: "4K UHD, multi‑touch, Android intégré" },
  { name: "Écran Interactif 75” 4K", desc: "Polyvalent pour classes et espaces collaboratifs.", specs: "4K UHD, stylets actifs, Wi‑Fi" },
  { name: "Écran Interactif 86” 4K", desc: "Grand format pour amphithéâtres et conférences.", specs: "4K UHD, audio intégré, OPS compatible" }
];

export default function ProduitsPage() {
  return (
    <section className="grid" style={{ gap: 16 }}>
      <h1 style={{ margin: 0, fontSize: 22 }}>Nos produits</h1>
      <p className="muted">Écrans interactifs, logiciels et accessoires.</p>
      <div className="grid cols-3">
        {products.map((p) => (
          <div key={p.name} className="card">
            <h3>{p.name}</h3>
            <p className="muted">{p.desc}</p>
            <p className="muted" style={{ fontSize: 13 }}>{p.specs}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
