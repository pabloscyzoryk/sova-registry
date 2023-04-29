// imports
import { type FC } from 'react';
import { IconType } from 'react-icons';

// chakra-ui
import { Box, Icon, Center, Text, VStack } from '@chakra-ui/react';

interface FeatureProps {
  children: string;
  icon: IconType;
}

const Feature: FC<FeatureProps> = ({ children, icon }) => {
  return (
    <Center bgColor='primary'>
      <VStack
        _hover={{
          transform: 'scale(1.1)',
        }}
        transition='all .2s ease-in-out'
        bgColor='#262626'
        cursor='pointer'
        align='center'
        justify='center'
        color='white'
        borderRadius='md'
      >
        <Icon fontSize='6xl' as={icon} />
        <Text fontWeight='bold' fontSize={['md', 'xl', 'xl']}>
          {children}
        </Text>
      </VStack>
    </Center>
  );
};

export default Feature;
