import { WH_SCREEN_INNER } from 'styles/util.css';
import { ERROR_TXT } from './ui-text.css';
import { BorderDashedIcon } from '@radix-ui/react-icons';

export function Loading() {
  return (
    <div className={[WH_SCREEN_INNER].join(' ')}>
      <h2 className={ERROR_TXT}>
        <BorderDashedIcon width="1.25rem" height="1.25rem" />
        <br />L O A D I N G
      </h2>
    </div>
  );
}
