import React from 'react';
import { RadioGroup, Radio, HStack } from '@chakra-ui/react';

const ItemRadioGroup = ({ groupArr, name, handleChange }) => {
    return (
        <RadioGroup defaultValue={groupArr[0]}>
            <HStack>
                {groupArr.map((radioItem, index) => {
                    return (
                        <Radio
                            key={index}
                            value={radioItem}
                            name={name}
                            onChange={(e) => handleChange(e)}
                        >
                            {radioItem}
                        </Radio>
                    );
                })}
            </HStack>
        </RadioGroup>
    );
};

export default ItemRadioGroup;
