import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { ContactForm } from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <ContactPageContainer>
      <Container>
        <PageHeader>
          <PageTitle>Contact Us</PageTitle>
          <PageSubtitle>We'd love to hear from you! Reach out to our team for any questions or feedback.</PageSubtitle>
        </PageHeader>
        
        <ContactForm isPage={true} />
        
        <MapSection>
          <MapContainer>
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.035074609375!2d-122.4014325846826!3d37.79039297975792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580636a737511%3A0x1c3c3c8c3a3a3a3a!2s123%20Privacy%20St%2C%20San%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="450" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapContainer>
        </MapSection>
        
        <FAQSection>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <FAQList>
            <FAQItem>
              <FAQQuestion>How quickly can I expect a response?</FAQQuestion>
              <FAQAnswer>
                We typically respond to all inquiries within 24 hours during business days. For urgent matters, 
                please call our support line for immediate assistance.
              </FAQAnswer>
            </FAQItem>
            <FAQItem>
              <FAQQuestion>What are your business hours?</FAQQuestion>
              <FAQAnswer>
                Our support team is available Monday through Friday, 9:00 AM to 6:00 PM EST. 
                We're closed on weekends and major holidays.
              </FAQAnswer>
            </FAQItem>
            <FAQItem>
              <FAQQuestion>Do you offer enterprise solutions?</FAQQuestion>
              <FAQAnswer>
                Yes! We provide customized enterprise solutions for businesses of all sizes. 
                Please contact our sales team to discuss your specific needs.
              </FAQAnswer>
            </FAQItem>
          </FAQList>
        </FAQSection>
      </Container>
    </ContactPageContainer>
  );
};

export { ContactPage };

// Styled Components
const ContactPageContainer = styled.div`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.white || '#FFFFFF'};
  min-height: calc(100vh - 80px);
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  font-weight: 800;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin: 0 auto;
  max-width: 600px;
`;

const MapSection = styled.section`
  margin: 4rem 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const MapContainer = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  
  iframe {
    display: block;
    width: 100%;
  }
`;

const FAQSection = styled.section`
  margin-top: 5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary};
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`;

const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  margin-bottom: 1rem;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const FAQQuestion = styled.h3`
  margin: 0;
  padding: 1.5rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.primaryLight || theme.colors.primary};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  
  &::after {
    content: '+';
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary || '#2D3748'};
  }
`;

const FAQAnswer = styled.div`
  padding: 1.5rem 2rem;
  font-size: 1rem;
  line-height: 1.6;
  background-color: #FCFDD8;
  color: #2D3748;
  display: none;
  
  &.active {
    display: block;
  }
`;
