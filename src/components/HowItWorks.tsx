import React from 'react';
import styled from 'styled-components';
import { FiUpload, FiShield, FiDownload } from 'react-icons/fi';

const steps = [
  {
    icon: <FiUpload />,
    title: 'Upload Your Images',
    description: 'Drag and drop your images or click to browse. We support JPG, PNG, TIFF, and more.'
  },
  {
    icon: <FiShield />,
    title: 'We Remove Metadata',
    description: 'Our advanced algorithm strips all EXIF, GPS, and other hidden data from your images.'
  },
  {
    icon: <FiDownload />,
    title: 'Download Clean Files',
    description: 'Get your privacy-protected images with a single click. Your originals remain untouched.'
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <HowItWorksSection id="how-it-works">
      <Container>
        <SectionHeader>
          <SectionTitle>How It Works</SectionTitle>
          <SectionSubtitle>Protecting your privacy in just three simple steps</SectionSubtitle>
        </SectionHeader>
        
        <StepsContainer>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepNumber>{index + 1}</StepNumber>
              <StepIcon>{step.icon}</StepIcon>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Step>
          ))}
          <TimelineLine />
        </StepsContainer>
      </Container>
    </HowItWorksSection>
  );
};

const HowItWorksSection = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, 
    ${({ theme }) => theme.colors.accent} 0%, 
    ${({ theme }) => theme.colors.secondary} 100%);
  z-index: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const Step = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 300px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    max-width: 400px;
  }
`;

const StepNumber = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.125rem;
`;

const StepIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1rem;
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
`;

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9375rem;
  line-height: 1.6;
  margin: 0;
`;
