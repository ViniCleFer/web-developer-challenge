import { CompanyName, HeaderContainer, Logo } from './styles';

import logoIgnite from '@/assets/logo.png';

export function Header() {
  return (
    <HeaderContainer>
      <Logo src={logoIgnite} alt='logo-of-build-box' />
      <CompanyName>Web Challenge</CompanyName>
    </HeaderContainer>
  );
}
