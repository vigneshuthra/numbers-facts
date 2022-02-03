import { Box } from '@chakra-ui/react';
import React from 'react';
import Cards from '../../components/Cards';

const CardContainer = () => {

  return (
    <Box w={'100%'} bgColor="red" margin="5">
      <Cards />
    </Box>
  )
};

export default CardContainer;
