import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Home = () => {
  return (
    <Container>
      <Text>Hello</Text>
    </Container>
  );
};
