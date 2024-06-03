import React, { ChangeEvent, memo } from 'react';
import classNames from 'classnames';
import cls from './Input.module.scss';

interface InputProps {
    label?: string;
    inputName: string;
    onChange: (value: string) => void;
    value: string;
    placeholder?: string;
    classes?: string;
    type?: string;
    isDisabled?: boolean;
    onClick?: () => void;
}

export const Input = memo(
    ({
        label,
        inputName,
        onChange,
        value,
        placeholder,
        classes,
        type = 'text',
        isDisabled = false,
        onClick,
    }: InputProps) => {
        const onInput = (event: ChangeEvent<HTMLInputElement>) => {
            let { value } = event.target;
            onChange(value);
        };

        return (
            <>
                <label className={classNames(cls.label, [classes])}>
                    {label}
                    <input
                        disabled={isDisabled}
                        className={classNames(cls.Input)}
                        onChange={onInput}
                        name={inputName}
                        value={value}
                        placeholder={placeholder}
                        type={type}
                        onClick={onClick}
                    />
                </label>
            </>
        );
    },
);
