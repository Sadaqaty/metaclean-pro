import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaShieldAlt } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
  
  svg {
    margin-right: 0.75rem;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: 500;
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.default};
  position: relative;
  padding: 0.5rem 0;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: ${({ theme }) => theme.transitions.default};
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const CTAButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.text};
    transform: translateY(-2px);
  }
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent className="container">
        <LogoLink to="/">
          <FaShieldAlt size={24} />
          MetaClean Pro
        </LogoLink>
        
        <Nav>
          <NavLink to="/#features">Features</NavLink>
          <NavLink to="/#how-it-works">How It Works</NavLink>
          <NavLink to="/#faq">FAQ</NavLink>
          <NavLink to="/#contact">Contact</NavLink>
        </Nav>
        
        <CTAButton to="/#get-started">Get Started</CTAButton>
      </HeaderContent>
    </HeaderContainer>
  );
};
