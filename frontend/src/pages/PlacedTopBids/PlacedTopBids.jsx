import React, { useEffect, useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
    Stack,
    VStack,
    Heading,
    Text,
    Link as ChakraLink,
} from '@chakra-ui/react';

import { useGlobalContext } from '../../context/GlobalContext';

import BidItem from '../../components/BidItem/BidItem';

const PlacedTopBids = () => {
    const { client } = useGlobalContext();

    const [placedTopBids, setPlacedTopBids] = useState([]);

    const getPlacedTopBids = () => {
        client
            .get('/api/items/placed-top-bids')
            .then((res) => {
                setPlacedTopBids(
                    res.data.bidLots.filter((bidlot) => !bidlot.isSold)
                );
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getPlacedTopBids();
    }, []);

    return (
        <Stack
            direction={'column'}
            maxW={'1280px'}
            w={'80%'}
            alignItems={'center'}
            gap={10}
            marginY={10}
        >
            <Heading size={'lg'}>Your Placed Top Bids</Heading>
            <Stack
                w={'100%'}
                direction={'row'}
                gap={5}
                justifyContent={'center'}
                flexWrap={'wrap'}
            >
                {placedTopBids.map((placedTopBid) => {
                    return (
                        <BidItem
                            key={placedTopBid.id}
                            placedTopBid={placedTopBid}
                        />
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default PlacedTopBids;
