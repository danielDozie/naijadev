import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import styles from '../styles/Layout.module.css'
// import ReactAudioPlayer from 'react-audio-player';


export default function Layout({children}) {
    return (<>

        <Header />
        
        <main className={styles.spacer}>
            {children}
        </main>
        
        {/* <ReactAudioPlayer src="/Snowchild.mp3" autoPlay={true} loop={true}  volume={1.0} /> */}
        <Footer />
        
   </> )
}
