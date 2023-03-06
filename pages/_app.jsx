import '@/styles/globals.css'
import localFont from "@next/font/local";
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'


// Font files can be colocated inside of pages
const utopia = localFont({
  src: [
    {
      path: "../public/fonts/UtopiaStd-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/UtopiaStd-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/UtopiaStd-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-utopia",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${utopia.variable} font-sans`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
