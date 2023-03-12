import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <header>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
