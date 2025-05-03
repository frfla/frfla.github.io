import { No_Docs } from 'components/sections/404';
import { MD } from 'components/md';
import { Loading } from 'components/sections/loading';
import { useRepoParams } from 'hooks/use-repo-params';
import { useFetchMarkdown } from 'hooks/use-swr-markdown';

export default function Post() {
  const { title, repo } = useRepoParams();
  const { data: md, isLoading, error } = useFetchMarkdown(repo, title);

  if (error) return <No_Docs />;
  if (isLoading) return <Loading />;
  return <MD markdownText={md || ''} />;
}
