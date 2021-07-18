import {gql, useMutation} from 'graphql-tag';
    
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

export const ADD_UPVOTE = gql`
  mutation AddUpvote($type: Number!) {
    addUpvote(type: $type) {
      id
      type
    }
  }
`;
  
export const GET_BLOGS = gql `
  query {
    blogs {
      id
      title
      content
      author
      featured_image {
        url
      }
      createdAt
      updatedAt
    }
  } `;

