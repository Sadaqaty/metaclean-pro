import React from 'react';
import styled from 'styled-components';

const PrivacyPolicyContainer = styled.div`
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

const PrivacyPolicy: React.FC = () => (
  <PrivacyPolicyContainer>
    <Title>Privacy Policy</Title>
    <p>Last updated: October 6, 2025</p>
    <p>
      MetaClean Pro ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our web application. By accessing or using MetaClean Pro, you agree to the terms of this Privacy Policy.
    </p>

    <SectionTitle>1. Information We Collect</SectionTitle>
    <p>We are dedicated to minimizing the data we collect. We do <b>not</b> require you to create an account or provide personal information to use our core features.</p>
    <List>
      <li><b>Uploaded Files:</b> Files you upload for cleaning are processed in-memory and are <b>never stored</b> on our servers. All EXIF and other metadata are removed locally in your browser or securely on our server, then the cleaned file is provided for download.</li>
      <li><b>Usage Data:</b> We may collect anonymized usage statistics (such as browser type, device type, and general usage patterns) to improve our service. This data does not identify you personally.</li>
      <li><b>Cookies:</b> We use only essential cookies for site functionality. No tracking or advertising cookies are used.</li>
    </List>

    <SectionTitle>2. How We Use Your Information</SectionTitle>
    <List>
      <li>To provide and maintain the MetaClean Pro service.</li>
      <li>To improve, personalize, and expand our service based on anonymized usage data.</li>
      <li>To ensure the security and integrity of our platform.</li>
      <li>To respond to user inquiries and provide support.</li>
    </List>

    <SectionTitle>3. Data Security</SectionTitle>
    <p>
      We implement industry-standard security measures to protect your data. Uploaded files are processed securely and are not retained after processing. All communications are encrypted using HTTPS.
    </p>

    <SectionTitle>4. Data Retention</SectionTitle>
    <p>
      We do not retain your uploaded files or any associated metadata. All files are deleted immediately after processing. Anonymized usage data may be retained for analytics and service improvement.
    </p>

    <SectionTitle>5. Third-Party Services</SectionTitle>
    <p>
      We do not share your data with third parties for marketing or advertising. If we use third-party analytics or infrastructure providers, they are contractually obligated to protect your data and use it only for service delivery.
    </p>

    <SectionTitle>6. Your Rights</SectionTitle>
    <List>
      <li><b>Access:</b> You may request information about the data we hold about you (if any).</li>
      <li><b>Correction:</b> You may request corrections to inaccurate or incomplete data.</li>
      <li><b>Deletion:</b> You may request deletion of your data, but as we do not store personal data, this is generally not applicable.</li>
      <li><b>Objection:</b> You may object to certain data uses, such as analytics, by contacting us.</li>
    </List>

    <SectionTitle>7. Children's Privacy</SectionTitle>
    <p>
      MetaClean Pro is not intended for children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us for removal.
    </p>

    <SectionTitle>8. Changes to This Policy</SectionTitle>
    <p>
      We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
    </p>

    <SectionTitle>9. Contact Us</SectionTitle>
    <p>
      If you have any questions or concerns about this Privacy Policy or your data, please contact us at <a href="mailto:your-email@example.com">your-email@example.com</a>.
    </p>
  </PrivacyPolicyContainer>
);

export default PrivacyPolicy;
