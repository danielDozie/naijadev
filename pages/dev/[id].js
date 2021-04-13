import Head from 'next/head'
import getDevsApi from '../api/devsApi'
const title = process.env.SiteTitle;

/** @param {import('next').InferGetStaticPropsType<typeof getStaticProps> } props */

export default function Devs(props) {
    return (<>
    <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{props.name} - {title}</title>
    </Head>
        <div>
            <h1>
                Hello and welcome to this dev's page.
            </h1>
            <h1>{props.name}</h1>
            <h2>{props.id}</h2>
            {props.description}
        </div>
   </> )
}


export async function getStaticPaths() {
    
    const query = await getDevsApi();
    const paths = query.map(dev => ({
        params: {id: dev.id}
    }));
    return {
        paths,
        fallback: false,
    }
}


export async function getStaticProps({params}) {
    const query = await getDevsApi();
    //using  js array prototype .find()
    const data = query.find(dev => (dev.id === params.id ));
    
    return {
        props: data,
    }
}
