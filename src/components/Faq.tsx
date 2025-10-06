import React, { useState } from 'react';
import styled from 'styled-components';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqItems = [
  {
    question: 'What is EXIF metadata?',
    answer: 'EXIF (Exchangeable Image File Format) metadata is information stored in image files that includes details about the camera settings, date and time the photo was taken, and sometimes even GPS location data. This information can reveal sensitive details about when and where a photo was taken.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely! MetaClean Pro processes all your images directly in your browser. Your files never touch our servers, ensuring maximum privacy and security. We don\'t store, track, or log any of your data.'
  },
  {
    question: 'What file formats do you support?',
    answer: 'We support all major image formats including JPG, PNG, TIFF, and WebP. If you have a specific format you\'d like us to support, feel free to contact us.'
  },
  {
    question: 'Is there a file size limit?',
    answer: 'Yes, the maximum file size is 10MB per image. This ensures fast processing and a smooth experience for all users. For larger files, we recommend resizing them before uploading.'
  },
  {
    question: 'Do you keep my original images?',
    answer: 'No, we don\'t store any of your images. The original files remain on your device, and the cleaned versions are downloaded directly to your device. Once you close the browser tab, all processing is complete and no trace remains.'
  },
  {
    question: 'Is MetaClean Pro free to use?',
    answer: 'Yes! MetaClean Pro is completely free to use with no hidden fees. We believe in privacy for everyone, which is why we offer this service at no cost.'
  }
];

export const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FaqSection id="faq">
      <Container>
        <SectionHeader>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <SectionSubtitle>Everything you need to know about MetaClean Pro</SectionSubtitle>
        </SectionHeader>
        
        <FaqList>
          {faqItems.map((item, index) => (
            <FaqItem key={index} isOpen={activeIndex === index}>
              <FaqQuestion 
                onClick={() => toggleItem(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
                id={`faq-question-${index}`}
              >
                {item.question}
                <FaqToggleIcon>
                  {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </FaqToggleIcon>
              </FaqQuestion>
              <FaqAnswer 
                id={`faq-content-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                isOpen={activeIndex === index}
              >
                {item.answer}
              </FaqAnswer>
            </FaqItem>
          ))}
        </FaqList>
      </Container>
    </FaqSection>
  );
};

const FaqSection = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const Container = styled.div`
  max-width: 800px;
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
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FaqItem = styled.div<{ isOpen: boolean }>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  box-shadow: ${({ theme, isOpen }) => 
    isOpen ? theme.shadows.lg : theme.shadows.sm};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const FaqQuestion = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 1.5rem 2rem;
  background: none;
  border: none;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 199, 167, 0.5);
  }
`;

const FaqToggleIcon = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.25rem;
  transition: transform 0.3s ease;
`;

const FaqAnswer = styled.div<{ isOpen: boolean }>`
  padding: ${({ isOpen }) => (isOpen ? '0 2rem 2rem' : '0 2rem 0')};
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
  overflow: hidden;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.7;
  
  p {
    margin: 0;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transition: opacity 0.3s ease ${({ isOpen }) => (isOpen ? '0.2s' : '0s')};
  }
`;
