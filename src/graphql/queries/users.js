import gql from 'graphql-tag';

export const FETCH_ALL_UERS = gql`
query {
  users {
  	id
  	username 
  	firstName
  	lastName 
  isActive 
  email 
    role {
    id 
    roleName 
  }
  lastLogin 
  isSuperuser 
  isStaff 
  }
}
`;