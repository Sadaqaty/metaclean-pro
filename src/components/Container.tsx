import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
