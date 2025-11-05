'use client';

import styled from 'styled-components';

const Footer = () => {
  // Next.js exposes the package.json version via this environment variable.
  const appVersion = process.env.NEXT_PUBLIC_APP_VERSION;

  return (
    <StyledFooter>
      {appVersion && <span>v{appVersion}</span>}
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 1rem; /* 16px */
  left: 1rem;   /* 16px */
  font-size: 0.875rem; /* 14px */
  color: #6b7280; /* Tailwind gray-500 */
  z-index: 50;

  /* Adjust color for dark mode */
  html.dark & {
    color: #9ca3af; /* Tailwind gray-400 */
  }
`;

export default Footer;
