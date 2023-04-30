// imports
import { type FC, useRef } from 'react';
import useNavbar from './useNavbar';
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react';

// components
import NavButton from './NavButton';

// chakra-ui
import { Divider, Flex, Text } from '@chakra-ui/react';

const Navbar: FC = () => {
  const { data: session } = useSession();
  const navbarRef = useRef<HTMLDivElement>(null);
  useNavbar(navbarRef);

  return (
    <Flex
      justify='space-between'
      maxW='100vw'
      as='nav'
      backdropFilter={'blur(4px)'}
      align='center'
      zIndex={100}
      h={50}
      left={0}
      top={0}
      position='fixed'
      w='100vw'
      ref={navbarRef}
      fontWeight='bold'
      transition='.2s linear'
    >
      <Flex h='full' align='center' ml='1%' color='white'>
        <NavButton href='/'>Sova</NavButton>
      </Flex>

      <Flex h='full' align='center' mr='3%'>
        {session ? (
          <NavButton onClick={() => signOut()}>Log out</NavButton>
        ) : (
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
