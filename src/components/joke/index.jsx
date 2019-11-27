import React, { Fragment } from 'react';
import Alert from 'react-bootstrap/Alert';
import './joke.scss';

export default function Joke(props) {
  const { value } = props.joker.data;

  return (
      <Fragment>
        <Alert variant="success" className="alertMessage">
        <Alert.Heading>Joke - { value.id }</Alert.Heading>
          <p>
            {value.joke}
          </p>
        </Alert>
      </Fragment>
  )

};