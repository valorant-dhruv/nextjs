import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.body}>
      <h1 className={styles.centeredtext}>Football fact checker with fireproof</h1>
      <p className={styles.paragraph}>This website is a testing application which uses langchain to generate a result from the coherence LLM</p>
      <p className={styles.paragraph}>However the result returned from it is outdated and wrong for most prompts</p>
      <p className={styles.paragraph}>Therefore users have an option to vote a wrong answer and give a suggestion or a right answer. This data will be stored in fireproof and their cryptographic proofs will be generated</p>

    </main>
  )
}
