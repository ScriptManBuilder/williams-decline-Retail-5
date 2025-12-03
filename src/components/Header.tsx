import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  NavLink,
  CTAButtons,
  Button
} from '../styles/Header.styles';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (location.pathname === '/support') {
      return;
    }
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector('#contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleCustomerCareClick = () => {
    navigate('/support');
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
          </svg>
          {process.env.REACT_APP_BRAND_NAME || 'Retail'}
        </Logo>
        <NavLinks>
          <NavLink href="#features" onClick={(e) => handleNavClick(e, '#features')}>What We Do</NavLink>
          <NavLink href="#stats" onClick={(e) => handleNavClick(e, '#stats')}>How It Works</NavLink>
          <NavLink href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')}>Results</NavLink>
          <NavLink href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>Who We Serve</NavLink>
          <NavLink href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact Sales</NavLink>
        </NavLinks>
        <CTAButtons>
          <Button onClick={handleCustomerCareClick}>Merchant Support</Button>
          <Button $primary onClick={handleButtonClick}>Request Demo</Button>
        </CTAButtons>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
