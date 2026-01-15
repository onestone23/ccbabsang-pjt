import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '척척밥상',
  description: '척척밥상 상품 리스트',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' suppressHydrationWarning>
      <body className='antialiased' suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
