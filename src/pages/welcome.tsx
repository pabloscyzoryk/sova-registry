// imports
import { GetServerSideProps, type NextPage } from 'next';

// chakra-ui
import { Box, Heading } from '@chakra-ui/react';
import { getServerAuthSession } from '~/server/auth';

const Welcome: NextPage = () => {
    return (
        <Box>
            <Heading>Welcome to Sova!</Heading>
            <Heading>Please provide your name and second name:</Heading>
        </Box>
    )
}

export default Welcome;