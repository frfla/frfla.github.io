import { WH_SCREEN_INNER } from 'styles/util.css';
import { ERROR_TXT } from './ui-text.css';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export function No_Docs() {
  return (
    <div className={[WH_SCREEN_INNER].join(' ')}>
      <h2 className={ERROR_TXT}>
        <ExclamationTriangleIcon width="1.25rem" height="1.25rem" />
        <br />
        Can't Found Document
      </h2>
    </div>
  );
}
