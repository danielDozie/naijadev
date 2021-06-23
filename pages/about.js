import Head from 'next/head'
import { Container } from 'react-bootstrap';
const title = process.env.SiteTitle;
import styles from '../src/styles/About.module.css'
import styled from 'styled-components'
import { basePath } from '../next.config';

export default function About() {
  return (
    <>
        <Head>
            <title>About - {title}</title>
        </Head>

        <Container fluid>
            <Title>
                <h1 className={styles.title} id='title'>About </h1>
                <p className={styles.description} id='description'>ngDevHub</p>
            </Title>
            
            <CardWrapper className={styles.aboutCard}>

            <AboutContent>
            <div className="d-md-flex">
                <div className="col-md-4">
                    <img src="/img/scene5.svg" width="350px"/>
                </div>
                <div className="col-md-6">
                <Text>
                    <h3 className={styles.title} id='title'>What's this about? </h3>
                    <div>
                    <br/>
                        <p>ngDevHub is distinct platform for developers recruitment. The idea behind this simple. We carefully list out some of the best developers who are very proficient in different tech stacks, usually, these developers are recommended, then we add them to the platform manually after series of Q's & A's as to verify their stack proficiency.  
                        During this process, we look out for these in all our developers:
                        <ul>
                            <li>Positive Attitude</li>
                            <li>Big-Picture Focus</li>
                            <li>Good Time and Task Management</li>
                        </ul>
                        </p>
                    </div>
                </Text>
                </div>            
            </div>               
            <Text style={{ 'padding': '20px'}}>
                 <p>
                 Once a developer is added, s/he is vetted by other people (Dev & Non-Dev) s/he knows until s/he reaches a status where s/he is verified. Each vote is counted as valid only when the voter uses a valid and verifiable email address.
                 Every <b>10</b> votes gives a developer a star rating and <b>50</b> votes to make a dev <b>5-Star</b> proficient. Votes over <b>100</b> makes the dev a verified professional in his field and without doubt, every recruiter can always trust a verified dev.
                 </p>     
                    
            </Text>
            </AboutContent>
            </CardWrapper>
        </Container>

    </>
  );
}


const Title = styled.div `
color : ${({theme})=> theme.titleColor};
`;

const AboutContent = styled.div `
    color: ${({theme})=> theme.text};
    margin-top: 20px;
    padding: 20px;
`;

const CardWrapper = styled.div`
background: ${({ theme }) => theme.bodyBackground};
border-top: 10px solid ${({ theme }) => theme.borderTop};
color: ${({ theme }) => theme.text};
position: ${({ theme }) => theme.position};
display: "block";
min-width: ${({ theme }) => theme.minWidth};
word-wrap: ${({ theme }) => theme.wordWrap};
background-color: ${({ theme }) => theme.backgroundColor};
background-clip: ${({ theme }) => theme.backgroundClip};
border-radius: ${({ theme }) => theme.borderRadius};
margin-bottom: ${({ theme}) => theme.marginBottom};
min-height: 300px;
`;

const Text = styled.div `
color : ${({theme})=> theme.titleColor};
`;