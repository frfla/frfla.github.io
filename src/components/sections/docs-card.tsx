import { GitHubLogoIcon, ReaderIcon } from '@radix-ui/react-icons';
import { CAPTION, CARD_WRAPPER, INFO, LINK_LEFT, LINK_RIGHT, TITLE } from './docs-card.css';
import { Link } from 'react-router';
import { ALIGN_CENTER, FLEX_COL, JUSTIFY_CENTER, SPACE_BETWEEN } from 'styles/util.css';

export function DocsCard({ title, caption }: { title: string; caption: string }) {
  const href = `https://github.com/frfla/${title}`;

  return (
    <div className={CARD_WRAPPER}>
      <div className={[FLEX_COL, INFO].join(' ')}>
        <h2 className={TITLE}>{title.replace(/-/g, ' ')}</h2>
        <p className={CAPTION}>{caption}</p>
        {/* <img src={undefined} className={PROJ_LOGO} alt={title} /> */}
      </div>
      <div className={[JUSTIFY_CENTER, SPACE_BETWEEN].join(' ')}>
        <Link to={`/${title}/docs`} className={[ALIGN_CENTER, LINK_LEFT].join(' ')}>
          <ReaderIcon width="1.2rem" height="1.2rem" />
          <span>DOCS</span>
        </Link>
        <a href={href} target="_blank" className={[ALIGN_CENTER, LINK_RIGHT].join(' ')}>
          <GitHubLogoIcon width="1.2rem" height="1.2rem" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
}
