import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components'
import styles from '../styles/Home.module.css';
import {useState, useEffect} from 'react';
import { GET_BLOGS } from '../graphQL/graphqueries';
import client from '../lib/apolloClient';
import MySpinner from './MySpinner';

export default function News() {
    const [content, setContent] = useState(null)
    
    useEffect(() => {
        setTimeout( async () => {
        const {data} = await client.query({
            query : GET_BLOGS,
        })
        const all_blog = data?.blogs;
        setContent(
            <>
            <div>
                { all_blog.map(blog =>
                <div>
                <NewsTitle index={blog.id}>
                    <FontAwesomeIcon className={styles.gradientText} icon={faBlog}/><a href={'/blog/' + `${blog.id}`}><span style={myStyle.gradient}> {blog.title}</span></a> 
                </NewsTitle>
                
                <Article>
                <small style={myStyle.article}>{blog.article.slice(0, 30) + '...'}<a href={'/blog/' + `${blog.id}`}> Read more</a></small>
                </Article>
                <hr style={myStyle.hr} />
                </div>
                )}
            </div>
            <br/>
            <br/>
            </>
          );           
        }, 3000);
    }, [setContent]);
    
    if(!content) return <div style={myStyle.spnner}><MySpinner /></div>;
    if(content === "") return 'No Data Found.';
    
    return (
      <div>{content}</div>
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
        backgroundColor: 'rgb(34, 103, 144)',
        textTransform: 'uppercase',
        fontSize: '9px',
        /* Create the gradient. */
        // backgroundImage: 'linear-gradient(45deg, #14557b, #7fcec5)',
        
        /* Set the background size and repeat properties. */
        backgroundSize: '100%',
        backgroundRepeat: 'repeat',
        
        /* Use the text as a mask for the background. */
        /* This will show the gradient as a text color rather than element bg. */
        webkitBackgroundClip: 'text',
        webkitTextFillColor: 'transparent', 
        mozBackgroundClip: 'text',
        mozTextFillColor: 'transparent',
    },
    spinner:{
        textAlign: 'center !important',
    }
};

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
  color: ${({theme}) => theme.text};
`;

