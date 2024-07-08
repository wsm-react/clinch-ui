
import GetStartedNavBar from '@/app/(clientPanel)/_components/get-started-navbar';
import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: "Forgot Password",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  description: "Clinch Forgot Password",
  alternates: {
    canonical: '/forgot-password'
  },
  keywords: ['get-started', 'React get-started'],
}

export default function ForgotPasswordScreen() {
  return (
    <div className="relative flex min-h-[calc(100vh-661px)] flex-col">
      <GetStartedNavBar />
      <h1>ForgotPasswordScreen  Screen</h1>
    </div>
  );
}
