import {
  gql,
} from 'graphql-tag';

export const GET_DEVS = gql`
query Devs {
  devs {
    id
    fullname: name
    description
    upvotes
    stacks {
      id
      tech
    }
    dev_url
    slack_channel
    github_url
    reddit_url
    profile_pic {
      id
      name
      url
    }
  }
}
`;

export const GET_BLOGS = gql`
  query Blogs{
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
  }
`;


export const ADD_UPVOTE = gql`
mutation AddUpvote($id: ID!, $like: Int!) {
  updateDev(input: { where: { id: $id }, data: { upvotes: $like } }) {
    dev {
      upvotes
    }
  }
}

`;

