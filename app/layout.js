import './globals.css';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
