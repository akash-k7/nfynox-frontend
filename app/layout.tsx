import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
