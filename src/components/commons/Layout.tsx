import { ReactNode } from 'react';
import { JetBrains_Mono } from 'next/font/google';

interface LayoutProps {
  children: ReactNode;
}

const jetbrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: '400',
});

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={jetbrains_mono.className}>
      {children}
    </div>
  );
};
