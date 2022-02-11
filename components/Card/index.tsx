import { Box, Divider, Text, Spinner, Button, Center } from '@chakra-ui/react';
import React from 'react';
import useAxios from 'axios-hooks';
import Flippy, { FrontSide, BackSide } from 'react-flippy';


const Card = ({ x }: any) => {

  const [{ data, loading, error }, refetch] = useAxios(
    `http://numbersapi.com/${x}`
  );

  return (
    <Flippy flipOnHover={true} >
      <FrontSide style={{
        margin: '10px',
        width: "250px",
        height: "300px",
        borderRadius: '10px',
        backgroundColor: '#90ee90', padding: "30px"
      }} animationDuration={800}>

        <Center>
          <Text fontFamily="serif" p={10} fontSize={80}>{x}</Text>
        </Center>

      </FrontSide>
      {loading ?
        <BackSide style={{
          margin: '10px',
          width: "250px",
          height: "300px",
          borderRadius: '10px',
          fontFamily: "cursive",
          backgroundColor: '#90ee90', padding: "30px", align: "center"
        }} animationDuration={800}>

          <Spinner color='teal.500' />
        </BackSide>
        :
        <BackSide style={{
          margin: '10px',
          width: "250px",
          height: "300px",
          borderRadius: '10px',
          fontFamily: "cursive",
          backgroundColor: '#90ee90', padding: "30px", align: "center"
        }} animationDuration={800}>

          {error ?
            <Text>{error}</Text>
            :
            <Text p={1} fontSize={20}> "{data}" </Text>
          }
        </BackSide>
      }
    </Flippy>
  )
};

export default Card;
