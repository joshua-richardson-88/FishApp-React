import React, { useState } from 'react';
import FishForm from './components/FishForm';
import FishList from './components/FishList';

export default function MainPage() {
  const [fishes, setFishes] = useState([]);

  const handleSubmit = (newFish) => {
    setFishes((prevState) => [...prevState, newFish]);
  };
  return (
    <>
      <FishForm onSubmit={handleSubmit} />
      <FishList fishes={fishes} />
    </>
  );
}
