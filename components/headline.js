import { Inter } from 'next/font/google'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export function Headline(props) {
  console.log(props.title);
  return (
    <div className={styles.description}>
      <p>
        <h1 className={styles.title}>{props.page} Page</h1>
        <code className={styles.description}>pages/{props.page}.js</code>
      </p>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  )
}
