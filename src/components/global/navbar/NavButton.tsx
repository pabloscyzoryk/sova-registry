// imports
import { type FC } from 'react';
import Link from 'next/link';
import { useState } from 'react';

// chakra-ui
import { Button, Text, keyframes } from '@chakra-ui/react';

interface NavButtonProps {
  href: string;
  children: string;
}

const NavButton: FC<NavButtonProps> = ({ href, children }) => {
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

  return (
    <Button
      overflow='hidden'
      whiteSpace='nowrap'
      px={5}
      color='white'
      bg='transparent'
      _hover={{ bg: 'transparent' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      as={Link}
      href={href}
    >
      <Text animation={isHovered ? animation : ''}>{children}</Text>
    </Button>
  );
};

export default NavButton;
