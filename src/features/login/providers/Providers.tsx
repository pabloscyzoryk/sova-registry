// imports
import { type FC } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaDiscord } from 'react-icons/fa';

// chakra-ui
import { Flex } from '@chakra-ui/react';

// components
import LoggingMethod from '~/components/common/LoggingMethod';

const Providers: FC = () => {
    return (
        <Flex direction='column' gap={5} w='80%' justify='center' mt={8}>
            <LoggingMethod
              provider='google'
              style={{
                bg: '#ea4335',
                color: 'white',
                transition: '.1s linear',
                _hover: { bg: 'primary', outline: '3px solid #ea4335' },
              }}
              icon={FcGoogle}
            >
              Log in with Google
            </LoggingMethod>
            <LoggingMethod
              provider='discord'
              iconStyle={{ color: '#7289da' }}
              style={{
                bg: '#7289da',
                transition: '.1s linear',
                color: 'white',
                _hover: { bg: 'primary', outline: '3px solid #7289da' },
              }}
              icon={FaDiscord}
            >
              Log in with Discord
            </LoggingMethod>
            <LoggingMethod
              provider='github'
              iconStyle={{ color: 'black' }}
              style={{
                color: 'black',
                transition: '.1s linear',
                bg: 'white',
                _hover: {
                  color: 'white',
                  bg: 'primary',
                  outline: '3px solid white',
                },
              }}
              icon={FaGithub}
            >
              Log in with Github
            </LoggingMethod>
          </Flex>
    )
}

export default Providers;