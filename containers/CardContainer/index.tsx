import { Box, SimpleGrid } from '@chakra-ui/react';
import useAxios from 'axios-hooks';
import React from 'react';
import Card from '../../components/Card';
const CardContainer = () => {

  const cardsData = [...Array(10)].map(()=>({
    number: Math.floor(Math.random() * 100),
  }))
  console.log("🚀 ~ file: index.tsx ~ line 17 ~ cardsData ~ cardData", cardsData)


  return (
    <Box w={'100%'} bgColor="olivedrab" margin="2">
      {cardsData.map((card) => (
      <SimpleGrid columns={2} spacing={10}>
        <Card number={card.number}/>
      </SimpleGrid>
      ))}
    </Box>
  )
};

export default CardContainer;
