import { style } from '@vanilla-extract/css';

export const CARD_WRAPPER = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '0.5rem',
  border: 'none',
  backgroundColor: '#fafafa',
});

export const INFO = style({
  padding: '1.5rem 1.25rem 2.5rem 1.25rem',
  gap: '0.3rem',
  justifyContent: 'flex-start',
});

export const TITLE = style({
  textTransform: 'uppercase',
  fontWeight: 800,
  fontSize: '1.15rem',
});

export const CAPTION = style({
  fontWeight: 500,
  fontSize: '0.85rem',
  color: '#999',
  lineHeight: 1.4,
});

export const PROJ_LOGO = style({
  width: '4rem',
  height: 'auto',
});

export const FLEX = style({
  display: 'flex',
  justifyContent: 'space-between',
});

const LINK_BASE = style({
  display: 'flex',
  width: '100%',
  borderTop: '1px solid #efefef',
  padding: '0.75rem 1rem 0.75rem 1rem',
  textDecoration: 'none',
  fontSize: '0.85rem',
  fontWeight: 600,
  selectors: {
    '&:hover': {
      backgroundColor: '#efefef',
    },
  },
});

export const LINK_RIGHT = style([
  LINK_BASE,
  {
    borderLeft: '1px solid #efefef',
    gap: '0.4rem',
    borderBottomRightRadius: '1rem',
  },
]);

export const LINK_LEFT = style([
  LINK_BASE,
  {
    gap: '0.3rem',
    borderBottomLeftRadius: '1rem',
  },
]);
