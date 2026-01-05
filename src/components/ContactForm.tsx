import React, { useState, FormEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import { FiSend, FiMail, FiPhone, FiMapPin, FiUser, FiMessageSquare, FiPhoneCall } from 'react-icons/fi';

// Theme interface for TypeScript
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      secondary: string;
      accent: string;
      text: string;
      textLight: string;
      white: string;
      black: string;
      success: string;
      error: string;
      warning: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
    };
    transitions: {
      default: string;
    };
  }
}

// Styled Components
interface ContactContainerProps {
  $isPage?: boolean;
}

const ContactContainer = styled.div<ContactContainerProps>`
  display: flex;
  flex-direction: ${({ $isPage }) => ($isPage ? 'row' : 'column')};
  gap: ${({ $isPage }) => ($isPage ? '3rem' : '1.5rem')};
  max-width: ${({ $isPage }) => ($isPage ? '1200px' : '100%')};
  margin: 0 auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: ${({ $isPage }) =>
    $isPage ? '0 10px 30px rgba(0, 0, 0, 0.05)' : 'none'};
  overflow: hidden;
  padding: ${({ $isPage }) => ($isPage ? '2.5rem' : '0')};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    padding: ${({ $isPage }) => ($isPage ? '1.5rem' : '0')};
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #F8FAB4;
  color: #2D3748;
  flex-shrink: 0;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  color: #2D3748;
`;

const InfoText = styled.p`
  margin: 0;
  color: #4A5568;
  line-height: 1.6;
`;

const InfoTextSecondary = styled(InfoText)`
  font-size: 0.9rem;
  color: #718096;
`;

interface StyledFormProps {
  $isPage?: boolean;
}

const StyledForm = styled.form.withConfig({
  shouldForwardProp: (prop) => prop !== '$isPage',
}) <StyledFormProps>`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: ${({ $isPage }) => ($isPage ? '1.5rem' : '1rem')};
  width: 100%;
  ${({ $isPage }) => $isPage && 'max-width: 800px; margin: 0 auto;'}
`;

const FormHeader = styled.div`
  margin-bottom: 1rem;
`;

const FormTitle = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: 1.75rem;
  color: #2D3748;
`;

const FormSubtitle = styled.p`
  margin: 0;
  color: #4A5568;
  line-height: 1.6;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const FormRow = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: #2D3748;
`;

const Required = styled.span`
  color: #E53E3E;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.2s ease;
  background-color: #FFFFFF;
  
  &:focus {
    outline: none;
    border-color: #F8FAB4;
    box-shadow: 0 0 0 3px rgba(248, 250, 180, 0.2);
  }
  
  &::placeholder {
    color: #A0AEC0;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 0.75rem 1rem;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
  transition: all 0.2s ease;
  background-color: #FFFFFF;
  
  &:focus {
    outline: none;
    border-color: #F8FAB4;
    box-shadow: 0 0 0 3px rgba(248, 250, 180, 0.2);
  }
  
  &::placeholder {
    color: #A0AEC0;
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const PrivacyNote = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.875rem;
  color: #718096;
  line-height: 1.5;
`;

const StatusMessage = styled.div<{ $success: boolean }>`
  padding: 1rem;
  border-radius: 8px;
  background: ${({ $success }) => ($success ? 'rgba(72, 187, 120, 0.1)' : 'rgba(229, 62, 62, 0.1)')};
  color: ${({ $success }) => ($success ? '#2F855A' : '#C53030')};
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

interface ContactFormProps {
  isPage?: boolean;
}

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.textLight};
    cursor: not-allowed;
    transform: none;
  }
`;

export const ContactForm: React.FC<ContactFormProps> = ({ isPage = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear status when user starts typing
    if (status.type) {
      setStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
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
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
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
    <ContactContainer $isPage={isPage}>
      {isPage && (
        <ContactInfo>
          <InfoItem>
            <InfoIcon>
              <FiMail />
            </InfoIcon>
            <div>
              <InfoTitle>Email Us</InfoTitle>
              <InfoText>info@fixare.studio</InfoText>
              <InfoTextSecondary>We'll respond within 24 hours</InfoTextSecondary>
            </div>
          </InfoItem>

          <InfoItem>
            <InfoIcon>
              <FiPhoneCall />
            </InfoIcon>
            <div>
              <InfoTitle>Call Us</InfoTitle>
              <InfoText>+92 305 7383987</InfoText>
              <InfoTextSecondary>Mon-Fri, 9am-6pm EST</InfoTextSecondary>
            </div>
          </InfoItem>

          <InfoItem>
            <InfoIcon>
              <FiMapPin />
            </InfoIcon>
            <div>
              <InfoTitle>Visit Us</InfoTitle>
              <InfoText>Lahore</InfoText>
              <InfoText>Pakistan</InfoText>
              <InfoTextSecondary>By appointment only</InfoTextSecondary>
            </div>
          </InfoItem>
        </ContactInfo>
      )}

      <StyledForm onSubmit={handleSubmit} $isPage={isPage}>
        {isPage && (
          <FormHeader>
            <FormTitle>Send Us a Message</FormTitle>
            <FormSubtitle>We're here to help and answer any questions you might have.</FormSubtitle>
          </FormHeader>
        )}

        {submitStatus && (
          <StatusMessage $success={submitStatus.success}>
            {submitStatus.message}
          </StatusMessage>
        )}

        <FormGroup>
          <Label htmlFor="name">
            <FiUser /> Full Name <Required>*</Required>
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </FormGroup>

        <FormRow>
          <FormGroup style={{ flex: 1 }}>
            <Label htmlFor="email">
              <FiMail /> Email Address <Required>*</Required>
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </FormGroup>

          <FormGroup style={{ flex: 1 }}>
            <Label htmlFor="phone">
              <FiPhone /> Phone Number
            </Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (___) ___-____"
            />
          </FormGroup>
        </FormRow>

        <FormGroup>
          <Label htmlFor="subject">
            <FiMessageSquare /> Subject
          </Label>
          <select
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              border: '1px solid #FCFDD8',
              borderRadius: '8px',
              fontSize: '1rem',
              transition: 'all 0.2s ease',
              backgroundColor: '#FFFFFF'
            }}
          >
            <option value="">Select a subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Support">Support</option>
            <option value="Billing">Billing</option>
            <option value="Other">Other</option>
          </select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">
            <FiMessageSquare /> Message
          </Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            required
          />
        </FormGroup>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </StyledForm>
    </ContactContainer>
  );
};
