import { DocsCard } from 'components/sections/docs-card';
import { PROJECT_GRID } from './home.css';
import { CAPTIONS, REPO_NAMES } from 'store/constants/meta';

export default function Home() {
  return (
    <div>
      <ul className={PROJECT_GRID}>
        {REPO_NAMES.map(n => {
          if (n === 'docs') return null;
          return <DocsCard title={n} caption={CAPTIONS[n]} />;
        })}
      </ul>
    </div>
  );
}
