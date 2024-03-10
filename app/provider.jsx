'use client'

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { SessionProvider } from 'next-auth/react'

const Provider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default Provider
