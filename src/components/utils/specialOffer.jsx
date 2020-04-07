import React, { useEffect, useState } from 'react';
import request from '../../services/Net';
import styled from '@emotion/styled';
import Button from '@cda/button/src';
import { Rows } from '@cda/flex/src';

const Card = styled('div')`
  margin: 2rem auto;
  width: 300px;
  box-shadow: 0 0 1px silver;
  padding: 1rem;
  border-radius: 10px;
  flex-direction: rows;
  text-align: center;
  // background-color: #E49c00;
  // color: white;
`;

const TextWrapper = styled('div')`
  flex: 9;
  text-align: center;
  margin-right: 2rem;
`;

const CounterWrapper = styled('div')`
  flex: 1;
  font-size: 3rem;
`;

const SpecialOfferWidget = () => {
  const [counter, setCounter] = useState(null);

  const fetch = async () => {
    request({
      method: 'get',
      url: '/special'
    }).then((res) => {
      setCounter(res);
    }).catch(console.error);
  };

  useEffect(() => {
    fetch();
  }, []);

  if (!counter || counter < 1) {
    return null;
  }
  return <Card>
    <Rows>
      <TextWrapper>
      Pour les <strong>100 prochains parrains</strong>, un soin offert. Ne tardez pas il en reste
      </TextWrapper>
      <CounterWrapper>
        {counter}
      </CounterWrapper>
    </Rows>
    {/*<Button primary>Parrainer maintenant 🐝</Button>*/}
  </Card>;
};

export default SpecialOfferWidget;
