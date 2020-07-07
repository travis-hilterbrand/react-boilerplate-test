/**
 *
 * Asynchronously loads the component for ListUsers
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ListUsers = lazyLoad(
  () => import('./index'),
  module => module.ListUsers,
);
