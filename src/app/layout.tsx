import type { Metadata } from "next";
import { Barlow, Teko, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingIcons from "@/components/layout/FloatingIcons";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Preloader from "@/components/layout/Preloader";
import { ThemeProvider, THEME_STORAGE_KEY } from "@/components/providers/ThemeProvider";

const noFlashThemeScript = `
(function () {
  try {
    var stored = localStorage.getItem('${THEME_STORAGE_KEY}');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const teko = Teko({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-teko",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example-torkin-clone.com"),
  title: {
    default: "Torkin | Industrial Coupling Manufacturer",
    template: "%s | Torkin",
  },
  description:
    "Torkin manufactures tyre, rigid, pin bush, spacer, star and star coupler industrial couplings for textile, packaging, HVAC and power-generation drivetrains.",
  openGraph: {
    title: "Torkin | Industrial Coupling Manufacturer",
    description:
      "Precision-manufactured industrial couplings for continuous-duty drivetrains.",
    type: "website",
  },
  icons: {
    icon: "/images/logo/torkin-logo.jpg",
    apple: "/images/logo/torkin-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashThemeScript }} />
      </head>
      <body className={`${barlow.variable} ${teko.variable} ${lato.variable}`}>
        <ThemeProvider>
          <Preloader />
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingIcons />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
