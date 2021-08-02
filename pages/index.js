import Head from 'next/head'
import {useEffect, useState} from 'react'
import { Container, CardColumns, Modal } from 'react-bootstrap'
import {Col, Button, Card, Row } from 'react-bootstrap';
import styles from '../src/styles/Home.module.css';
import styled from 'styled-components';
import Hireme from '../src/components/Hireme';
import News from '../src/components/News'
import TechCrunchy from '../src/components/TechCrunchy';
import { Developers } from '../src/components/Developers';
import LazyLoad from 'react-lazy-load';


//Site Title
const title = process.env.SiteTitle;



export default function Home() {
  //Hireme Modal
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleHide = () => setShowModal(false);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
      <Container fluid>
      <div>
      <Title>
          <h1 className={styles.title} id='title'>Seen your fav dev yet?</h1>
          <p className={styles.description} id='description'>This platform is to ensure all local developers are well known by their community.</p>
        </Title>
        <br />
        <br />
        <div className={styles.banner}>
          <img src="/img/scene6.svg"  alt={'home banner'}/>
        </div>
      </div>
        <Row className={styles.displayFlex}>
        <Col xs={12} md={9}>

        <CardColumns className={styles.columnDisplay}>
          <LazyLoad width={'100%'} height={'100%'}>
              <Developers />
          </LazyLoad>
        </CardColumns>
        </Col>
        <Col xs={12} md={3}>
        <Container>
        <NewsWrapper className={styles.newsWrapper} fixed>
          <Title>
            <h6 className={styles.titleNews}>DEV.HUB NEWS</h6>
            <small>Join our 3,000+ readers worldwide and explore the possibilities of ngDev.Hub. The very insightful developer's hub.</small>
            <hr/>
          </Title>
          <News />
        </NewsWrapper>
        <TechCrunch className={styles.newsWrapper} fixed>
        <Title>
            <h6 className={styles.titleTechCrunch}><img src='/img/techchrunch.svg' width='24px' height='24px'/> TECH CRUNCH FEEDS</h6>
            <hr/>
          </Title>
          <TechCrunchy />
        </TechCrunch>
        </Container>
        </Col>
        </Row>
        <Hireme show={showModal} onHide={handleHide} />
      </Container>
  </>)
}




//Using styled components
const Title = styled.div `
color : ${({theme})=> theme.titleColor};
padding: 15px;
`;

const NewsWrapper = styled.div`
background: ${({ theme }) => theme.bodyBackground};
border-top: 10px solid ${({ theme }) => theme.borderTop};
/* color: ${({ theme }) => theme.text}; */
position: ${({ theme }) => theme.position};
display: ${({ theme }) => theme.display};
flex-direction: ${({ theme }) => theme.flexDirection};
min-width: ${({ theme }) => theme.minWidth};
word-wrap: ${({ theme }) => theme.wordWrap};
background-color: ${({ theme }) => theme.backgroundColor};
background-clip: ${({ theme }) => theme.backgroundClip};
border-radius: ${({ theme }) => theme.borderRadius};
margin-bottom: ${({ theme}) => theme.marginBottom};
min-height: 300px;
`;

const TechCrunch = styled.div`
background: ${({ theme }) => theme.techcrunch};
/* color: ${({ theme }) => theme.text}; */
position: ${({ theme }) => theme.position};
display: ${({ theme }) => theme.display};
flex-direction: ${({ theme }) => theme.flexDirection};
min-width: ${({ theme }) => theme.minWidth};
word-wrap: ${({ theme }) => theme.wordWrap};
background-color: ${({ theme }) => theme.backgroundColor};
background-clip: ${({ theme }) => theme.backgroundClip};
border-radius: ${({ theme }) => theme.borderRadius};
margin-bottom: ${({ theme}) => theme.marginBottom};
max-height: 270px;

`;

const myStyle = {
    title: {
        textTransform: 'uppercase',
        fontSize: '9px',
    },
    hr: {
        width: '60%',
        borderTop: '2px solid #9e9e9e99',
    },
    article: {
        color: '#666968',
    },
    gradient:{
        /* Fallback: Set a background color. */
        backgroundColor: 'red',
        textTransform: 'uppercase',
        fontSize: '9px',
        /* Create the gradient. */
        backgroundImage: 'linear-gradient(45deg, #14557b, #7fcec5)',

        /* Set the background size and repeat properties. */
        backgroundSize: '100%',
        backgroundRepeat: 'repeat',

        /* Use the text as a mask for the background. */
        /* This will show the gradient as a text color rather than element bg. */
        webkitBackgroundClip: 'text',
        webkitTextFillColor: 'transparent',
        mozBackgroundClip: 'text',
        mozTextFillColor: 'transparent',
    }
  };

