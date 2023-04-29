// imports
import { type FC } from 'react';
import { type ReviewProps } from './Review';
import Marquee from 'react-fast-marquee';
import { useQuery } from '@tanstack/react-query';
import { getReviews } from './getReviews';

// chakra-ui
import {
  Heading,
  VStack,
  Text,
  Spinner,
  Flex,
  Divider,
  Center,
} from '@chakra-ui/react';

// components
import Review from './Review';

const Reviews: FC = () => {
  const {
    data: reviews,
    isError,
    isLoading,
    isSuccess,
  } = useQuery({
    queryFn: getReviews,
    queryKey: ['reviews'],
  });

  return (
    <VStack
      justify='center'
      gap={10}
      bg='primary'
      w='100vw'
      position='relative'
      h='90vh'
      zIndex={1}
      overflow='hidden'
      as='section'
      className='reviews'
    >
      <Heading fontSize='5xl' color='white' py={5}>
        Reviews
      </Heading>

      {isSuccess && (
        <Marquee
         pauseOnClick
         speed={50}
        >
          {reviews.map((review, index) => (
            <Review key={index} {...review} />
          ))}
        </Marquee>
      )}
      {isLoading && (
        <Center w='100vw' h='full'>
          <Spinner color='white' size='lg' />
        </Center>
      )}
      {isError && (
        <Center w='100vw' h='full'>
          <Text fontSize='2xl' color='quaternary'>Could not fetch any reviews :(</Text>
        </Center>
      )}
    </VStack>
  );
};

export default Reviews;
