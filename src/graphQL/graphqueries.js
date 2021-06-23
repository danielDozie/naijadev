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
                }
              }
            }
            `;

export const GET_SINGLE_DEV = gql `
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

export const GET_SINGLE_BLOG = gql `
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
        