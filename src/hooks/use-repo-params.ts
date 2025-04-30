import { useNavigate, useParams } from 'react-router';
import { useMemo, useEffect } from 'react';
import { REPO_NAMES } from 'store/constants/meta';

export function useRepoParams() {
  const { title = 'docs', repo = '' } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!REPO_NAMES.includes(repo as (typeof REPO_NAMES)[number])) navigate('/');
  }, [repo, navigate]);

  return useMemo(
    () => ({
      title,
      repo: repo as (typeof REPO_NAMES)[number],
    }),
    [title, repo]
  );
}
