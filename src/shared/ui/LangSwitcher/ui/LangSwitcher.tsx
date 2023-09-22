import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const [t, i18n] = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <AppButton
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={toggle}
            theme={ThemeButton.CLEAR}
        >
            {t('Язык')}
        </AppButton>
    )
}
