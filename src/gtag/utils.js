/* @flow */

export const ACTION_TRACK_PAGE_VIEW = '@BUCKET/GTAG/TRACK_PAGE_VIEW';

export type Action =
  | { type: '@BUCKET/GTAG/TRACK_PAGE_VIEW'; payload: { page: string } };
