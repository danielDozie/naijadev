import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import styles from '../styles/Layout.module.css'


export default function Layout({children}) {
    return (<>

        <Header />
        <main className={styles.spacer}>
            {children}
        </main>
        <Footer />
        
   </> )
}
