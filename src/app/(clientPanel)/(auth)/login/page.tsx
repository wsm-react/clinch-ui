import Image from "next/image";
import GetStartedNavBar from '../../_components/get-started-navbar';
import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: "login",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  description: "Clinch login",
  alternates: {
    canonical: '/get-started'
  },
  keywords: ['get-started', 'React get-started'],
}

export default function LoginScreen() {
  return (
    <div className="relative flex min-h-[calc(100vh-661px)] flex-col">
      <GetStartedNavBar />
      <h1>LoginScreen  Screen</h1>
    </div>
  );
}
