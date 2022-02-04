import { Box, Divider, Text, Spinner, Button, Center } from '@chakra-ui/react';
import React from 'react';
import axios from 'axios';
import useAxios from 'axios-hooks';

const Card = ({number}: any) => {

  const [{ data, loading, error }, refetch] = useAxios(
    `http://numbersapi.com/${number}`
  );

  return (
    <>
      {/* <Center><Button onClick={() => refetch()} colorScheme='teal' variant='solid' w='90%' margin={5}> Generate Facts</Button></Center> */}

      {/* <Divider /> */}
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
      {/* <Divider /> */}

    </>
  )
};

export default Card;
