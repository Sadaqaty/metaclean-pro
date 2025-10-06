import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSend, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        success: true,
        message: 'Thank you for your message! We\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionHeader>
          <SectionTitle>Get In Touch</SectionTitle>
          <SectionSubtitle>Have questions or feedback? We'd love to hear from you!</SectionSubtitle>
        </SectionHeader>

        <ContactContainer>
          <ContactInfo>
            <InfoItem>
              <InfoIcon>
                <FiMail />
              </InfoIcon>
              <div>
                <InfoTitle>Email Us</InfoTitle>
                <InfoText>support@metacleanpro.com</InfoText>
              </div>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <FiPhone />
              </InfoIcon>
              <div>
                <InfoTitle>Call Us</InfoTitle>
                <InfoText>+1 (555) 123-4567</InfoText>
              </div>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <FiMapPin />
              </InfoIcon>
              <div>
                <InfoTitle>Visit Us</InfoTitle>
                <InfoText>123 Privacy Street<br />San Francisco, CA 94107</InfoText>
              </div>
            </InfoItem>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            {submitStatus && (
              <StatusMessage $success={submitStatus.success}>
                {submitStatus.message}
              </StatusMessage>
            )}
            
            <FormGroup>
              <Label htmlFor="name">Your Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">Your Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="How can we help you?"
              />
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <FiSend />
            </SubmitButton>
          </ContactForm>
        </ContactContainer>
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.accent};
  flex-shrink: 0;
`;

const InfoTitle = styled.h3`
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.colors.text};
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin: 0;
  line-height: 1.6;
`;

const ContactForm = styled.form`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: inherit;
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
