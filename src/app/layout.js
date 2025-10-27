import "./globals.css";

export const metadata = {
  title: "SMART EDUCATION AND TRAINING — Écrans Interactifs",
  description: "Solutions d’écrans interactifs, classes numériques et salles de réunion collaboratives."
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}