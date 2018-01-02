/* @flow */

import * as utils from './utils';

export const trackPageViewAction = (page: string): utils.Action => ({
  type: utils.ACTION_TRACK_PAGE_VIEW,
  payload: {
    page,
  },
});
