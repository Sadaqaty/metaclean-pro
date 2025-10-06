import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';

const PolicyContainer = styled(Container)`
  padding: 4rem 1.5rem;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 2rem 0;
  color: #000000; /* Force black color */
  font-weight: 700;
  line-height: 1.2;
`;

const LastUpdated = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 2rem;
  font-style: italic;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin: 3rem 0 1.5rem;
  color: #000000; /* Force black color */
  font-weight: 600;
  line-height: 1.3;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #4a90e2;
`;

const Paragraph = styled.p`
  margin-bottom: 1.25rem;
`;

const List = styled.ul`
  margin: 1rem 0 1rem 1.5rem;
  list-style-type: disc;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const CookiePolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <PolicyContainer>
      <Title>Cookie Policy</Title>
      <LastUpdated>Last Updated: {currentDate}</LastUpdated>
      
      <Section>
        <Paragraph>
          This Cookie Policy explains how MetaClean Pro ("we," "us," or "our") uses cookies and similar tracking technologies when you visit our website. By using our website, you consent to the use of cookies and similar technologies as described in this policy.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>1. What Are Cookies?</SectionTitle>
        <Paragraph>
          Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the website owners.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. How We Use Cookies</SectionTitle>
        <Paragraph>We use cookies for the following purposes:</Paragraph>
        <List>
          <ListItem>
            <strong>Essential Cookies:</strong> These are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
          </ListItem>
          <ListItem>
            <strong>Analytics Cookies:</strong> We use these to understand how visitors interact with our website by collecting and reporting information anonymously.
          </ListItem>
          <ListItem>
            <strong>Preference Cookies:</strong> These enable the website to remember information that changes the way the website behaves or looks, like your preferred language.
          </ListItem>
          <ListItem>
            <strong>Marketing Cookies:</strong> These are used to track visitors across websites to display relevant advertisements.
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>3. Your Cookie Choices</SectionTitle>
        <Paragraph>
          You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
        </Paragraph>
        <Paragraph>
          Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. Third-Party Cookies</SectionTitle>
        <Paragraph>
          In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on. These cookies may be used when you share information using a social media sharing button or "like" button on our site.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. Changes to This Cookie Policy</SectionTitle>
        <Paragraph>
          We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date at the top of this policy. You are advised to review this Cookie Policy periodically for any changes.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Contact Us</SectionTitle>
        <Paragraph>
          If you have any questions about this Cookie Policy, please contact us at <a href="mailto:hartofstone92@gmail.com">hartofstone92@gmail.com</a>
        </Paragraph>
      </Section>
    </PolicyContainer>
  );
};

export default CookiePolicy;
