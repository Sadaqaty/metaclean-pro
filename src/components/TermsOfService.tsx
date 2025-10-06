import React from 'react';
import styled from 'styled-components';

const TermsContainer = styled.div`
  max-width: 900px;
  margin: 4rem auto;
  padding: 2rem;
  background: #fff;
  color: #222;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  font-size: 1.1rem;
  line-height: 1.7;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  margin-left: 1.5rem;
`;

const TermsOfService: React.FC = () => (
  <TermsContainer>
    <Title>Terms of Service</Title>
    <p>Last updated: October 6, 2025</p>
    <p>
      Welcome to MetaClean Pro ("we", "us", or "our"). By accessing or using our web application, you agree to be bound by these Terms of Service ("Terms"). Please read them carefully. If you do not agree to these Terms, do not use our service.
    </p>

    <SectionTitle>1. Use of Service</SectionTitle>
    <List>
      <li>You must be at least 13 years old to use MetaClean Pro.</li>
      <li>You agree to use the service only for lawful purposes and in accordance with these Terms.</li>
      <li>You are responsible for any content you upload, process, or share using MetaClean Pro.</li>
    </List>

    <SectionTitle>2. User Content</SectionTitle>
    <List>
      <li>You retain all rights to files and content you upload.</li>
      <li>We do not claim ownership of your files. Uploaded files are processed in-memory and are not stored on our servers after processing.</li>
      <li>You represent that you have the necessary rights to upload and process any files you submit.</li>
    </List>

    <SectionTitle>3. Prohibited Conduct</SectionTitle>
    <List>
      <li>Do not use MetaClean Pro to upload or process content that is unlawful, harmful, abusive, harassing, defamatory, obscene, or otherwise objectionable.</li>
      <li>Do not attempt to gain unauthorized access to our systems or interfere with the operation of the service.</li>
      <li>Do not use automated means to access or use the service (e.g., bots, scrapers) without our prior written consent.</li>
    </List>

    <SectionTitle>4. Intellectual Property</SectionTitle>
    <p>
      All content, features, and functionality of MetaClean Pro (excluding user-uploaded files) are the exclusive property of MetaClean Pro and its licensors. You may not copy, modify, distribute, or create derivative works based on our service without our express permission.
    </p>

    <SectionTitle>5. Disclaimer of Warranties</SectionTitle>
    <p>
      MetaClean Pro is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, express or implied, regarding the reliability, accuracy, or availability of the service. Your use of the service is at your own risk.
    </p>

    <SectionTitle>6. Limitation of Liability</SectionTitle>
    <p>
      To the fullest extent permitted by law, MetaClean Pro and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising out of or related to your use of the service.
    </p>

    <SectionTitle>7. Indemnification</SectionTitle>
    <p>
      You agree to indemnify and hold harmless MetaClean Pro, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, liabilities, and expenses arising from your use of the service or violation of these Terms.
    </p>

    <SectionTitle>8. Modifications to Service</SectionTitle>
    <p>
      We reserve the right to modify, suspend, or discontinue the service at any time without notice. We are not liable for any modification, suspension, or discontinuance of the service.
    </p>

    <SectionTitle>9. Changes to Terms</SectionTitle>
    <p>
      We may update these Terms from time to time. Changes will be posted on this page with an updated revision date. Your continued use of the service after changes constitutes acceptance of the new Terms.
    </p>

    <SectionTitle>10. Governing Law</SectionTitle>
    <p>
      These Terms are governed by and construed in accordance with the laws of your jurisdiction, without regard to its conflict of law principles.
    </p>

    <SectionTitle>11. Contact</SectionTitle>
    <p>
      If you have any questions about these Terms, please contact us at <a href="mailto:hartofstone92@gmail.com">hartofstone92@gmail.com</a>.
    </p>
  </TermsContainer>
);

export default TermsOfService;
