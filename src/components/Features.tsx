import React from 'react';
import styled from 'styled-components';
import { FaShieldAlt, FaLock, FaRocket, FaMobileAlt, FaCloud, FaCheckCircle } from 'react-icons/fa';

const features = [
  {
    icon: <FaShieldAlt />,
    title: 'Complete Metadata Removal',
    description: 'Strip all EXIF, IPTC, and XMP metadata from your images to protect your privacy.'
  },
  {
    icon: <FaLock />,
    title: 'Bank-Grade Security',
    description: 'Your files are processed securely in your browser. No data is sent to our servers.'
  },
  {
    icon: <FaRocket />,
    title: 'Lightning Fast',
    description: 'Process multiple images simultaneously with our optimized processing engine.'
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile-Friendly',
    description: 'Works seamlessly on all devices, from desktop to smartphone.'
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Integration',
    description: 'Directly import from and export to your favorite cloud storage providers.'
  },
  {
    icon: <FaCheckCircle />,
    title: 'Batch Processing',
    description: 'Clean multiple images at once with our drag-and-drop interface.'
  }
];

export const Features: React.FC = () => {
  return (
    <FeaturesSection id="features">
      <Container>
        <SectionHeader>
          <SectionTitle>Powerful Privacy Protection</SectionTitle>
          <SectionSubtitle>All the tools you need to keep your images private and secure</SectionSubtitle>
        </SectionHeader>
        
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureText>{feature.description}</FeatureText>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </FeaturesSection>
  );
};

const FeaturesSection = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 2rem;
  transition: ${({ theme }) => theme.transitions.default};
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const FeatureText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin: 0;
`;
