import Head from 'next/head'
import { Container, CardColumns, Jumbotron, Row,Col } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import Cards from '../pages/components/Cards'


export default function Home() { 
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid>
        <div>
          <h1 className={styles.title} id='title'>Seen your fav dev yet?</h1>
          <p className={styles.description} id='description'>This platform is to ensure all local developers are well known by their community.</p>
        </div>
        <br />
        <br />

        <div className={styles.banner}>
          <img src="/img/banner.svg" />
        </div>
        <div>
        
          <CardColumns>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          </CardColumns>
        </div>

      </Container>

      
  </>)
}
