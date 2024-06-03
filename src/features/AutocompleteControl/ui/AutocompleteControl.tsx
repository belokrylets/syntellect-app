import React from 'react';
import classNames from 'classnames';
import cls from './AutocompleteControl.module.scss';
import { useAutocompleteControl } from './useAutocompleteControl';
import { Header } from 'shared/ui/Header';
import { Autocomplete } from 'widgets/Autocomplete';

interface AutocompleteControlProps {
    classes?: string;
}

export const AutocompleteControl = ({ classes }: AutocompleteControlProps) => {
    const { autocompleteStore, autocompleteStore2 } = useAutocompleteControl();
    return (
        <div className={classNames(cls.AutocompleteControl, [classes])}>
            <Header title={'Контрол-автокомплит'} />
            <Autocomplete
                label={'Лимит 10'}
                placeholder={'Введите запрос...'}
                store={autocompleteStore2}
            />
            <Autocomplete
                label={'Лимит 3'}
                limit={3}
                placeholder={'Введите запрос...'}
                store={autocompleteStore}
            />
        </div>
    );
};
