import { ContactForm } from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <section className="grid" style={{ gap: 12, maxWidth: 720, margin: "0 auto" }}>
      <h1 style={{ margin: 0, fontSize: 22 }}>Contact & Demande de Démo</h1>
      <p className="muted">Dites-nous en plus sur votre besoin. Réponse sous 24h ouvrées.</p>
      <div className="card"><ContactForm /></div>
      <p className="muted" style={{ fontSize: 13 }}>
        En soumettant ce formulaire, vous acceptez d’être recontacté par SMART EDUCATION AND TRAINING.
      </p>
    </section>
  );
}
