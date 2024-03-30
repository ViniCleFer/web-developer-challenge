import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['gray-700']};
  width: 100%;
  padding: 2rem;
  flex-direction: column;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const Logo = styled.img`
  width: 100px;
  height: 30px;
`;

export const CompanyName = styled.span`
  font-weight: 300;
  font-size: 0.75rem;
  color: ${(props) => props.theme['gray-100']};
  text-transform: uppercase;
`;
