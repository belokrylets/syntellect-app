import { makeAutoObservable } from 'mobx';

class Control {
    form: {
        firstButtonControl: string;
        secondButtonControl: string;
        autocompleteControl: string;
    };

    constructor() {
        this.form = {
            firstButtonControl: '',
            secondButtonControl: '',
            autocompleteControl: '',
        };
        makeAutoObservable(this);
    }

    setFormControl(name: keyof typeof this.form, value: string) {
        this.form[name] = value;
    }
}

export default new Control();
