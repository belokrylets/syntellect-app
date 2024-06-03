import React from 'react';
import classNames from 'classnames';
import cls from './Autocomplete.module.scss';
import { Input } from '../../../shared/ui/Input';
import AutocompleteStore from 'app/store/autocomplete';
import { useAutocomplete } from './useAutocomplete';
import { SuggestionItem } from './Suggestion/Suggestion';
import { observer } from 'mobx-react-lite';

interface AutocompleteProps {
    classes?: string;
    placeholder?: string;
    limit?: number;
    label?: string;
    store: typeof AutocompleteStore;
}

export const Autocomplete = observer(
    ({ classes, placeholder, limit = 10, label, store }: AutocompleteProps) => {
        const {
            autocomplete,
            onInput,
            setSuggestion,
            isSuggestionListVisible,
            handleInputClick,
            containerRef,
        } = useAutocomplete(store);

        return (
            <div
                ref={containerRef}
                className={classNames(cls.Autocomplete, [classes])}
            >
                <Input
                    label={label}
                    inputName={'autocomplete'}
                    onChange={onInput('autocomplete')}
                    value={autocomplete.form.autocomplete}
                    placeholder={placeholder}
                    onClick={handleInputClick}
                />
                {isSuggestionListVisible && !!autocomplete.suggestions.length && (
                    <div className={cls.suggestionList}>
                        {autocomplete.suggestions
                            .slice(0, limit)
                            .map((suggestion) => (
                                <SuggestionItem
                                    key={suggestion.name}
                                    suggestion={suggestion}
                                    setSuggestion={setSuggestion}
                                />
                            ))}
                    </div>
                )}
            </div>
        );
    },
);
