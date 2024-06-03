import React, { memo } from 'react';
import classNames from 'classnames';
import cls from './MainPage.module.scss';
import { AutocompleteControl } from 'features/AutocompleteControl';
import { ButtonsControl } from 'features/ButtonsControl';

interface MainPageProps {
    classes?: string;
}

const MainPage = memo((props: MainPageProps) => {
    const { classes } = props;

    return (
        <div className={classNames(cls.MainPage, [classes])}>
            <ButtonsControl />
            <AutocompleteControl />
        </div>
    );
});

export default MainPage;
