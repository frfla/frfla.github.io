import { useMemo } from 'react';
import { REPO_NAMES } from 'store/constants/meta';
import useSWR from 'swr';
import { fetchDocsMap, getUrl } from 'utils/fetch-posts';

const fetcher = (url: string) => fetch(url).then(r => (r.ok ? r.text() : Promise.reject(r)));

export function useFetchMarkdown(repo: (typeof REPO_NAMES)[number], title: string) {
  const { data: docs, error: docsErr } = useSWR('docsMap', fetchDocsMap);

  const matchFile = useMemo(() => {
    if (!docs) return '';
    const list = docs[repo] ?? [];
    return title === 'docs'
      ? list.find(f => f === 'README.ko.md' || f === 'README.md') ?? ''
      : list.find(f => f.includes(decodeURIComponent(title))) ?? '';
  }, [docs, repo, title]);

  const fileUrl = matchFile ? getUrl(repo, matchFile) : '';
  const result = useSWR(fileUrl, fileUrl ? () => fetcher(fileUrl) : null);

  return { ...result, fileUrl, docsErr };
}
