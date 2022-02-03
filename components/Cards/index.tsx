import { Box, Divider, Text, Spinner, Button } from '@chakra-ui/react';
import React from 'react';
import axios from 'axios';

import useAxios from 'axios-hooks';


const Cards = () => {

  const [{ data, loading, error }, refetch] = useAxios(

    "http://numbersapi.com/random?min=1&max=100"

  );

  return (
    <>
      <Divider />
      {loading ?
        <Box margin="10"
          w="60"
          h="72"
          borderRadius='10'
          fontFamily="cursive"
          bgColor='lightgrey' p="10" align="center">
          <Spinner color='teal.500' />
        </Box>
        :
        <Box margin="10"
          w="60"
          h="72"
          borderRadius='10'
          fontFamily="cursive"
          bgColor='lightgrey' p="10" alignItems="center">
          {error ?
            <Text>{error}</Text>
            :
            <Text> "{data}" </Text>
          }
        </Box>
      }
      <Divider />
      <Button onClick={() => refetch()} colorScheme='teal' variant='solid' w='full'> Generate Facts</Button>

    </>
  )
};

export default Cards;
