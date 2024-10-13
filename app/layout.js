import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

export const metadata = {
  title: "Tomoyuki Fujii",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
