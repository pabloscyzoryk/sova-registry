// imports
import { type FC, useState, type FormEvent } from 'react';
import { api } from '~/utils/api';
import { z } from 'zod';

// chakra-ui
import {
  Box,
  Flex,
  Text,
  List,
  ListItem,
  Heading,
  useMediaQuery,
  Divider,
  Input,
  Button,
  FormControl,
  FormHelperText,
} from '@chakra-ui/react';

const Footer: FC = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState<string>();
  const [isPending, setIsPending] = useState(false);
  const postData = api.newsletter.post.useMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsPending(true);

    const schema = z.string().email('Not an email.');
    const check = await schema.safeParseAsync(email);

    if (!check.success) {
      setError(check.error.errors[0]?.message);
      setTimeout(() => {
        setError('');
      }, 3000);
      setIsPending(false);
      return;
    }

    const response = await postData.mutateAsync(email);
    setResponse(response);
    setTimeout(() => {
      setResponse('');
    }, 3000);
    setEmail('');
    setIsPending(false);
  };

  return (
    <Box
      position='relative'
      as='footer'
      maxW='100vw'
      h={isMobile ? '60vh' : '40vh'}
      bgColor='#151515'
      color='white'
      className='footer'
    >
      <Flex
        direction={isMobile ? 'column' : 'row'}
        justify='space-around'
        align='center'
        h='100%'
      >
        <Flex direction='column'>
          <Heading>Sova</Heading>
          <Text my={3}>Online registry made better</Text>
        </Flex>

        <Flex gap={20} align='center'>
          <Flex direction='column'>
            <Heading my={3} fontSize='2xl'>
              Product
            </Heading>
            <List>
              <ListItem
                cursor='pointer'
                _hover={{ textDecoration: 'underline' }}
              >
                How it works
              </ListItem>
              <ListItem
                cursor='pointer'
                _hover={{ textDecoration: 'underline' }}
              >
                Pricing
              </ListItem>
              <ListItem
                cursor='pointer'
                _hover={{ textDecoration: 'underline' }}
              >
                Use cases
              </ListItem>
            </List>
          </Flex>
          <Divider h={75} orientation='vertical' />
          <Flex direction='column'>
            <Heading my={3} fontSize='2xl'>
              Legal
            </Heading>
            <List>
              <ListItem
                cursor='pointer'
                _hover={{ textDecoration: 'underline' }}
              >
                Privacy
              </ListItem>
              <ListItem
                cursor='pointer'
                _hover={{ textDecoration: 'underline' }}
              >
                Terms
              </ListItem>
              <ListItem
                cursor='pointer'
                _hover={{ textDecoration: 'underline' }}
              >
                License
              </ListItem>
            </List>
          </Flex>
        </Flex>

        <Flex direction='column'>
          <Text my={1}>Stay up to date</Text>
          <Flex
            as='form'
            onSubmit={handleSubmit}
            gap={5}
            direction={isMobile ? 'column' : 'row'}
          >
            <Input
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Enter your email'
              _placeholder={{ color: 'senary' }}
              border='1px solid'
              borderColor='quinary'
            />
            <Button isDisabled={isPending} isLoading={isPending} type='submit' colorScheme='teal'>Submit</Button>
          </Flex>

          {response && (
            <FormControl>
              <FormHelperText>{response}</FormHelperText>
            </FormControl>
          )}

          {error && (
            <FormControl>
              <FormHelperText color='red.500'>{error}</FormHelperText>
            </FormControl>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;