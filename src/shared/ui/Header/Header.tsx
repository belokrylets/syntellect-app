import React, { memo } from 'react';
import classNames from 'classnames';
import cls from './Header.module.scss';

interface HeaderProps {
    classes?: string;
    title: string;
}

export const Header = memo(({ classes, title }: HeaderProps) => {
    return <h1 className={classNames(cls.Header, [classes])}>{title}</h1>;
});
