import Link from 'next/link'
import styles from "./layout.module.css"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <NavigationBar/>
        {children}
      </body>
    </html>
  )
}

function NavigationBar()
{
  return(
    // <Link href="/langchain">Langchain</Link>
    <h4>Navigation Bar here</h4>
  ) 
}
