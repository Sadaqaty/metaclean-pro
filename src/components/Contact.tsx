import React from 'react';
import styled from 'styled-components';
import { ContactForm } from './ContactForm';

export const Contact: React.FC = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <SectionHeader>
          <SectionTitle>Get In Touch</SectionTitle>
          <SectionSubtitle>Have questions or feedback? We'd love to hear from you!</SectionSubtitle>
        </SectionHeader>
        <ContactForm isPage={false} />
      </Container>
    </ContactSection>
  );
};

const ContactSection = styled.section`
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

const ContactContainer = styled.div`
  margin-top: 2rem;
  font-size: 1rem;
  transition: ${({ theme }) => theme.transitions.default};
  background-color: ${({ theme }) => theme.colors.white};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(255, 199, 167, 0.2);
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
    opacity: 0.7;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: ${({ theme }) => theme.transitions.default};
  background-color: ${({ theme }) => theme.colors.white};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(255, 199, 167, 0.2);
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
    opacity: 0.7;
  }
`;

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.text};
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover:not(:disabled) svg {
    transform: translateX(4px);
  }
`;

const StatusMessage = styled.div<{ $success: boolean }>`
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme, $success }) => 
    $success ? 'rgba(72, 187, 120, 0.1)' : 'rgba(245, 101, 101, 0.1)'};
  color: ${({ theme, $success }) => 
    $success ? theme.colors.success : theme.colors.error};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
