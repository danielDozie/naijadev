import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components'
import styles from '../styles/Home.module.css'

const NewsTitle = styled.div`
width: 90%;
margin: 0 auto;
color: ${({ theme }) => theme.text};
padding: 2px;
line-height: 20px;
    font-weight: 600;
    font-size: 11px;
`;

const Article = styled.div`
width: 90%;
margin: 0 auto;
padding: 2px;
font-size: 11px;
color: ${({theme}) => theme.footerText};
`;

export default function Index() {
  return (
    <>
        <div>
            { News.map ( n =>
            <div>
            <NewsTitle index={n.id}>
                <FontAwesomeIcon className={styles.gradientText} icon={faBlog}/><a href="#"><span style={myStyle.gradient}> {n.title}</span></a> 
            </NewsTitle>

            <Article>
            <small style={myStyle.article}>{n.article.slice(0, 30) + '...'}<a href=""> Read more</a></small>
            </Article>
            <hr style={myStyle.hr} />
            </div>
            )}
            
        </div>
        <br/>
        <br/>
    </>
  );
}






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
        color: '#6e7c80',
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

const News = [{
    id: 1,
    title: 'Facebook rolls out new tools for Group admins, including automated moderation aids.', 
    article: 'Facebook today introduced a new set of tools aimed at helping Facebook Group administrators get a better handle on their online communities and, potentially, help keep conversations from going off the rails. Among the more interesting new tools is a machine learning-powered feature that alerts admins to potentially unhealthy conversations taking place in their group. Another lets the admin slow down the pace of a heated conversation, by limiting how often group members can post.',
  },
  {
    id: 2,
    title: 'Your boss might tell you the office is more secure, but it isn’t.', 
    article: 'For the past 18 months, employees have enjoyed increased flexibility, and ultimately a better work-life balance, as a result of the mass shift to remote working necessitated by the pandemic. Most don’t want this arrangement, which brought an end to extensive commutes and superfluous meetings, to end: Buffer’s 2021 State of Remote Work report shows over 97% of employees would like to continue working remotely at least some of the time.',
  },
  {
    id: 3,
    title: 'Companies should utilize real-time compensation data to ensure equal pay.', 
    article: 'Diversity, equity and inclusion (DEI) initiatives are often thought to be an issue that can be solved by intuition by some segment of the HR team. However, in reality, it needs to come from a data-driven approach that encompasses the entire workforce. The primary aspect that companies usually look to, in terms of treating employees fairly, is remuneration. However, having the conversation and agreeing on the need for equality doesn’t mean it will be achieved on an organizational scale.',
  },
  {
    id: 4,
    title: 'Your boss might tell you the office is more secure, but it isn’t.', 
    article: 'For the past 18 months, employees have enjoyed increased flexibility, and ultimately a better work-life balance, as a result of the mass shift to remote working necessitated by the pandemic. Most don’t want this arrangement, which brought an end to extensive commutes and superfluous meetings, to end: Buffer’s 2021 State of Remote Work report shows over 97% of employees would like to continue working remotely at least some of the time.',
  },
  ];