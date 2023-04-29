// imports
import { type FC, useState, type FormEvent } from 'react';
import { api } from '~/utils/api';
import { z } from 'zod';

// chakra-ui
import {
  Flex,
  Text,
  Button,
  Input,
  Textarea,
  Heading,
  FormControl,
  Center,
} from '@chakra-ui/react';

const Contact: FC = () => {
  const [error, setError] = useState<string>();
  const [response, setResponse] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const postData = api.contact.post.useMutation();
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    const schema = z.object({
      name: z.string().min(1, 'Name field must not be empty.'),
      email: z.string().email('Email field must be a valid email.'),
      message: z
        .string()
        .min(10, 'Message field must be at least 10 characters long. '),
    });
    const check = await schema.safeParseAsync({ name, email, message });

    if (!check.success) {
      setError(check.error.errors[0]?.message);
      console.log(check.error.message);
      setTimeout(() => {
        setError('');
      }, 3000);
      setIsPending(false);
      return;
    }
    const response = await postData.mutateAsync({
      name,
      email,
      message,
    });

    setResponse(response);
    setTimeout(() => {
      setResponse('');
    }, 3000);

    setName('');
    setMessage('');
    setEmail('');
    setIsPending(false);
  };

  return (
    <Center
      position='relative'
      bgColor='primary'
      w='100vw'
      h='100vh'
      as='section'
      className='contact'
    >
      <Flex
        color='white'
        direction='column'
        h={[525, 500, 500]}
        w={500}
        maxW='90vw'
        bgColor='quaternary'
        borderRadius={10}
      >
        <Flex as='form' onSubmit={handleSubmit} m={10} direction='column'>
          <Heading>Join our team!</Heading>
          <Text mt={5} fontWeight='semibold'>
            We&apos;re looking for amazing engineers just like you! Become a part of
            our rockstar engineering team and skyrocket your career!
          </Text>
          <FormControl>
            <Input
              name='name'
              placeholder='Full name'
              border='none'
              bgColor='secondary'
              _placeholder={{ color: 'senary' }}
              mt={5}
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input
              name='email'
              placeholder='youremail@email.com'
              border='none'
              bgColor='secondary'
              _placeholder={{ color: 'senary' }}
              mt={5}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Textarea
              name='message'
              resize='none'
              border='none'
              bgColor='secondary'
              mt={5}
              placeholder='Let us know you'
              _placeholder={{ color: 'senary' }}
              value={message}
              onChange={e => setMessage(e.target.value)}
            />

            <Button isDisabled={!(message && email && name)} isLoading={isPending} type='submit' colorScheme='teal' mt={5} w='100%'>
              Submit
            </Button>
            {response && <Text>{response}</Text>}
            {error && <Text color='red.500'>{error}</Text>}
          </FormControl>
        </Flex>
      </Flex>
    </Center>
  );
};

export default Contact;
