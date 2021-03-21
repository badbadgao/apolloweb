import React from 'react';
import { useQuery, gql } from '@apollo/client';

const rateQuery = gql`
  query Greetings {
    Greetings {
      id
      message
    }
  }
`;

const GreetingsComponent = () => {
  const { loading, error, data } = useQuery(rateQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);
  return data.Greetings.map(greeting => {
    return (
      <div key={greeting.id}>
        {greeting.id} : {greeting.message}
      </div>
    )}
  )
};

export default GreetingsComponent;