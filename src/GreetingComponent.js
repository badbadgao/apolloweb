import React from 'react';
import { useQuery, gql } from '@apollo/client';

const rateQuery = gql`
  query Greeting($id: String!) {
    Greeting(id: $id) {
      id
      message
    }
  }
`;

const GreetingComponent = ({id}) => {
  const { loading, error, data} = useQuery(
    rateQuery,
    {
      variables: { id },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { Greeting } = data;
  return (
    <div key={Greeting.id}>
      {Greeting.id} : {Greeting.message}
    </div>
  )
};

export default GreetingComponent;