import React, { ButtonHTMLAttributes, memo } from 'react';
import classNames from 'classnames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    PRIMARY = 'primary',
    BORDER = 'border',
}


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    classes?: string;
    theme?: ButtonTheme;
    square?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    isLoad?: boolean;
}
export const Button = memo((props: ButtonProps) => {
    const {
        classes,
        theme = ButtonTheme.PRIMARY,
        children,
        square,
        disabled,
        isLoad,
        ...otherProps
    } = props;
    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.Buttons, cls[theme], [
                classes,
            ])}
            // eslint-disable-next-line
            {...otherProps}
        >
            {children}
        </button>
    );
});
