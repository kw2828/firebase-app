import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Services / assetss
import { Menu } from '../../assets/svg/icons';
import useResponsive from '../../services/hooks/useResponsive';

//Components
import Lockedlayout from '../layout/LockedLayout';

const Header = ({ onClick, isNavOpen }) => {
    const { width } = useResponsive();
    return (
        <Lockedlayout className="header">
            <div className="header__left">
                <Link to="/" className="header__left--logo">
                    Zebra
                </Link>
                <Menu
                    color={width > 600 || isNavOpen ? 'var(--color-white)' : 'var(--color-black)'}
                    className="header__left--icon"
                    onClick={onClick}
                />
            </div>
        </Lockedlayout>
    );
};

Header.propTypes = {
    onClick: PropTypes.func,
    isNavOpen: PropTypes.bool
};

export default Header;
