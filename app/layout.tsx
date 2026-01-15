import type { Metadata } from 'next';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const iconUrl = `${basePath}/image/logo.jpeg`;

export const metadata: Metadata = {
  title: '척척밥상',
  description: '척척밥상 상품 리스트',
  icons: {
    icon: [{ url: iconUrl, type: 'image/jpeg' }],
    apple: [{ url: iconUrl, type: 'image/jpeg' }],
  },
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
