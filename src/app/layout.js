import "./globals.css";

export const metadata = {
  title: "SMART EDUCATION AND TRAINING — Écrans Interactifs",
  description: "Solutions d’écrans interactifs, classes numériques et salles de réunion collaboratives.",
  themeColor: "#2563eb"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <a className="brand" href="/" aria-label="Accueil">SMART EDUCATION AND TRAINING</a>
            <nav className="main-nav" aria-label="Navigation principale">
              <a href="/">Accueil</a>
              <a href="/produits">Produits</a>
              <a href="/services">Services</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container">
            © {new Date().getFullYear()} SMART EDUCATION AND TRAINING — Tous droits réservés
          </div>
        </footer>
      </body>
    </html>
  );
}