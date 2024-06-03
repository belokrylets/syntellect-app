import React, { memo } from 'react';
import classNames from 'classnames';
import cls from './FirstControl.module.scss';
import { useFirstControl } from './useFirstControl';
import { Input } from 'shared/ui/Input';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { observer } from 'mobx-react-lite';

interface FirstControlProps {
    classes?: string;
}

enum CONST {
    HELLO_WORLD = 'Hello world!',
}

export const FirstControlComponent = ({ classes }: FirstControlProps) => {
    const { onClearInput, control, oninput, onAddText } = useFirstControl();

    return (
        <div className={classNames(cls.FirstControl, [classes])}>
            <form>
                <Input
                    inputName={'firstButtonControl'}
                    onChange={oninput('firstButtonControl')}
                    value={control.form.firstButtonControl}
                    placeholder="Введите значение..."
                />
            </form>
            <div className={cls.buttonWrapper}>
                <Button theme={ButtonTheme.BORDER} onClick={onClearInput}>
                    Очистить
                </Button>
                <Button onClick={() => onAddText(CONST.HELLO_WORLD)}>
                    {CONST.HELLO_WORLD}
                </Button>
            </div>
        </div>
    );
};

export const FirstControl = memo(observer(FirstControlComponent));
