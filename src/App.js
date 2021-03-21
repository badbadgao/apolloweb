import './App.css';
import GreetingsComponent from './GreetingsComponent';
import GreetingComponent from './GreetingComponent';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: "http://localhost:8090/graphql",
  cache: new InMemoryCache()
});


const App = () => {
  return (
    <ApolloProvider client={client}>
      <GreetingsComponent />
      <GreetingComponent id="weigao"/>
    </ApolloProvider>
  );
}

export default App;
