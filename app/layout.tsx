//////////////////////////////////////////////////
// ✅ 4-1. CSS Modules

import '../styles/global.css';
import Navigation from '../components/navigation';
import { Metadata } from 'next';

// 메타데이터에 대한 템플릿 생성 가능
export const metadata: Metadata = {
  title: {
    template: '%s | Next Movies',
    default: 'Next Movies',
  },
  description: 'The best movies on th best frameworks',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
