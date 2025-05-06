import { RendererCSSMap } from '@frfla/react-md-renderer';

export const MARKDOWN_CSS: Partial<RendererCSSMap> = {
  h1: {
    marginBottom: '2rem',
    textAlign: 'center',
    fontSize: '1.5rem',
    lineHeight: '1.3',
    fontWeight: '600',
  },
  h2: {
    marginBottom: '1.5rem',
    fontSize: '1.25rem',
    lineHeight: '1.3',
    fontWeight: '600',
  },
  h3: {
    marginBottom: '1rem',
    lineHeight: '1.3',
    fontSize: 'inherit',
    fontWeight: '600',
  },
  h4: { fontWeight: '600' },
  h5: { fontWeight: '600' },
  h6: {},
  hr: {},
  p: { marginBottom: '1rem', lineHeight: '1.66', fontSize: '1.15rem' },
  pre: {
    lineHeight: '1.66',
    fontSize: '0.85rem',
    fontFamily: 'JetBrains Mono',
    paddingInline: '0.5rem',
    paddingBlock: '0.75rem ',
    overflowX: 'auto',
    backgroundColor: '#fafafa',
    borderRadius: '0.5rem',
    marginBottom: '1.25rem',
    '& > code': {
      all: 'inherit',
    },
  },
  code: {
    fontSize: '0.75rem',
    fontWeight: 500,
    verticalAlign: 'middle',
    padding: '0.1rem 0.4rem 0.1rem 0.4rem',
    marginInline: '0.1rem',
    backgroundColor: '#f5f5f5',
    borderRadius: '0.35rem',
    color: 'hotpink',
    fontFamily: 'JetBrains Mono',
  },
  a: {
    color: '#888',
    textDecoration: 'underline',
    textUnderlineOffset: '0.25rem',
    '&:hover': {
      color: 'black',
    },
  },
  blockquote: {
    marginBottom: '3rem',
  },
  checkbox: {},
  img: {
    display: 'block',
    marginBottom: '3rem',
  },
  ul: {
    paddingLeft: '1.21rem',
    marginBottom: '2rem',
    '& li::marker': {
      fontFeatureSettings: '"calt" "case"',
      fontFamily: '42dot sans',
    },
  },
  ol: {
    marginBottom: '2rem',
    paddingLeft: '1.4rem',
    '& li::marker': {
      fontFeatureSettings: '"calt" "case"',
      fontFamily: '"42dot sans"',
    },
  },
  li: {
    padding: 0,
    margin: 0,
    fontSize: 'inherit',
    lineHeight: '1.66',
    fontFamily: '"42dot sans"',
  },
  table: {
    marginBottom: '3rem',
  },
  typography: {
    strike: undefined,
    strong: {
      fontWeight: '600',
    },
    italic: undefined,
  },
};
