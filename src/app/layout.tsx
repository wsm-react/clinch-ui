import type { Metadata, MetadataRoute } from "next";
import { cn } from "@/lib/utils"
import { Inter as FontSans } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";
import { ThemeProvider } from './provider';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "clinch webapp",
  description: "clinch-ui in create next app",
  metadataBase: new URL('https://clinch.com'),

  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [
    { name: 'Arun' },
    { name: 'Himanshu Joshi', url: 'https://nextjs.org' }
  ],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  creator: 'Arun Kumar Gupta',
  publisher: 'Webspeciman',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/favicon/site.webmanifest',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
    "mobile-web-app-capable": "yes",
    custom2: "asasas",
  },

};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
