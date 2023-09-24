import React, { Dispatch, SetStateAction } from 'react';
import * as S from './styled';
import { AddIcon, SubtractIcon } from '../Icon';
import { handleDecrement, handleIncrement } from '@/Events';

interface CounterProps {
    quantity: number;
    error: boolean;
    setQuantity: Dispatch<SetStateAction<number>>;
    disabled: boolean; 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Counter({ quantity, error, setQuantity, disabled, onChange }: CounterProps) {
   
    return (
        <S.Counter>
            <S.CounterButton type="button" onClick={() => handleDecrement(quantity, setQuantity)} disabled={quantity === 0 || disabled}>
                <SubtractIcon color={quantity === 0 || disabled ? '#C5CFD6' : '#2f3676'} />
            </S.CounterButton>
            <S.CounterInput
                placeholder="0"
                name="quantity"
                disabled={disabled}
                value={quantity}
                error={quantity === 0 && error}
                onChange={onChange}
            />
            <S.CounterButton type="button" onClick={() => handleIncrement(quantity, setQuantity)} disabled={quantity === 100 || disabled}>
                <AddIcon color={quantity === 100 || disabled ? '#C5CFD6' : '#2f3676'} />
            </S.CounterButton>
        </S.Counter>
    );
}
