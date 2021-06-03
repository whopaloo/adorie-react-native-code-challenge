import * as React from 'react';
import {Searchbar, Title} from 'react-native-paper';
import styled from 'styled-components/native';

const SearchTitle = styled(Title)`
  font-size: 41px;
  padding-top: 15px;
`;

const SearchBar = styled(Searchbar)`
  margin: 16px;
`;

interface Props {
  navigation: {
    navigate: (text: string) => string;
  };
}

const Search: React.FC<Props> = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);

  return (
    <>
      <SearchTitle>Unsplash</SearchTitle>
      <SearchBar
        placeholder="Pesquisar Imagens"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onIconPress={() => {
          searchQuery && navigation.navigate('Photos');
        }}
      />
    </>
  );
};

export default Search;
