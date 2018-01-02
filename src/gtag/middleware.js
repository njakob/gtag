/* @flow */

import { type Middleware, type Dispatch } from 'redux';
import * as utils from './utils';
import loadScript from './loadScript';

type Options = {
  gaTrackingID: string;
};

export default function middleware(options: Options): Middleware<*, *, *> {
  const {
    gaTrackingID,
  } = options;

  const gtag = loadScript();

  return () => (next: Dispatch<*>) => (action: utils.Action) => {
    switch (action.type) {
      case utils.ACTION_TRACK_PAGE_VIEW:
        gtag('event', 'page_view', {
          send_to: gaTrackingID,
        });
        return next(action);
      default:
        return next(action);
    }
  };
}
