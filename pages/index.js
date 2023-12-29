import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Links } from '../components/links.js'
import { Footer } from '../components/footer.js'
import { Headline } from '@/components/headline.js'
import { Logo } from '@/components/logo.js'
import { Tab } from '@/components/tab.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Tab page='index'/>
      <main className={`${styles.main} ${inter.className}`}>
        <Headline page='index'/>
        <Logo />
        <Links />
      </main>
      <Footer />
    </>
  )
}
