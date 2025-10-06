import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';

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
  margin-bottom: 0.75rem;
`;

const GDPR = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <PolicyContainer>
      <Title>GDPR Compliance</Title>
      <LastUpdated>Last Updated: {currentDate}</LastUpdated>
      
      <Section>
        <Paragraph>
          At MetaClean Pro, we are committed to protecting your privacy and ensuring the security of your personal data. This GDPR Compliance page outlines how we comply with the General Data Protection Regulation (GDPR) (EU) 2016/679, a regulation in EU law on data protection and privacy.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>1. Data Controller</SectionTitle>
        <Paragraph>
          MetaClean Pro is the data controller responsible for your personal data. If you have any questions about this GDPR Compliance notice or our data protection practices, please contact our Data Protection Officer at <a href="mailto:hartofstone92@gmail.com">hartofstone92@gmail.com</a>
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. Lawful Basis for Processing</SectionTitle>
        <Paragraph>We process your personal data on the following legal bases:</Paragraph>
        <List>
          <ListItem>
            <strong>Consent:</strong> When you have given us clear consent to process your personal data for a specific purpose.
          </ListItem>
          <ListItem>
            <strong>Contract:</strong> When the processing is necessary for a contract we have with you, or because you have asked us to take specific steps before entering into a contract.
          </ListItem>
          <ListItem>
            <strong>Legal Obligation:</strong> When the processing is necessary for us to comply with the law.
          </ListItem>
          <ListItem>
            <strong>Legitimate Interests:</strong> When the processing is necessary for our legitimate interests or the legitimate interests of a third party, unless there is a good reason to protect your personal data which overrides those legitimate interests.
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>3. Your Rights Under GDPR</SectionTitle>
        <Paragraph>Under the GDPR, you have the following rights:</Paragraph>
        <List>
          <ListItem>
            <strong>Right to be informed:</strong> You have the right to be informed about the collection and use of your personal data.
          </ListItem>
          <ListItem>
            <strong>Right of access:</strong> You have the right to access your personal data and supplementary information.
          </ListItem>
          <ListItem>
            <strong>Right to rectification:</strong> You have the right to have inaccurate personal data rectified or completed if it is incomplete.
          </ListItem>
          <ListItem>
            <strong>Right to erasure (right to be forgotten):</strong> You have the right to have personal data erased in certain circumstances.
          </ListItem>
          <ListItem>
            <strong>Right to restrict processing:</strong> You have the right to request the restriction or suppression of your personal data.
          </ListItem>
          <ListItem>
            <strong>Right to data portability:</strong> You have the right to obtain and reuse your personal data for your own purposes across different services.
          </ListItem>
          <ListItem>
            <strong>Right to object:</strong> You have the right to object to the processing of your personal data in certain circumstances.
          </ListItem>
          <ListItem>
            <strong>Rights related to automated decision making including profiling:</strong> You have the right not to be subject to a decision based solely on automated processing.
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>4. Data We Collect</SectionTitle>
        <Paragraph>We may collect and process the following categories of personal data:</Paragraph>
        <List>
          <ListItem>Identity Data (name, username, or similar identifier)</ListItem>
          <ListItem>Contact Data (email address, phone number)</ListItem>
          <ListItem>Technical Data (IP address, browser type, time zone, etc.)</ListItem>
          <ListItem>Usage Data (how you use our website and services)</ListItem>
          <ListItem>Marketing and Communications Data (your preferences in receiving marketing)</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>5. Data Security</SectionTitle>
        <Paragraph>
          We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Data Retention</SectionTitle>
        <Paragraph>
          We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. International Transfers</SectionTitle>
        <Paragraph>
          We may transfer, store, and process your personal data in countries other than your own. If we transfer your personal data outside the European Economic Area (EEA), we ensure a similar degree of protection is afforded to it by ensuring appropriate safeguards are implemented.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>8. Changes to This GDPR Compliance Notice</SectionTitle>
        <Paragraph>
          We may update this GDPR Compliance notice from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>9. Contact Us</SectionTitle>
        <Paragraph>
          If you have any questions about this GDPR Compliance notice or our privacy practices, please contact our Data Protection Officer at <a href="mailto:hartofstone92@gmail.com">hartofstone92@gmail.com</a> or by mail at:
        </Paragraph>
        <address style={{ fontStyle: 'normal', margin: '1rem 0' }}>
          Data Protection Officer<br />
          FixAre Studio<br />
        </address>
      </Section>
    </PolicyContainer>
  );
};

export default GDPR;
