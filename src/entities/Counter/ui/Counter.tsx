import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppButton } from 'shared/ui/AppButton';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <AppButton onClick={increment} data-testid="increment-btn">
                {t('increment')}
            </AppButton>
            <AppButton onClick={decrement} data-testid="decrement-btn">
                {t('decrement')}
            </AppButton>
        </div>
    );
};