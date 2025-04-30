import { Logo } from 'components/logo';
import { NAV_WRAPPER } from './nav.css';

export function Nav() {
  return (
    <nav className={NAV_WRAPPER}>
      <Logo />
    </nav>
  );
}
