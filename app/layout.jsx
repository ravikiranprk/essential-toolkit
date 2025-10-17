import { Open_Sans, Playwrite_DE_Grund_Guides } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import { AuthProvider } from "./Providers";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});

const playWrite = Playwrite_DE_Grund_Guides({ 
  subsets: ['latin'], 
  weight: '400',
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata = {
  title: "Essential Toolkit",
  description: "An all-in-one essential utility web application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} antialiased`}
      >
        <AuthProvider>
          <Menu />
          <h1 className={`flex gap-4 mt-4 items-center pl-6 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-5 ${playWrite.className} bg-clip-text text-transparent bg-gradient-to-tr from-cyan-800 via-cyan-600 to-cyan-300`}>
            <a href="/">
              <img
                src="/EssentialToolkitLogo.png"
                alt="Essential Toolkit Logo"
                className="w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] xl:w-[85px] xl:h-[85px] rounded-full"
              />
            </a>
            <a href="/">
              Essential Toolkit
            </a>
          </h1>
          {children}
          <hr />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
