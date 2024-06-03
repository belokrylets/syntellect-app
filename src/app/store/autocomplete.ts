import { makeAutoObservable, runInAction } from 'mobx';
import { getCountryByName } from 'shared/api/apiService';

export interface Suggestion {
    name: string;
    fullName: string;
    flag: string;
}

class AutocompleteStore {
    form: {
        autocomplete: string;
    };
    suggestions: Suggestion[] = [];

    constructor() {
        this.form = {
            autocomplete: '',
        };
        makeAutoObservable(this);
    }

    setFormAutocomplete(name: keyof typeof this.form, value: string) {
        this.form[name] = value;
        if (value.trim() !== '') {
            this.fetchSuggestions(value);
        } else {
            runInAction(() => {
                this.suggestions = [];
            });
        }
    }

    async fetchSuggestions(query: string) {
        if (!query) {
            runInAction(() => {
                this.suggestions = [];
            });
            return;
        }

        try {
            const suggestions = await getCountryByName(query);
            runInAction(() => {
                this.suggestions = suggestions;
            });
        } catch (error) {
            runInAction(() => {
                this.suggestions = [];
            });
            console.error('Ошибка загрузки:', error);
        }
    }

    selectSuggestion(suggestionName: string) {
        this.form.autocomplete = suggestionName;
        this.suggestions = [];
    }
}

export const createAutocompleteStore = () => new AutocompleteStore();

export default new AutocompleteStore();
