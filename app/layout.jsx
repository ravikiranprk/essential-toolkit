import { Open_Sans } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import { AuthProvider } from "./Providers";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
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
          {children}
          <hr />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
