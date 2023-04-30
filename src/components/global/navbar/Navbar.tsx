// imports
import { type FC, useRef } from 'react';
import useNavbar from './useNavbar';
import { signOut, useSession } from 'next-auth/react';

// components
import NavButton from './NavButton';

// chakra-ui
import { Divider, Flex, Spinner, Text } from '@chakra-ui/react';

const Navbar: FC = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const { status } = useSession();
  console.log(status);
  useNavbar(navbarRef);

  return (
    <Flex
      justify='space-between'
      as='nav'
      w='100vw'
      backdropFilter={'blur(4px)'}
      align='center'
      zIndex={100}
      h={50}
      left={0}
      top={0}
      position='fixed'
      ref={navbarRef}
      fontWeight='bold'
      transition='.2s linear'
    >
      <Flex h='full' align='center' ml='1%' color='white'>
        <NavButton href='/'>Sova</NavButton>
      </Flex>

      <Flex h='full' align='center' mr='3%'>
        { status === 'loading' && <Spinner color='white' /> }
        { status === 'authenticated' && <NavButton onClick={() => signOut()}>Log out</NavButton> }
        { status === 'unauthenticated' && (
          <>
            <NavButton href='/login'>Log in</NavButton>
            <Divider h='2em' orientation='vertical' />
            <NavButton href='/signup'>Sign up</NavButton>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
