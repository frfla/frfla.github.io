import { style } from '@vanilla-extract/css';

export const CARD_WRAPPER = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '1rem',
  border: 'none',
  backgroundColor: '#fafafa',
});

export const INFO = style({
  padding: '1.15rem 1rem 1.25rem 1rem',
  gap: '0.5rem',
});

export const TITLE = style({
  textTransform: 'capitalize',
  fontWeight: 700,
  fontSize: '1.35rem',
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
  gap: '0.2rem',
  padding: '0.5rem 1rem 0.5rem 1rem',
  textDecoration: 'none',
  selectors: {
    '&:hover': {
      backgroundColor: '#efefef',
    },
  },
});

export const LINK_RIGHT = style([
  LINK_BASE,
  {
    borderBottomRightRadius: '1rem',
  },
]);

export const LINK_LEFT = style([
  LINK_BASE,
  {
    borderBottomLeftRadius: '1rem',
  },
]);
