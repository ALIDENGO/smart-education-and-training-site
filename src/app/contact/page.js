'use client';

export const metadata = { title: "Contact — SMART EDUCATION AND TRAINING" };

const EMAIL = "contact@example.com";     // <-- remplace par ton email
const PHONE = "+33 1 23 45 67 89";       // <-- remplace par ton numéro

export default function Contact() {
  return (
    <section className="container section">
      <h1>Contact</h1>
      <p className="lead">Demandez un devis, une démo ou posez-nous vos questions.</p>

      <div style={{ maxWidth: 820 }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const name = encodeURIComponent(form.name.value || "");
            const email = encodeURIComponent(form.email.value || "");
            const subject = encodeURIComponent(form.subject.value || "Demande depuis le site");
            const message = encodeURIComponent(form.message.value || "");
            window.location.href =
              `mailto:${EMAIL}?subject=${subject}` +
              `&body=Nom:%20${name}%0D%0AEmail:%20${email}%0D%0A%0D%0A${message}`;
          }}
        >
          <label style={{ display: "block", marginTop: 12 }}>
            Nom
            <input name="name" type="text" required
              style={{ width: "100%", padding: 10, marginTop: 6, borderRadius: 8, border: "1px solid var(--border)" }} />
          </label>

          <label style={{ display: "block", marginTop: 12 }}>
            Email
            <input name="email" type="email" required
              style={{ width: "100%", padding: 10, marginTop: 6, borderRadius: 8, border: "1px solid var(--border)" }} />
          </label>

          <label style={{ display: "block", marginTop: 12 }}>
            Objet
            <input name="subject" type="text" placeholder="Ex: Demande de devis pour 10 salles"
              style={{ width: "100%", padding: 10, marginTop: 6, borderRadius: 8, border: "1px solid var(--border)" }} />
          </label>

          <label style={{ display: "block", marginTop: 12 }}>
            Message
            <textarea name="message" rows={6} required
              style={{ width: "100%", padding: 10, marginTop: 6, borderRadius: 8, border: "1px solid var(--border)" }} />
          </label>

          <div style={{ marginTop: 14, display: "flex", gap: 12 }}>
            <button className="btn btn-primary" type="submit">Envoyer par email</button>
            <a className="btn btn-ghost" href={`tel:${PHONE.replace(/\s+/g, "")}`}>Appeler {PHONE}</a>
          </div>
        </form>

        <div style={{ marginTop: 22, color: "var(--muted)" }}>
          <p><strong>Email :</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          <p><strong>Téléphone :</strong> <a href={`tel:${PHONE.replace(/\s+/g, "")}`}>{PHONE}</a></p>
          <p><strong>Adresse :</strong> 12 Rue Exemple, 75001 Paris</p>
        </div>
      </div>
    </section>
  );
}