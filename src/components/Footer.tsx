import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaTwitter, FaLinkedin, FaShieldAlt, FaInstagram } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollToSection';

const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.white};
  padding: 5rem 0 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 3rem 0 2rem;
  }
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

const FooterLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  
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
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem 0.5rem;
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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.default};
  display: block;
  margin-bottom: 0.75rem;
  white-space: nowrap;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: underline;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.8rem;
  }
`;

const ScrollLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.default};
  display: block;
  margin-bottom: 0.75rem;
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: underline;
  }
  
  &[href^="#"] {
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.8rem;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column-reverse;
    gap: 1.5rem;
    text-align: center;
    padding-top: 1.5rem;
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
    display: none;
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  // Handle scroll to section when location hash changes
  React.useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    if (to.startsWith('#')) {
      e.preventDefault();
      scrollToSection(e, to);
    }
  };

  return (
    <FooterSection>
      <Container>
        <FooterTop>
          <FooterAbout>
            <FooterLogoLink to="/">
              <FaShieldAlt />
              <span>MetaClean Pro</span>
            </FooterLogoLink>
            <FooterAboutText>
              The most secure and private way to remove EXIF metadata from your images.
              Your privacy is our top priority.
            </FooterAboutText>
            <SocialLinks>
              <SocialLink
                href="https://github.com/SecureNet-Dynamics"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/fixare.studio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/company/fixare-studio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialLink>
            </SocialLinks>
          </FooterAbout>
          <FooterLinks>
            <FooterLinksColumn>
              <FooterLinksTitle>Product</FooterLinksTitle>
              <ScrollLink
                to="#features"
                onClick={(e) => handleScrollClick(e, '#features')}
              >
                Features
              </ScrollLink>
              <ScrollLink
                to="#how-it-works"
                onClick={(e) => handleScrollClick(e, '#how-it-works')}
              >
                How It Works
              </ScrollLink>
              <ScrollLink
                to="#faq"
                onClick={(e) => handleScrollClick(e, '#faq')}
              >
                FAQ
              </ScrollLink>
              <ScrollLink
                to="#pricing"
                onClick={(e) => handleScrollClick(e, '#pricing')}
              >
                Pricing
              </ScrollLink>
            </FooterLinksColumn>
            <FooterLinksColumn>
              <FooterLinksTitle>Company</FooterLinksTitle>
              <FooterLink to="https://fixare.studio">Fixare Studio</FooterLink>
              <ScrollLink to="https://chunker.fixare.studio">Chunker</ScrollLink>
              <FooterLink to="https://instaconnect.fixare.studio/">InstaConnect Pro</FooterLink>
              <ScrollLink to="https://fixare.studio/careers/">Careers</ScrollLink>
            </FooterLinksColumn>
            <FooterLinksColumn>
              <FooterLinksTitle>Contact</FooterLinksTitle>
              <FooterLink to="mailto:sharafaty@fixare.studio">CEO: Sharafat Ali</FooterLink>
              <FooterLink to="mailto:sadaqaty@fixare.studio">CTO: Sadaqat Ali</FooterLink>
              <FooterLink to="mailto:shaeen@fixare.studio">Marketing: Shaheen</FooterLink>
              <FooterLink to="mailto:info@fixare.studio">General: Info</FooterLink>
            </FooterLinksColumn>
          </FooterLinks>
        </FooterTop>
        <FooterBottom>
          <Copyright>
            &copy; {currentYear} FixAre Studio. All rights reserved.
          </Copyright>
          <FooterLegalLinks>
            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
            <FooterLink to="/cookie-policy">Cookie Policy</FooterLink>
            <FooterLink to="/gdpr">GDPR</FooterLink>
          </FooterLegalLinks>
        </FooterBottom>
      </Container>
    </FooterSection>
  );
};

// Export as both default and named for backward compatibility
export { Footer as default };
export { Footer };
