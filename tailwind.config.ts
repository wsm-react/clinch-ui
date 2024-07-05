import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        'blue': '0 4px 0px rgba(255, 255, 255, 0.3)',
        'multi-white': `
        8px 8px rgba(255, 255, 255, 0.2),
        16px 16px rgba(255, 255, 255, 0.1),
        24px 24px rgba(255, 255, 255, 0.08),
        32px 32px rgba(255, 255, 255, 0.05),
        40px 40px rgba(255, 255, 255, 0.02)`,
        'multi-orange': '8px 8px rgba(217, 119, 6, 0.2), 16px 16px rgba(217, 119, 6, 0.1), 24px 24px rgba(217, 119, 6, 0.08), 32px 32px rgba(217, 119, 6, 0.05), 40px 40px rgba(217, 119, 6, 0.02)',
        'multi-gray': '8px 8px rgba(128, 128, 128, 0.2), 16px 16px rgba(128, 128, 128, 0.1), 24px 24px rgba(128, 128, 128, 0.08), 32px 32px rgba(128, 128, 128, 0.05), 40px 40px rgba(128, 128, 128, 0.02)',
        // Add more custom shadows as needed
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.bg-green-radial': {
          background: `radial-gradient(51.5% 42.89% at 50% 25%, hsla(0,0%,100%,.2) 0%, hsla(0,0%,100%,0) 50%), 
                       radial-gradient(70% 60% at 50% 50%, rgba(89, 236, 165, 0.2) 0%, rgba(89, 236, 165, 0) 100%), 
                       hsl(var(--background))`,
        },
        '.bg-fuchsia-radial': {
          background: `radial-gradient(51.5% 42.89% at 50% 25%, hsla(0,0%,100%,.2) 0%, hsla(0,0%,100%,0) 50%), 
                       radial-gradient(70% 60% at 50% 50%, rgba(236, 89, 221, 0.2) 0%, rgba(236, 89, 221, 0) 100%), 
                       hsl(var(--background))`,
        },
        '.bg-cyan-radial': {
          background: `radial-gradient(51.5% 42.89% at 50% 25%, hsla(0,0%,100%,.2) 0%, hsla(0,0%,100%,0) 50%), 
                       radial-gradient(70% 60% at 50% 50%, rgba(89, 218, 236, 0.2) 0%, rgba(89, 218, 236, 0) 100%), 
                       hsl(var(--background))`,
        },
        '.bg-orange-radial': {
          background: `radial-gradient(51.5% 42.89% at 50% 25%, hsla(0,0%,100%,.2) 0%, hsla(0,0%,100%,0) 50%), 
                       radial-gradient(70% 60% at 50% 50%, rgba(236, 195, 89, 0.2) 0%, rgba(236, 195, 89, 0) 100%), 
                       hsl(var(--background))`,
        },
        '.bg-gray-radial': {
          background: `radial-gradient(51.5% 44% at 50% 33%, hsla(0,0%,100%,.2) 0%, hsla(0,0%,100%,0) 50%), 
                       radial-gradient(70% 50% at 50% 68%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 60%), 
                       hsl(var(--background))`,
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
} satisfies Config

export default config
