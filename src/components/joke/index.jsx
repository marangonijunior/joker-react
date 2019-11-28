import React, { Fragment } from 'react';
import Alert from 'react-bootstrap/Alert';
import './joke.scss';

export default function Joke(props) {
  const { value } = props.joker.data;

  return (
      <Fragment>
        <Alert variant="success" className="alertMessage" data-test="joke-item">
        <Alert.Heading >
          <span data-test="joke-item-id">Joke - { value.id }</span>
        </Alert.Heading>
          <p data-test="joke-item-joke">
            {value.joke}
          </p>
        </Alert>
      </Fragment>
  )

};