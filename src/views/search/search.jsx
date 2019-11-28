import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Joker from '../../store/actions/joker';

import Top from '../../components/top';
import { Row, Image, InputGroup, FormControl, Button } from 'react-bootstrap'
import Joke from '../../components/joke';

import './search.scss';

import jokerImg from '../../assets/joker.png';

export default function Search(props) {
  const { joker } = useSelector(state => {
    return state
  });
  const dispatch = useDispatch();
  const [ state, setState ] = useState({
    textFirstName:'',
    textLastName:'',
  });

  const handleSubmit = () => {
    if(state.textFirstName && state.textLastName){
      let str = `?firstName=${state.textFirstName}&lastName=${state.textLastName}`
      dispatch(Joker(str));
    }
  }

  const handleChangeFirstName = (e) => {
    setState({ textFirstName: e, textLastName: state.textLastName});
  }

  const handleChangeLastName = (e) => {
    setState({ textFirstName: state.textFirstName,textLastName: e});
  }
 
  return (
    <div className="search" data-test="search">
      <Top />
      <Row className="rowJoker">
        <Image src={jokerImg} roundedCircle />
      </Row>
      <Row className="alertMessage">
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>First and last name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl as="input" onChange={e => handleChangeFirstName(e.target.value)}/>
          <FormControl as="input" onChange={e => handleChangeLastName(e.target.value)}/>
        </InputGroup>
        <Button onClick={handleSubmit} variant="primary">Search</Button>
      </Row>
      <Row className="rowJoker">
        {
          joker.data && <Joke {...props}/>
        }
      </Row>
    </div>
  )

};
        