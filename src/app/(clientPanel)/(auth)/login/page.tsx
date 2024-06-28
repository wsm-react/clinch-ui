import Image from "next/image";
import GetStartedNavBar from '../../_components/get-started-navbar';
import { Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function LoginScreen() {
  return (
    <div className="relative flex min-h-[calc(100vh-661px)] flex-col">
      <GetStartedNavBar />
      <h1>LoginScreen  Screen</h1>
    </div>
  );
}
