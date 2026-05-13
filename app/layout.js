import "./globals.css";

export const metadata = {
  title: "EC MOVE AUTO",
  description: "Convoyage automobile premium",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

