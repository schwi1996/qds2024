import './globals.css'
import Head from "./head";
import Header from './header'
import Footer from './footer'
import Provider from './provider'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head/>
      <body className='flex h-full flex-col' style={{
      backgroundImage: "url('/day_firewatch.jpg')",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat"
    }}>
        <Provider>
          <Header />
          <main className='grow'>{children}</main>                 
        </Provider>
        <Footer />
      </body>
    </html>
  )
}
