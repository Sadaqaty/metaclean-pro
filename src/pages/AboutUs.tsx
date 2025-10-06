import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';

const AboutContainer = styled(Container)<{ theme: any }>`
  padding: 4rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h1<{ theme: any }>`
  font-size: 3rem;
  margin: 2rem 0 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 800;
  line-height: 1.2;
  text-align: center;
  position: relative;
  padding-bottom: 1.5rem;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
    margin: 1.5rem 0 2rem;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
    border-radius: 2px;
  }
`;

const Subtitle = styled.h2<{ theme: any }>`
  font-size: 2rem;
  margin: 3.5rem 0 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  line-height: 1.3;
  position: relative;
  padding-left: 1.5rem;
  letter-spacing: -0.3px;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin: 3rem 0 1.25rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    height: 1.8rem;
    width: 4px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
  }
`;

const Paragraph = styled.p<{ theme: any }>`
  margin-bottom: 1.75rem;
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
    line-height: 1.7;
  }
`;

// Removed unused Highlight component

const MissionStatement = styled.div<{ theme: any }>`
  background: ${({ theme }) => theme.colors.primaryLight};
  padding: 2.5rem;
  border-radius: 12px;
  margin: 3rem 0;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    padding: 1.75rem;
    margin: 2.5rem 0;
  }
  
  ${Subtitle} {
    margin-top: 0;
    padding-left: 0;
    
    &::before {
      display: none;
    }
  }
`;

const ValuesList = styled.ul<{ theme: any }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.75rem;
  margin: 2.5rem 0;
  padding: 0;
  list-style: none;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const ValueCard = styled.li<{ theme: any }>`
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

const ValueTitle = styled.h3<{ theme: any }>`
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const FixareHighlight = styled.div<{ theme: any }>`
  background: linear-gradient(135deg, #f8fab4 0%, #fee2ad 100%);
  padding: 4rem 2.5rem;
  border-radius: 16px;
  margin: 4rem 0;
  text-align: left;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    margin: 3rem 0;
    text-align: left;
  }
  
  &::before {
    content: 'FIXARE';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    font-size: 12rem;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.1);
    line-height: 1;
    z-index: 0;
    pointer-events: none;
    user-select: none;
  }
`;

const FixareContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;
`;

const Tagline = styled.p<{ theme: any }>`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0 2.5rem 0;
  color: ${({ theme }) => theme.colors.text};
  font-style: italic;
  line-height: 1.5;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  position: relative;
  padding: 1.5rem 0;
  
  &::before, &::after {
    content: '"';
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.7;
    position: absolute;
    font-family: Georgia, serif;
    line-height: 1;
  }
  
  &::before {
    top: 0;
    left: 0;
    transform: translateX(-50%) translateY(-50%);
  }
  
  &::after {
    bottom: 0;
    right: 0;
    transform: translateX(50%) translateY(50%);
  }
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding: 1rem 0 2rem;
    
    &::before, &::after {
      font-size: 2.5rem;
    }
  }
`;

const AboutUs = () => {
  return (
    <AboutContainer>
      <Title>About MetaClean Pro</Title>
      <Paragraph>
        MetaClean Pro is a cutting-edge service designed to help individuals and businesses protect their online privacy and take control of their digital footprint. In today's interconnected world, your online presence speaks volumes, and we're here to ensure it tells the right story.
      </Paragraph>
      
      <MissionStatement>
        <Subtitle>Our Mission</Subtitle>
        <Paragraph>
          We believe that privacy is a fundamental right, not a privilege. Our mission is to empower you with the tools and knowledge needed to navigate the digital landscape safely and confidently. Whether you're concerned about data brokers, online tracking, or digital identity protection, MetaClean Pro is your trusted partner in online privacy.
        </Paragraph>
      </MissionStatement>
      
      <Subtitle>Our Values</Subtitle>
      <ValuesList>
        <ValueCard>
          <ValueTitle>Privacy First</ValueTitle>
          <p>We prioritize your privacy in everything we do. Our tools are designed to protect your data, not exploit it.</p>
        </ValueCard>
        <ValueCard>
          <ValueTitle>Transparency</ValueTitle>
          <p>We believe in being open about our methods and giving you full control over your data and privacy settings.</p>
        </ValueCard>
        <ValueCard>
          <ValueTitle>Innovation</ValueTitle>
          <p>We stay ahead of emerging privacy threats to provide you with the most effective protection available.</p>
        </ValueCard>
        <ValueCard>
          <ValueTitle>Empowerment</ValueTitle>
          <p>We provide you with the knowledge and tools to take control of your online presence.</p>
        </ValueCard>
      </ValuesList>
      
      <FixareHighlight>
        <FixareContent>
          <Subtitle>Brought to You by Fixare Studio</Subtitle>
          <Tagline>"Transform what takes months into days, and what takes days into 24 hours."</Tagline>
          
          <Paragraph>
            MetaClean Pro is proudly developed by <strong>Fixare Studio</strong>, a creative-corporate, international-first partner for businesses that want measurable growth, robust security, and operational calm. We design and operate the digital backbone of modern companies, blending engineering discipline with brand-sensitive design, delivering with speed, quality, and automation as non-negotiables.
          </Paragraph>
          
          <Subtitle>Why We Built This</Subtitle>
          <Paragraph>
            At Fixare, we understand the growing concerns around digital privacy and the increasing need for individuals to protect their online presence. We created MetaClean Pro as a service to help people take control of their digital footprint, because we believe that privacy should be accessible to everyone, not just large corporations with dedicated security teams.
          </Paragraph>
          
          <Subtitle>Our Approach</Subtitle>
          <Paragraph>
            Just like in all our projects, we've applied our core principles to MetaClean Pro:
          </Paragraph>
          
          <ValuesList>
            <ValueCard>
              <ValueTitle>Quality Without Compromise</ValueTitle>
              <p>We've built MetaClean Pro with enterprise-grade security and reliability, making professional privacy protection accessible to everyone.</p>
            </ValueCard>
            <ValueCard>
              <ValueTitle>Speed With Precision</ValueTitle>
              <p>Our efficient tools help you secure your online presence quickly, without sacrificing thoroughness or accuracy.</p>
            </ValueCard>
            <ValueCard>
              <ValueTitle>Security First</ValueTitle>
              <p>Your data's security is our top priority, with end-to-end encryption and strict data handling protocols.</p>
            </ValueCard>
          </ValuesList>
          
          <Paragraph>
            At Fixare, we don't just build products; we create solutions that make a real difference. MetaClean Pro is more than just a service—it's our commitment to a safer, more private internet for all.
          </Paragraph>
        </FixareContent>
      </FixareHighlight>
      
      <Subtitle>Our Team</Subtitle>
      <Paragraph>
        The team behind MetaClean Pro combines expertise in cybersecurity, software engineering, and user experience design. We're passionate about creating tools that make online privacy accessible to everyone, regardless of technical expertise.
      </Paragraph>
      
      <Subtitle>Join Us in Protecting Digital Privacy</Subtitle>
      <Paragraph>
        We're committed to continuous improvement and value your feedback. If you have suggestions or questions, we'd love to hear from you. Together, we can create a more private and secure digital world.
      </Paragraph>
    </AboutContainer>
  );
};

export default AboutUs;
