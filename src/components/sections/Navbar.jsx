import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useMathcMedia } from 'src/hooks';
import { styles } from 'styles/styles';
import { navLinks } from 'src/constants';
import { logo, menu, close } from 'src/assets';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { isDesktop } = useMathcMedia();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeLanguage = language => {
        i18n.changeLanguage(language);
    };

    return (
        <nav
            className={`${
                styles.paddingX
            } w-full flex items-center py-5 fixed top-0 z-20 transition-visibility ease-in-out duration-300 ${
                scrolled ? 'bg-primary' : 'bg-transparent'
            }`}
        >
            <div className="w-full flex items-center max-w-7xl mx-auto gap-8">
                <Link
                    to="/"
                    className="flex flex-1 items-center gap-2"
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                    <p className="text-white text-[18px] font-bold cursor-pointer flex ">
                        {t('navbar.logo.name')} &nbsp;
                        <span className="md:block hidden">
                            | {t('navbar.logo.profession')}
                        </span>
                    </p>
                </Link>

                <ul className="list-none hidden lg:flex flex-row gap-10">
                    {navLinks.map(nav => (
                        <li
                            key={nav.id}
                            className={`${
                                active === nav.title
                                    ? 'text-white'
                                    : 'text-secondary'
                            } hover:text-white text-[18px] font-medium cursor-pointer transition-color ease-in-out duration-300`}
                            onClick={() => setActive(nav.title)}
                        >
                            {nav.href ? (
                                <a
                                    href={`#${nav.id}`}
                                    onClick={() => window.open(nav.href, '_blank')}
                                >
                                    {t(nav.title)}
                                </a>
                            ) : (
                                <a href={`#${nav.id}`}>{t(nav.title)}</a>
                            )}
                        </li>
                    ))}
                </ul>

                {!isDesktop && (
                    <div className="ml-10 flex gap-2">
                        <button onClick={() => changeLanguage('en')}>EN</button>
                        <div>|</div>
                        <button onClick={() => changeLanguage('ua')}>UA</button>
                    </div>
                )}

                <div className="lg:hidden flex justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain"
                        onClick={() => setToggle(!toggle)}
                    />

                    <div
                        className={`${
                            !toggle ? 'hidden' : 'flex'
                        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                            {navLinks.map(nav => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                        active === nav.title
                                            ? 'text-white'
                                            : 'text-secondary'
                                    }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    {nav.href ? (
                                        <a
                                            href={`#${nav.id}`}
                                            onClick={() =>
                                                window.open(nav.href, '_blank')
                                            }
                                        >
                                            {t(nav.title)}
                                        </a>
                                    ) : (
                                        <a href={`#${nav.id}`}>{t(nav.title)}</a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {isDesktop && (
                    <div className="ml-10 flex gap-2">
                        <button onClick={() => changeLanguage('en')}>EN</button>
                        <div>|</div>
                        <button onClick={() => changeLanguage('ua')}>UA</button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
