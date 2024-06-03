import React, { memo } from 'react';
import classNames from 'classnames';
import cls from './SecondControl.module.scss';
import { useSecondControl } from './useSecondControl';
import { Input } from 'shared/ui/Input';
import { Button, ButtonTheme } from 'shared/ui/Button';
import control from '../../../../app/store/control';
import { observer } from 'mobx-react-lite';

interface FirstControlProps {
    classes?: string;
}

export const SecondControlComponent = ({ classes }: FirstControlProps) => {
    const { onCheckNumber, oninput, onAlert, isDisabled } = useSecondControl();

    return (
        <div className={classNames(cls.FirstControl, [classes])}>
            <form>
                <Input
                    inputName={'secondButtonControl'}
                    onChange={oninput('secondButtonControl')}
                    value={control.form.secondButtonControl}
                    placeholder="Введите значение..."
                />
            </form>
            <div className={cls.buttonWrapper}>
                <Button
                    disabled={isDisabled}
                    theme={ButtonTheme.BORDER}
                    onClick={onCheckNumber}
                >
                    Проверка числа
                </Button>
                <Button disabled={isDisabled} onClick={onAlert}>
                    alert
                </Button>
            </div>
        </div>
    );
};

export const SecondControl = memo(observer(SecondControlComponent));
