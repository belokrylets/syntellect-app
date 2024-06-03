import { useCallback } from 'react';
import { useStore } from '../../../../shared/hooks/useStore';

export const useFirstControl = () => {
    const { control } = useStore();

    const oninput = useCallback(
        (name: keyof typeof control.form) => (value: string) => {
            control.setFormControl(name, value);
        },
        [control],
    );

    const onClearInput = useCallback(() => {
        control.setFormControl('firstButtonControl', '');
    }, [control]);

    const onAddText = useCallback(
        (text: string) => {
            control.setFormControl('firstButtonControl', text);
        },
        [control],
    );
    return { oninput, onClearInput, onAddText, control };
};
