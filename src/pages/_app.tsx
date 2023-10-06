import { SidebarContextProvider } from '@/components/layout/sideBarCtx'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { motion as m, AnimatePresence  } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }
  return (
    <AnimatePresence
      mode={ 'wait' }
      onExitComplete={() => window.scrollTo(0, 0)}>
        <SidebarContextProvider>
          <m.div
            key={router.route}
            variants={variants} // Pass the variant object into Framer Motion 
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ duration: .35 }} // Set the transition to linear
            className="">
            <Component {...pageProps} />
          </m.div>
        </SidebarContextProvider>
      </AnimatePresence>
  )
}
