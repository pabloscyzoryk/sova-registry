// imports
import { type FC } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

// chakra-ui
import { Box, Text, Icon, Flex, Image, Divider } from '@chakra-ui/react';

interface ReviewProps {
  content: string;
  rating: number;
  avatar: string;
  person: string;
}

const Review: FC<ReviewProps> = ({ content, rating, avatar, person }) => {
  const stars = new Array(rating).fill(true);
  const empty = new Array(5 - rating).fill(true);

  return (
    <Flex align='center'>
      <Flex
        direction='column'
        maxW={600}
        minW={600}
        align='center'
        justify='center'
        className='review'
        whiteSpace='normal'
        color='white'
      >
        <Image
          border='2px solid white'
          borderRadius='full'
          w={20}
          h={20}
          my={5}
          src={avatar}
          objectFit='cover'
          alt='review avatar'
        />

        <Text fontWeight='bold' fontSize='xl' maxW='70%' textAlign='center'>
          {content}
        </Text>

        <Flex mt={5} gap={2} fontSize='4xl' color='yellow.400'>
          {stars.map((_star, index) => (
            <Icon as={AiFillStar} key={index} />
          ))}
          {empty.map((_star, index) => (
            <Icon as={AiOutlineStar} key={index} />
          ))}
        </Flex>

        <Text mt='2em'>
          {person}
        </Text>
      </Flex>
      <Divider orientation='vertical' h={200} />
    </Flex>
  );
};

export default Review;
export type { ReviewProps };
