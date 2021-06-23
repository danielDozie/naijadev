import Head from 'next/head'
import {useEffect, useState} from 'react'
import { Container, CardColumns, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { faDev, faEthereum, faGithub, faRedditAlien, faSlack, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas)
import {Col, Button, Card, Row } from 'react-bootstrap';
import styles from '../src/styles/Home.module.css';
import styled from 'styled-components';
import Hireme from '../src/components/Hireme';
import News from '../src/components/News'
import { GET_DEVS} from '../src/graphQL/graphqueries';
import client from '../src/lib/apolloClient';
import TechCrunchy from '../src/components/TechCrunchy';


//Site Title
const title = process.env.SiteTitle;

export async function getStaticProps(){
  const {data} = await client.query({
    query : GET_DEVS,
  });
  
  //console.warn('data', data.devs);
  return {
    props : {
      devs : data?.devs,
    }
  }
}



export default function Home({devs}) { 
  
  //Hireme Modal 
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleHide = () => setShowModal(false);
  const [likes, setLikes] = useState(0);
  
  
  const addLike = (e) => {
    e.preventDefault();
    return (
     //alert('key clicked!'),
     setLikes(likes + 1)
    );
  }
      
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
          <img src="/img/scene6.svg" />
        </div>
      </div>
        <Row className={styles.displayFlex}>
        <Col xs={12} md={9}>
        <CardColumns className={styles.columnDisplay}>

        {devs.map(dev=> (
              <CardWrapper className={styles.cardWrapper}>
              <Card.Body key={dev.id}>
                <div className={styles.column}>
                <Col md={4}>
                <img src={
                   dev.profile_pic === null ? '/img/no-image.svg' : dev.profile_pic.url
                }   className={styles.columnImage}  />
                </Col>
                <Col md={8} className="text-center">
                <Card.Title className={styles.columnTitle}> <a href={'/dev/' + `${dev.id}`}> {dev.name} </a> {dev.upvotes > 100 ? <Verified /> : ''}</Card.Title>
                <div className={styles.columnDescription} key={dev.stacks[0].id}>
                <p> {dev.stacks[0].tech} </p>
                </div>
                <div>
                {
                  dev.upvotes <= 10 ? <Star/> 
                  : dev.upvotes >= 15 && dev.upvotes <= 25 ? (<><Star/><Star/></>) 
                  : dev.upvotes >= 25 && dev.upvotes <= 35 ? (<><Star/><Star/><Star/></>) 
                  : dev.upvotes >= 35 && dev.upvotes <= 45 ? (<><Star/><Star/><Star/><Star/></>) 
                  : dev.upvotes >= 45 && dev.upvotes <= 50 ? (<><Star/><Star/><Star/><Star/><Star/></>) 
                  : (<><Star/><Star/><Star/><Star/><Star/></>)
                }
                </div>
                <div>
                <Button variant="outline-success" className={styles.dmBtn} onClick={handleShow}> Hire me for a Gig</Button>
                </div>
                </Col>
                
                </div>
                <Card.Text className={styles.columnText}>
                  {dev.description.slice(0,150)+'...'} <a href={'/dev/' + `${dev.id}`}> <FontAwesomeIcon icon={faInfoCircle} /></a>
                </Card.Text>
                <Card.Text className={styles.columnIconText}>
                    <span className={styles.iconLeft}>
                    
                    <a href="#" onClick={addLike}> <small>{dev.upvotes} Likes  <FontAwesomeIcon className={styles.columnIcon} icon={faHeart} /></small></a>
                  
                    </span>
                    <span className={styles.iconRight}>
                    <a href={dev.reddit_url} target="blank">  <small> <FontAwesomeIcon className={styles.columnIconX} icon={faRedditAlien} /></small></a>
                    <a href={dev.github_url} target="blank">   <small><FontAwesomeIcon className={styles.columnIconX} icon={faGithub} /></small> </a>
                    <a href={dev.dev_url} target="blank">  <small> <FontAwesomeIcon className={styles.columnIconX} icon={faDev} /></small> </a>
                    <a href={dev.stack_overflow_url} target="blank">  <small> <FontAwesomeIcon className={styles.columnIconX} icon={faStackOverflow} /></small></a>
                    <a href={dev.slack_channel} target="blank">  <small> <FontAwesomeIcon className={styles.columnIconX} icon={faSlack} /></small> </a>
                    </span>
                </Card.Text>
              </Card.Body>
            </CardWrapper>
          ))}
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


//using custom modules
export function Star() {
  return (
      <>
      <small><FontAwesomeIcon className={styles.columnIconStar} icon={["fas", "star"]} /></small>
      </>
  )
}

export const Verified = () => {
  return ( <img src='/img/verified.svg' className={styles.verified} /> );
}

//Using styled components
const Title = styled.div `
color : ${({theme})=> theme.titleColor};
padding: 15px;
`;
const CardWrapper = styled.div`
background: ${({ theme }) => theme.bodyBackground};
border-top: 10px solid ${({ theme }) => theme.borderTop};
color: ${({ theme }) => theme.text};
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
  
  


