import React from 'react';
import { Link, Link as ReactRouterLink } from 'react-router-dom';
import { MdFileUpload } from 'react-icons/md';
import {
    Box,
    Stack,
    HStack,
    Text,
    Link as ChakraLink,
    UnorderedList,
    List,
    ListItem,
} from '@chakra-ui/react';

import { useGlobalContext } from '../../context/GlobalContext';

import LoggedInUserNavMenu from '../LoggedInUserNavMenu/LoggedInUserNavMenu';

// navigation links
const navlinks = [
    {
        name: 'home',
        link: '/',
    },
    {
        name: 'about',
        link: '/about',
    },
];

const NavBar = () => {
    const { currentUser } = useGlobalContext();

    const RenderAddItemForm = () => {
        if (currentUser.userType === 'SELLER') {
            console.log('hello');
            return (
                <ChakraLink
                    as={ReactRouterLink}
                    to={'/add-item'}
                    width={150}
                    height={50}
                    fontSize={'1.2rem'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    padding={2}
                    rounded={5}
                    backgroundColor={'#6A994E'}
                    color={'white'}
                    _hover={{
                        textDecoration: 'none',
                        backgroundColor: '#567d3e',
                    }}
                >
                    <MdFileUpload fontSize={'1.8rem'} className='mr-1' /> Add
                    Item
                </ChakraLink>
            );
        }
    };

    return (
        <Stack
            width={'100%'}
            padding={5}
            direction={'row'}
            justify={'space-between'}
            align={'center'}
        >
            <ChakraLink
                as={ReactRouterLink}
                to='/'
                _hover={{ textDecoration: 'none' }}
                fontSize={'2rem'}
                fontWeight={700}
                color={'#1f1f1f'}
            >
                AUTOBIDS
            </ChakraLink>
            <HStack
                gap={5}
                align={'center'}
                justify={'center'}
                fontWeight={600}
            >
                <HStack gap={5} align={'center'} justify={'center'}>
                    {navlinks.map((link) => {
                        return (
                            <ChakraLink
                                key={link.name}
                                as={ReactRouterLink}
                                to={link.link}
                                textTransform={'capitalize'}
                                fontSize={'1.2rem'}
                                display={'block'}
                            >
                                {link.name}
                            </ChakraLink>
                        );
                    })}
                </HStack>
                {currentUser && RenderAddItemForm()}
                {currentUser ? (
                    <LoggedInUserNavMenu />
                ) : (
                    <HStack gap={2} align={'center'} justify={'center'}>
                        <ChakraLink
                            as={ReactRouterLink}
                            to={'/login'}
                            width={100}
                            height={50}
                            fontSize={'1.2rem'}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            padding={2}
                            rounded={5}
                            border={'3px solid #6A994E'}
                            color={'#6A994E'}
                            _hover={{
                                textDecoration: 'none',
                                backgroundColor: '#567d3e',
                                border: 'none',
                                color: 'white',
                            }}
                        >
                            Login
                        </ChakraLink>
                        <ChakraLink
                            as={ReactRouterLink}
                            to={'/register'}
                            width={100}
                            height={50}
                            fontSize={'1.2rem'}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            padding={2}
                            rounded={5}
                            backgroundColor={'#6A994E'}
                            color={'white'}
                            _hover={{
                                textDecoration: 'none',
                                backgroundColor: '#567d3e',
                            }}
                        >
                            Sign Up
                        </ChakraLink>
                    </HStack>
                )}
            </HStack>
        </Stack>
    );
};

export default NavBar;
