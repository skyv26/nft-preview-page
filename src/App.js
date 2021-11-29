import React from 'react';
import NftCard from './UI/NftCard';
import ImageContainer from './components/ImageContainer/ImageContainer';
import NftCardInfo from './components/NftCardInfo/NftCardInfo';
import NftCreator from './components/NftCreator/NftCreator';

function App() {
  return (
    <NftCard>
      <ImageContainer />
      <NftCardInfo />
      <NftCreator />
    </NftCard>
  );
}

export default App;
