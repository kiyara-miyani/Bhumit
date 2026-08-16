import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

declare global {
  interface Window { gtag?: (...args:any[]) => void }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

function sendPageView(url: string) {
  if (!GA_ID || !window.gtag) return
  window.gtag('config', GA_ID, { page_path: url })
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => sendPageView(url)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return (
    <>
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);} 
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}
      <Component {...pageProps} />
    </>
  )
}
