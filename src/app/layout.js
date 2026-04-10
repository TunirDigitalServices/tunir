

import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import "../styles/globals.css";



export const metadata = {
  title: {
    default: "Tunir Digital Services",
    template: "%s | Tunir Digital",
  },
  description:
    "Tunir Digital Services is a digital agency specializing in web development, mobile applications, and digital marketing solutions.",
  keywords: [
    "Tunir Digital",
    "Web Development",
    "Next.js",
    "Digital Marketing",
    "Tunisia IT Agency",
  ],
  authors: [{ name: "Tunir Digital" }],
   icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Caveat:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="no-scrollbar overflow-y-scroll">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
