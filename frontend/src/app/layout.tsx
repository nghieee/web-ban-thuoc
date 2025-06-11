import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import '../app/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <Header />
          <NavigationBar categories={null} />
          <main className="bg-[#EAEFFA]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}