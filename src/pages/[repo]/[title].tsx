import { MD } from 'components/md';
import { useRepoParams } from 'hooks/use-repo-params';
import { useFetchMarkdown } from 'hooks/use-swr-markdown';
import { ALL_CENTER } from 'styles/util.css';

export default function Post() {
  const { title, repo } = useRepoParams();
  const { data: md = '# 로딩 중...', isLoading, error } = useFetchMarkdown(repo, title);

  if (error) return <div className={ALL_CENTER}>No Document!</div>;
  if (isLoading) return <div className={ALL_CENTER}>Loading ...</div>;
  return <MD markdownText={md || '# Loading'} />;
}
