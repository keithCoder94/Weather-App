import * as React from 'react';
import { Appbar, DefaultTheme } from 'react-native-paper';


const Search = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Weather App" subtitle="" />
      <Appbar.Action icon="magnify" Subtitle='Search' onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default Search;