import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.body}>
      <h1 className={styles.centeredtext}>Football fact checker with fireproof</h1>
    </main>
  )
}
