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

//This react component is shared across all the routes
function NavigationBar()
{
  return(
    
   <div>
     <Link className={styles.navlink} href="/langchain">Prompt</Link>
     <br></br>
     <Link className={styles.navlink} href="/">Home</Link>
   </div>
  ) 
}
