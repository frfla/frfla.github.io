import { REPO_NAMES, REPO_URL } from 'store/constants/meta';

export type DocsMap = Record<(typeof REPO_NAMES)[number], string[]>;

export const getUrl = (name: (typeof REPO_NAMES)[number], path: string) => `${REPO_URL[name]}/${encodeURI(path)}`;

export const titles: string[] = [];

export const fetchDocsMap: () => Promise<DocsMap> = () =>
  fetch(`${REPO_URL.docs}/_docs.map.json`).then(res => res.json());
