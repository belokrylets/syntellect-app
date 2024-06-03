import { useCallback } from 'react';
import { isNumber } from 'shared/helpers/isNumber/isNumber';
import { useStore } from 'shared/hooks/useStore';

export const useSecondControl = () => {
    const { control } = useStore();
    const oninput = useCallback(
        (name: keyof typeof control.form) => (value: string) => {
            control.setFormControl(name, value);
        },
        [control],
    );

    const onCheckNumber = useCallback(() => {
        const result = isNumber(control.form.secondButtonControl);
        if (result) alert(control.form.secondButtonControl);
    }, [control]);

    const onAlert = useCallback(() => {
        alert(control.form.secondButtonControl);
    }, [control]);

    const isDisabled = control.form.secondButtonControl === '';
    return { control, oninput, onCheckNumber, onAlert, isDisabled };
};
