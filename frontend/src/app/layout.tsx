import { ReactNode } from 'react';
import Header from '../components/Header';
// import Footer from '../components/Footer';
import '../app/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <Header />
          <main>{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}