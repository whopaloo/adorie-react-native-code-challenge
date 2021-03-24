import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Home = () => {
  return (
    <SafeArea>
      <Container>
        <Text>Hello</Text>
      </Container>
    </SafeArea>
  );
};
