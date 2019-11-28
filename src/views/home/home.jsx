import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Joker from '../../store/actions/joker';

import Top from '../../components/top';
import { Row, Image } from 'react-bootstrap'
import Joke from '../../components/joke';

import './home.scss';

import jokerImg from '../../assets/joker.png';

export default function Home(props) {
  const { joker } = useSelector(state => {
    return state
  });
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Joker(''));
  }, []);
 
  return (
    <div className="home" data-test="home">
      <Top />
      <Row className="rowJoker">
        <Image src={jokerImg} roundedCircle />
      </Row>
      <Row className="rowJoker">
        {
          joker.data && <Joke {...props}/>
        }
      </Row>
    </div>
  )

};
        