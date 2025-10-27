export default function SolutionsPage() {
  return (
    <section className="grid" style={{ gap: 12 }}>
      <h1 style={{ margin: 0, fontSize: 22 }}>Solutions</h1>
      <div className="grid cols-2">
        <div className="card">
          <h3>Éducation</h3>
          <p className="muted">Classe interactive, annotation, enregistrement, partage.</p>
        </div>
        <div className="card">
          <h3>Entreprise</h3>
          <p className="muted">Réunions hybrides, tableau blanc collaboratif, visioconférence.</p>
        </div>
      </div>
    </section>
  );
}
