import "./globals.css";
import Head from "./head";
import Header from "./header";
import Footer from "./footer";
import Provider from "./provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body
        className="flex h-full flex-col"
        style={{
          backgroundImage: "url('/day_firewatch.jpg')",
          backgroundSize: "fill fill",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Provider>
          <Header />
          <div className='flex h-screen flex-col bg-[url("/day_firewatch.jpg")] bg-cover'>
            <main className="flex-grow">{children}</main>
          </div>
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
