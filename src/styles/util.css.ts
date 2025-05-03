import { style } from '@vanilla-extract/css';

export const ALL_CENTER = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

export const WH_SCREEN = style({
  minHeight: '100dvh',
  width: '100%',
});

export const WH_SCREEN_INNER = style({
  minHeight: 'calc(100dvh - 7rem)',
  width: '100%',
});

export const FLEX_ROW = style({
  display: 'flex',
  flexDirection: 'row',
});

export const FLEX_COL = style({
  display: 'flex',
  flexDirection: 'column',
});

export const JUSTIFY_CENTER = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
});

export const ALIGN_CENTER = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const SPACE_BETWEEN = style({
  justifyContent: 'space-between',
});
