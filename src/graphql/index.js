import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

export default new ApolloClient({
    link: new HttpLink({uri: 'http://archive-env.eba-epzwfx8a.me-south-1.elasticbeanstalk.com/graphql/'}),
    cache: new InMemoryCache(),
});