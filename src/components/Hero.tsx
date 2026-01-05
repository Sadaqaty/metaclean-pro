import React from 'react';
import styled from 'styled-components';
import { FaShieldAlt, FaArrowRight } from 'react-icons/fa';

const HeroSection = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 8rem 0 4rem;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 1rem;
  }
`;

const Badge = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.md};
  margin-bottom: 2rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`;

const TrustedBy = styled.div`
  margin-top: 3rem;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.875rem;
`;

export const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Badge>
          <FaShieldAlt />
          Trusted by security professionals worldwide
        </Badge>
        <Title>Remove Hidden Data. Preserve Privacy.</Title>
        <Subtitle>
          MetaClean Pro securely removes EXIF metadata from your images, protecting your privacy and ensuring sensitive information stays private.
        </Subtitle>
        <CTAButton href="#upload">
          Clean Your Images Now
          <FaArrowRight />
        </CTAButton>
        <TrustedBy>Trusted by security teams at leading organizations</TrustedBy>
      </HeroContent>
    </HeroSection>
  );
};
