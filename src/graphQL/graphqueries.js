import {gql} from 'graphql-tag';
    
export const GET_DEVS = gql `
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
            `;
  
export const GET_BLOGS = gql `
        query {
            blogs {
              id,
              title,
              article,
              createdAt,
              updatedAt
            }
          }
        `;
