import "./globals.css";
import type { Metadata, Viewport } from "next";
import { cn } from "@/_lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from './provider';
import { Analytics } from '@vercel/analytics/react';
import { poppinsFont } from '@/_lib/fonts';

export const metadata: Metadata = {
  title: {
    default: "",
    template: "%s | clinch"
  },
  description: "clinch-ui in create next app",
  metadataBase: new URL('https://clinch.com'),
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [
    { name: 'Himanshu Joshi', url: 'https://clinch.com' }
  ],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  creator: 'webspeciman',
  publisher: 'webspeciman',
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
  manifest: '/favicon/site.webmanifest',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    // googleBot: {
    //   index: true,
    //   follow: false,
    //   noimageindex: true,
    //   'max-video-preview': -1,
    //   'max-image-preview': 'large',
    //   'max-snippet': -1,
    // },
  },
  // icons: {
  //   icon: '/favicon/favicon-32x32.png',
  //   shortcut: '/shortcut-icon.png',
  //   apple: '/apple-icon.png',
  //   other: {
  //     rel: 'apple-touch-icon-precomposed',
  //     url: '/apple-touch-icon-precomposed.png',
  //   },
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Next.js',
  //   description: 'The React Framework for the Web',
  //   siteId: '1467726470533754880',
  //   creator: '@nextjs',
  //   creatorId: '1467726470533754880',
  //   images: ['https://nextjs.org/og.png'], // Must be an absolute URL
  // },
  // verification: {
  //   google: 'google',
  //   yandex: 'yandex',
  //   yahoo: 'yahoo',
  //   other: {
  //     me: ['my-email', 'my-link'],
  //   },
  // },
  // appleWebApp: {
  //   title: 'Apple Web App',
  //   statusBarStyle: 'black-translucent',
  //   startupImage: [
  //     '/assets/startup/apple-touch-startup-image-768x1004.png',
  //     {
  //       url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
  //       media: '(device-width: 768px) and (device-height: 1024px)',
  //     },
  //   ],
  // },
  // alternates: {
  //   canonical: 'https://nextjs.org',
  //   languages: {
  //     'en-US': 'https://nextjs.org/en-US',
  //     'de-DE': 'https://nextjs.org/de-DE',
  //   },
  //   media: {
  //     'only screen and (max-width: 600px)': 'https://nextjs.org/mobile',
  //   },
  //   types: {
  //     'application/rss+xml': 'https://nextjs.org/rss',
  //   },
  // },
  // appLinks: {
  //   ios: {
  //     url: 'https://nextjs.org/ios',
  //     app_store_id: 'app_store_id',
  //   },
  //   android: {
  //     package: 'com.example.android/package',
  //     app_name: 'app_name_android',
  //   },
  //   web: {
  //     url: 'https://nextjs.org/web',
  //     should_fallback: true,
  //   },
  // },
  other: {
    "apple-mobile-web-app-status-bar-style": "dark",
    "apple-mobile-web-app-capable": "yes",
  },

};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "dark"
}


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased transition-all", [poppinsFont], "overflow-y-scroll overflow-x-hidden")} suppressHydrationWarning>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
