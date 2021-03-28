import Head from 'next/head'
import {useEffect, useState} from 'react'
import { Container, CardColumns } from 'react-bootstrap'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { faDev, faGithub, faRedditAlien, faSlack, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas)

import {Col, Button, Card } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';

const Title = styled.div `
color : ${({theme})=> theme.titleColor};
`
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




// export function AddLikes (e) {
//   e.preventDefault();
//   useEffect(() => {
//     axios.post(process.env.API_URL, {
//       upvotes : 1,
//     })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//   },[]);

// }



/** @param {import('next').InferGetStaticPropsType<typeof getStaticProps> } props */
export default function Home({devs}) { 

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid>
        <Title>
          <h1 className={styles.title} id='title'>Seen your fav dev yet?</h1>
          <p className={styles.description} id='description'>This platform is to ensure all local developers are well known by their community.</p>
        </Title>
        <br />
        <br />

        <div className={styles.banner}>
          <img src="/img/banner.svg" />
        </div>

        <div>
        <CardColumns>
        {devs.map(dev=> (
              <CardWrapper>
              <Card.Body key={dev.id}>
                <div className={styles.column}>
                <Col md={4}>
                <img src={
                   dev.profile_pic === null ? '/img/no-image.svg' : `${'https://nairaavenue.herokuapp.com/devs'}`["profile_pic"].url
                }   className={styles.columnImage}  />
                </Col>
                <Col md={8} className="text-center">
                <Card.Title className={styles.columnTitle}> {dev.name} {dev.upvotes > 100 ? <Verified /> : ''}</Card.Title>
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
                <Button variant="outline-success" className={styles.dmBtn}>Hire me for a Gig</Button>
                </div>
                </Col>
          
                </div>
                <Card.Text className={styles.columnText}>
                  {dev.description.slice(0,200)+'...'} <a href=""> &#10238;</a>
                </Card.Text>
                <Card.Text className={styles.columnIconText}>
                    <span className={styles.iconLeft}>
                      <a href="#" ><small>{dev.upvotes} Likes  <FontAwesomeIcon className={styles.columnIcon} icon={faHeart} /></small></a>
                      
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
        </div>
      </Container>
  </>)
}


export async function getStaticProps() {
  
  const query = await axios
  .get('https://nairaavenue.herokuapp.com/devs/')
  .then(response => response.data)
  return {
    props : {
      devs : query,
      revalidate: 1,
    }
  }
}
 

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
}`;
