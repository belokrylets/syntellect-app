import controlStore from './control';
import autocompleteStore from './autocomplete';

export default class RootStore {
    control = controlStore;
    autocomplete = autocompleteStore;
}
