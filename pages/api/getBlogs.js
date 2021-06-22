
import {gql} from 'graphql-tag';
import { getDisplayName } from 'next/dist/next-server/lib/utils';
//import client from '../apollo-client';
import client from '../../apollo-client'


export async function getStaticProps (){
    const {data} = await client.query({
        query : gql `
        query {
            blogs {
              id,
              title,
              article,
            }
          }
        `,
    });
    return {
        props : {
            blogs : data.blogs,
            revalidate : 1,
        }
    }
}
