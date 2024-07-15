import type { Config } from "tailwindcss"
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const svgToDataUri = require("mini-svg-data-uri");

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
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "aurora": "aurora 60s linear infinite",
        "meteor-effect": "meteor 5s linear infinite",
        "spotlight": "spotlight 2s ease .75s 1 forwards",
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
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // function ({ addUtilities }: any) {
    //   const newUtilities = {
    //     '.bg-green-radial': {
    //       background: `radial-gradient(51.5% 42.89% at 50% 25%, hsla(0,0%,100%,.2) 0%, hsla(0,0%,100%,0) 50%), 
    //                    radial-gradient(70% 60% at 50% 50%, rgba(89, 236, 165, 0.2) 0%, rgba(89, 236, 165, 0) 100%), 
    //                    hsl(var(--background))`,
    //     },
    //     '.bg-fuchsia-radial': {
    //       background: `radial-gradient(51.5% 42.89% at 50% 25%, hsla(0,0%,100%,.2) 0%, hsla(0,0%,100%,0) 50%), 
    //                    radial-gradient(70% 60% at 50% 50%, rgba(236, 89, 221, 0.2) 0%, rgba(236, 89, 221, 0) 100%), 
    //                    hsl(var(--background))`,
    //     },
    //     '.bg-cyan-radial': {
    //       background: `radial-gradient(51.5% 42.89% at 50% 25%, hsla(0,0%,100%,.2) 0%, hsla(0,0%,100%,0) 50%), 
    //                    radial-gradient(70% 60% at 50% 50%, rgba(89, 218, 236, 0.2) 0%, rgba(89, 218, 236, 0) 100%), 
    //                    hsl(var(--background))`,
    //     },
    //     '.bg-orange-radial': {
    //       background: `radial-gradient(51.5% 42.89% at 50% 25%, hsla(0,0%,100%,.2) 0%, hsla(0,0%,100%,0) 50%), 
    //                    radial-gradient(70% 60% at 50% 50%, rgba(236, 195, 89, 0.2) 0%, rgba(236, 195, 89, 0) 100%), 
    //                    hsl(var(--background))`,
    //     },
    //     '.bg-gray-radial': {
    //       background: `radial-gradient(51.5% 44% at 50% 33%, hsla(0,0%,100%,.2) 0%, hsla(0,0%,100%,0) 50%), 
    //                    radial-gradient(70% 50% at 50% 68%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 60%), 
    //                    hsl(var(--background))`,
    //     },
    //   };

    //   addUtilities(newUtilities, ['responsive', 'hover']);
    // },
    addCustomUtilities,
    addVariablesForColors,
    addAuroraColors,
    BgGridUtilities,
  ],
} satisfies Config

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}


function addCustomUtilities({ addUtilities, theme }: any) {
  const colors = flattenColorPalette(theme('colors'));

  const rgbaColor = (colorValue: string, opacity: number = 0.2) => {
    if (colorValue.startsWith('#')) {
      let r = 0, g = 0, b = 0;
      if (colorValue.length === 4) {
        r = parseInt(colorValue[1] + colorValue[1], 16);
        g = parseInt(colorValue[2] + colorValue[2], 16);
        b = parseInt(colorValue[3] + colorValue[3], 16);
      } else if (colorValue.length === 7) {
        r = parseInt(colorValue[1] + colorValue[2], 16);
        g = parseInt(colorValue[3] + colorValue[4], 16);
        b = parseInt(colorValue[5] + colorValue[6], 16);
      }
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    return colorValue;
  };

  const newUtilities = Object.entries(colors).reduce((acc, [colorName, colorValue]) => {
    const colorValueString = colorValue as string;
    return {
      ...acc,
      [`.bg-${colorName}-radial`]: {
        background: `radial-gradient(51.5% 42.89% at 50% 25%, hsla(0,0%,100%,.2) 0%, hsla(0,0%,100%,0) 50%), 
                     radial-gradient(70% 60% at 50% 50%, ${rgbaColor(colorValueString, 0.2)} 0%, ${rgbaColor(colorValueString, 0)} 100%), 
                     hsl(var(--background))`,
      },
    };
  }, {});

  addUtilities(newUtilities, ['responsive', 'hover']);
}

function BgGridUtilities({ matchUtilities, theme }: any) {
  matchUtilities(
    {
      "bg-grid": (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-grid-small": (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-dot": (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
        )}")`,
      }),
    },
    { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
  );
}


function addAuroraColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config
