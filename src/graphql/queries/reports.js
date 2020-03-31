import gql from 'graphql-tag';

export const FETCH_ALL_REPORTS = gql`
  {
    Reports {
      id
      title
      createdAt
      lastModified
      author {
        id
        username
        role {
          roleName
        }
        isActive
        email
      }
    }
}
`;