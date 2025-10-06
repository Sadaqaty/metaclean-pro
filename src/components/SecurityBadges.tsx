import React from 'react';
import styled from 'styled-components';
import { FaShieldAlt, FaLock, FaUserShield, FaFingerprint } from 'react-icons/fa';

const securityFeatures = [
  {
    icon: <FaShieldAlt />,
    title: 'End-to-End Encryption',
    description: 'Your files are encrypted during transfer and processing.'
  },
  {
    icon: <FaLock />,
    title: 'No Data Storage',
    description: 'We never store your files on our servers after processing.'
  },
  {
    icon: <FaUserShield />,
    title: 'GDPR Compliant',
    description: 'Fully compliant with data protection regulations.'
  },
  {
    icon: <FaFingerprint />,
    title: 'Zero Tracking',
    description: 'We don\'t track or log your activity.'
  }
];

export const SecurityBadges: React.FC = () => {
  return (
    <SecuritySection>
      <Container>
        <SectionHeader>
          <SectionTitle>Your Privacy is Our Priority</SectionTitle>
          <SectionSubtitle>We take security and privacy seriously</SectionSubtitle>
        </SectionHeader>
        
        <BadgesGrid>
          {securityFeatures.map((feature, index) => (
            <Badge key={index}>
              <BadgeIcon>{feature.icon}</BadgeIcon>
              <BadgeTitle>{feature.title}</BadgeTitle>
              <BadgeDescription>{feature.description}</BadgeDescription>
            </Badge>
          ))}
        </BadgesGrid>
      </Container>
    </SecuritySection>
  );
};

const SecuritySection = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
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

const BadgesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Badge = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 2rem;
  text-align: center;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const BadgeIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1rem;
`;

const BadgeTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
`;

const BadgeDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9375rem;
  line-height: 1.6;
  margin: 0;
`;
