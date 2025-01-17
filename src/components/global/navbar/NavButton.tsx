// imports
import { type FC } from 'react';
import Link from 'next/link';
import { useState } from 'react';

// chakra-ui
import { Button, Text, keyframes, type ButtonProps } from '@chakra-ui/react';

interface NavButtonProps extends ButtonProps {
  children?: string;
  href?: string;
}

const NavButton: FC<NavButtonProps> = ({ href, children, ...rest }) => {
  const portal = keyframes`
    50% {
        transform: translateY(-50px);
    }
    51% {
        transform: translateY(50px);
    }
    `;

  const animation = `${portal} 0.45s ease-in-out`;
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    px: 5,
    color: 'white',
    bg: 'transparent',
    _hover: { bg: 'transparent' },
    ...rest
  };

  return (
    <>
      {href ? (
        <Button
          sx={styles}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          as={Link}
          href={href}
        >
          <Text animation={isHovered ? animation : ''}>{children}</Text>
        </Button>
      ) : (
        <Button
          sx={styles}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          as={href ? Link : Button}
        >
          <Text animation={isHovered ? animation : ''}>{children}</Text>
        </Button>
      )}
    </>
  );
};

export default NavButton;
