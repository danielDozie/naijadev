import {gql} from 'graphql-tag';
import client from '../../apollo-client'

export async function GET_ALL_DEV(){
   const {data} = await client.query({
     query : gql `
     query {
       devs {
         id,
         name,
         description,
         upvotes,
         stacks {
           id,
           tech,
         },
         dev_url,
         slack_channel,
         github_url,
         reddit_url,
         profile_pic {
           id,
           name,
           url,
           width,
           height,
           ext
         }
       }
     }
     `,
   });

   return {
     props: {
       devs: data,
     }
   }
 
 
 }