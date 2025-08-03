'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../language-switcher/LanguageSwitcher';


const Navbar = () => {
    const { t } = useTranslation();

    return (
        <nav className="flex justify-between items-center p-4 bg-gray-100 shadow">
            <div className="space-x-4">
                <Link href="/">{t('home')}</Link>
                <Link href="/service">{t('service')}</Link>
                <Link href="/about">{t('about')}</Link>
                <Link href="/contact">{t('contact')}</Link>
            </div>
            <LanguageSwitcher />
        </nav>
    );
};

export default Navbar;
