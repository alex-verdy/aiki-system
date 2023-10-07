import { SidebarContextProvider } from '@/components/layout/sideBarCtx'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
        <SidebarContextProvider>
          
            <Component {...pageProps} />
          
        </SidebarContextProvider>
     
  )
}
