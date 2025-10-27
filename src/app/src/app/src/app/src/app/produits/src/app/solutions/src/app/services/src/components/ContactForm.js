export function ContactForm() {
  // Remplacer TON_EMAIL et l'URL _next
  return (
    <form action="https://formsubmit.co/TON_EMAIL" method="POST" className="grid" style={{ gap: 12 }}>
      <input type="hidden" name="_subject" value="Demande depuis smarteducation.ma" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://smarteducation.ma/?sent=1" />

      <label>Nom complet*
        <input name="Nom complet" required style={{ width: "100%", padding: 10, border: "1px solid #ddd", borderRadius: 8 }} />
      </label>

      <label>Email*
        <input type="email" name="Email" required style={{ width: "100%", padding: 10, border: "1px solid #ddd", borderRadius: 8 }} />
      </label>

      <label>Société
        <input name="Société" style={{ width: "100%", padding: 10, border: "1px solid #ddd", borderRadius: 8 }} />
      </label>

      <label>Téléphone
        <input name="Téléphone" style={{ width: "100%", padding: 10, border: "1px solid #ddd", borderRadius: 8 }} />
      </label>

      <label>Objet
        <input name="Objet" placeholder="Demande de démo / devis" style={{ width: "100%", padding: 10, border: "1px solid #ddd", borderRadius: 8 }} />
      </label>

      <label>Intérêt
        <select name="Intérêt" style={{ width: "100%", padding: 10, border: "1px solid #ddd", borderRadius: 8 }}>
          <option value="">Sélectionner</option>
          <option value="Demande de démo">Demande de démo</option>
          <option value="Demande de devis">Demande de devis</option>
          <option value="Support">Support</option>
          <option value="Autre">Autre</option>
        </select>
      </label>

      <label>Message*
        <textarea name="Message" required rows={5} style={{ width: "100%", padding: 10, border: "1px solid #ddd", borderRadius: 8 }} />
      </label>

      <button type="submit" className="btn" style={{ alignSelf: "start" }}>Envoyer</button>
    </form>
  );
}
