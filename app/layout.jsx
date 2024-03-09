// import './globals.css'
import Head from "./head";
import Header from './header'
import Provider from './provider'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head/>
      <body className='flex h-full flex-col'>
        <Provider>
          <Header />
          <main className='grow'>{children}</main>          
        </Provider>
      </body>
    </html>
  )
}
