import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export function Headline(props) {
  console.log(props.title);
  return (
    <div>
      <h1 className={styles.title}>{props.page} Page</h1>
      <p>
        <code className={styles.description}>pages/{props.page}.js</code>
      </p>
    </div>
  )
}
