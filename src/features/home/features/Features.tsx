// imports
import { Box, SimpleGrid } from '@chakra-ui/react';
import { BiNotepad, BiNetworkChart } from 'react-icons/bi';
import { FaChalkboardTeacher, FaBook, FaPalette } from 'react-icons/fa';
import { AiFillWechat } from 'react-icons/ai';
import { type FC } from 'react';

// components
import Feature from './Feature';

const Features: FC = () => {
  return (
    <Box
      position='relative'
      zIndex={1}
      h='35vh'
      w='100vw'
      as='section'
      className='features'
    >
      <SimpleGrid
        columns={[2, 2, 1]}
        w='100%'
        h='100%'
        minChildWidth='100px'
        bgColor='#262626'
        whiteSpace='nowrap'
        overflowX='hidden'
      >
        <Feature icon={FaBook}>learn</Feature>
        <Feature icon={FaChalkboardTeacher}>teach</Feature>
        <Feature icon={AiFillWechat}>communicate</Feature>
        <Feature icon={BiNotepad}>control</Feature>
        <Feature icon={BiNetworkChart}>cooperate</Feature>
        <Feature icon={FaPalette}>customize</Feature>
      </SimpleGrid>
    </Box>
  );
};

export default Features;
