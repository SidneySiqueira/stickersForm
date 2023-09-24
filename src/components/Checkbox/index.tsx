import React from 'react';
import * as S from './styled';

interface CheckboxProps {
    name: string,
    checked: boolean,
    error: boolean,
    disabled: boolean,
    success: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({ name, checked, error, disabled, success, onChange }: CheckboxProps) {
    return (
        <S.CheckboxLabel>
            <S.CheckboxInput
                type="checkbox"
                name={name}
                success={success}
                checked={checked}
                error={error}
                disabled={disabled}
                onChange={onChange}
            />
            {name}
        </S.CheckboxLabel>
    );
}
