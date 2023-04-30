// imports
import { type FC } from 'react';
import { type IconType } from 'react-icons';
import { signIn } from 'next-auth/react';

// chakra-ui
import { Flex, Icon, Text, Center, FlexProps, IconProps } from '@chakra-ui/react';

interface LoggingMethodProps {
  children: string;
  icon: IconType;
  provider: string;
  style?: FlexProps;
  iconStyle?: IconProps;
}

const LoggingMethod: FC<LoggingMethodProps> = ({ children, icon, style, iconStyle, provider }) => {
  return (
    <Flex onClick={() => signIn(provider)} sx={style} borderRadius='md' px={5} cursor='pointer'justify='space-between' py={3} align='center'>
      <Center color='initial' bg='white' p={2} fontSize='lg' borderRadius='full'>
        <Icon sx={iconStyle} as={icon} />
      </Center>
      <Text fontWeight='bold'>{children}</Text>
    </Flex>
  );
};

export default LoggingMethod;
