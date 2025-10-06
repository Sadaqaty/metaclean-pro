import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaTwitter, FaLinkedin, FaShieldAlt } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterSection>
      <Container>
        <FooterTop>
          <FooterAbout>
            <FooterLogo>
              <FaShieldAlt />
              <span>MetaClean Pro</span>
            </FooterLogo>
            <FooterAboutText>
              The most secure and private way to remove EXIF metadata from your images. 
              Your privacy is our top priority.
            </FooterAboutText>
            <SocialLinks>
              <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialLink>
            </SocialLinks>
          </FooterAbout>
          
          <FooterLinks>
            <FooterLinksColumn>
              <FooterLinksTitle>Product</FooterLinksTitle>
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#how-it-works">How It Works</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
            </FooterLinksColumn>
            
            <FooterLinksColumn>
              <FooterLinksTitle>Company</FooterLinksTitle>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
            </FooterLinksColumn>
            
            <FooterLinksColumn>
              <FooterLinksTitle>Legal</FooterLinksTitle>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Cookie Policy</FooterLink>
              <FooterLink href="#">GDPR</FooterLink>
            </FooterLinksColumn>
          </FooterLinks>
        </FooterTop>
        
        <FooterBottom>
          <Copyright>
            &copy; {currentYear} MetaClean Pro. All rights reserved.
          </Copyright>
          <FooterLegalLinks>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Cookie Policy</FooterLink>
          </FooterLegalLinks>
        </FooterBottom>
      </Container>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.white};
  padding: 4rem 0 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  margin-bottom: 4rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const FooterAbout = styled.div`
  max-width: 300px;
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  
  svg {
    margin-right: 0.75rem;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const FooterAboutText = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
  }
  
  svg {
    font-size: 1.25rem;
  }
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FooterLinksColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLinksTitle = styled.h3`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.75rem;
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    padding-left: 0.5rem;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.875rem;
  margin: 0;
`;

const FooterLegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;
