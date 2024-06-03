import React, { memo } from 'react';
import classNames from 'classnames';
import cls from './ButtonsControl.module.scss';
import { Header } from 'shared/ui/Header';
import { FirstControl } from './FirstControl/FirstControl';
import { SecondControl } from './SecondControl/SecondControl';

enum CONST {
    HEADER = 'Контрол с кнопками',
}

interface ButtonsControlProps {
    classes?: string;
}

export const ButtonsControl = memo(({ classes }: ButtonsControlProps) => {
    return (
        <div className={classNames(cls.ButtonsControl, [classes])}>
            <Header title={CONST.HEADER} />
            <FirstControl />
            <SecondControl />
        </div>
    );
});
