import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bahia Rugby',
  description: 'Un lugar para desarrollar el deporte en familia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen w-screen overflow-x-hidden flex flex-col justify-between bg-orange`}
      >
        {children}
        <footer className="text-right px-8 py-2 text-xs bg-green">
          © {new Date().getFullYear()} K@to
        </footer>
      </body>
    </html>
  );
}
