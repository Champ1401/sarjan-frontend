import '@/styles/globals.css'
import MainLayout from '@/components/layout/MainLayout'

export default function App({ Component, pageProps, router }) {
  // studio page ma header/footer hide karva
  const isStudio = router.pathname === '/studio'

  return isStudio ? (
    <Component {...pageProps} />
  ) : (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
