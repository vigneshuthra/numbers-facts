import { Box, Button, Center, Divider, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
const CardContainer = () => {

  const [numberList, setNumberList] = useState<any>([]);
  console.log("numberList", numberList)

  useEffect(() => {
    getRandom()
  }, []);

  const getRandom = () => {
    const cardsData = [...Array(10)].map(() => ({
      number: Math.floor(Math.random() * 100),
    }))
    setNumberList(cardsData)

  }


  return (
    <>
      <Box>
        <Center><Button _focus={{ outline: 'none' }} onClick={() => getRandom()} colorScheme="green" variant='solid' w='90%' margin={5}> Generate Facts</Button></Center>

        <Divider />
      </Box>
      <SimpleGrid columns={5} spacing={1} bgColor="green.100">

        {numberList.map((card: any, index) => (

          <Card key={index} x={card.number} />

        ))}
      </SimpleGrid>
    </>
  )
};

export default CardContainer;
