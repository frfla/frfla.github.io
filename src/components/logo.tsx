import { ALIGN_CENTER } from 'styles/util.css';
import { LOGO_IMG } from './logo.css';
import { NavLink } from 'react-router';

export function Logo() {
  return (
    <h1 className={ALIGN_CENTER}>
      <NavLink to="/">
        <img src="/frfla.png" alt="hello" className={LOGO_IMG} />
      </NavLink>
    </h1>
  );
}
