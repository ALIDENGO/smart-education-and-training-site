import "./globals.css";

export const metadata = {
  title: "SMART EDUCATION AND TRAINING — Écrans Interactifs",
  description: "Solutions d’écrans interactifs, classes numériques et salles de réunion collaboratives."
};

export default function RootLayout({ children }) {
  const phone = "TON_NUMERO_WHATSAPP"; // ex: +2126XXXXXXXX
  const message = encodeURIComponent("Bonjour SMART EDUCATION AND TRAINING, je souhaite une démo.");

  return (
    <html lang="fr">
      <body>
        <header className="header">
          <div className="nav">
            <a className="brand" href="/">
              <img src="/logo.png" alt="SMART EDUCATION AND TRAINING" />
              <span>SMART EDUCATION AND TRAINING</span>
            </a>
            <nav className="links">
              <a href="/produits">Produits</a>
              <a href="/solutions">Solutions</a>
              <a href="/services">Services</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer className="footer">
          <div className="footer-in">
            <p>© {new Date().getFullYear()} SMART EDUCATION AND TRAINING — Tous droits réservés.</p>
            <div className="links">
              <a href="/mentions-legales">Mentions légales</a>
              <a href="/politique-confidentialite">Confidentialité</a>
            </div>
          </div>
        </footer>

        <a
          className="float-wa"
          href={`https://wa.me/${phone}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="Nous écrire sur WhatsApp"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.66 0 .47 5.19.47 11.59c0 2.04.53 4.02 1.53 5.78L0 24l6.82-1.98a11.5 11.5 0 0 0 5.24 1.33h.01c6.4 0 11.59-5.19 11.59-11.59a11.5 11.5 0 0 0-3.14-8.29Zm-8.46 18.56h-.01a9.58 9.58 0 0 1-4.88-1.34l-.35-.21-4.05 1.18 1.16-3.95-.23-.4a9.52 9.52 0 0 1-1.34-4.87c0-5.29 4.3-9.59 9.59-9.59a9.53 9.53 0 0 1 6.79 2.81 9.5 9.5 0 0 1 2.8 6.79c0 5.29-4.3 9.58-9.58 9.58Zm5.52-7.15c-.3-.15-1.76-.86-2.03-.96-.27-.1-.46-.15-.66.15s-.76.96-.93 1.16c-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.19-.24-.58-.49-.5-.66-.51-.17-.01-.36-.01-.55-.01s-.52.07-.8.37c-.27.3-1.05 1.02-1.05 2.49 0 1.46 1.08 2.87 1.23 3.07.15.2 2.12 3.24 5.14 4.55.72.31 1.28.49 1.72.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}