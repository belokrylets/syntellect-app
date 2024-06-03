import React, { memo } from 'react';
import cls from '../Autocomplete.module.scss';
import { Suggestion } from 'app/store/autocomplete';
import classNames from 'classnames';

interface SuggestionProps {
    classes?: string;
    suggestion?: Suggestion;
    setSuggestion: (suggestionName: string) => () => void;
}

export const SuggestionItem = memo(
    ({ classes, suggestion, setSuggestion }: SuggestionProps) => {
        if (!suggestion) return null;

        return (
            <div
                key={suggestion.flag}
                className={classNames(cls.suggestionItem, [classes])}
                onClick={setSuggestion(suggestion.name)}
            >
                <img src={suggestion.flag} className={cls.flag} alt={'flag'} />
                <div className={cls.itemContent}>
                    <div className={cls.name}>{suggestion.name}</div>
                    <div className={cls.fullName}>{suggestion.fullName}</div>
                </div>
            </div>
        );
    },
);
