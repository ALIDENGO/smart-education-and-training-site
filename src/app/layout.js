import "./globals.css";

export const metadata = {
  title: "SMART EDUCATION AND TRAINING — Écrans Interactifs",
  description:
    "Solutions d’écrans interactifs, classes numériques et salles de réunion collaboratives.",
  themeColor: "#0ea5e9",
  openGraph: {
    title: "SMART EDUCATION AND TRAINING — Écrans Interactifs",
    description:
      "Solutions d’écrans interactifs, classes numériques et salles de réunion collaboratives.",
    url: "https://smart-education-and-training-site.pages.dev/",
    siteName: "SMART EDUCATION AND TRAINING",
    images: [{ url: "/images/screen-1.jpg", width: 1200, height: 630, alt: "Écran interactif" }],
    type: "website"
  },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <a className="brand" href="/">
              <img
                src="/logo.png"
                alt="SMART EDUCATION AND TRAINING"
                width="36"
                height="36"
                className="brand-logo"
              />
              <span>SMART EDUCATION AND TRAINING</span>
            </a>
            <nav className="main-nav">
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