import AutocompleteStore from '../../../app/store/autocomplete';
import { useCallback, useEffect, useRef, useState } from 'react';

export const useAutocomplete = (store: typeof AutocompleteStore) => {
    const autocomplete = store;
    const setSuggestion = useCallback(
        (suggestionName: string) => () => {
            autocomplete.selectSuggestion(suggestionName);
        },
        [autocomplete],
    );

    const onInput = useCallback(
        (name: keyof typeof autocomplete.form) => (value: string) => {
            autocomplete.setFormAutocomplete(name, value);
        },
        [autocomplete],
    );
    const [isSuggestionListVisible, setSuggestionListVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            containerRef.current &&
            !containerRef.current.contains(event.target as Node)
        ) {
            setSuggestionListVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleInputClick = () => {
        setSuggestionListVisible(true);
    };
    return {
        setSuggestion,
        containerRef,
        onInput,
        autocomplete,
        handleInputClick,
        isSuggestionListVisible,
    };
};
