import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anna Select — байер из Праги',
  description: 'Шесть визуальных направлений для персонального байера в Праге.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
