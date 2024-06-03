import { createAutocompleteStore } from 'app/store/autocomplete';

export const useAutocompleteControl = () => {
    const autocompleteStore = createAutocompleteStore();
    const autocompleteStore2 = createAutocompleteStore();
    return { autocompleteStore, autocompleteStore2 };
};
