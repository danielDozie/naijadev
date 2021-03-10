import axios from 'axios';

/** @param {import('next').InferGetStaticPropsType<typeof getStaticProps> } props */
export default function Result({results}) {
     return(
    <ul>
      {results.map(result => (
        <li key={result._id}>{result.name}</li>
      ))}
    </ul>

     )
 }


export async function getStaticProps() {
    const data = await axios
    .get('http://localhost:1337/devs')
    .then(res => res.data)
    return {
         props : {
         results  : data,
      }
  }
  }

