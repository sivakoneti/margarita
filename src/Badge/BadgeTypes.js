// @flow

import * as React from 'react';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';

export type BadgeProps = {|
  +children: React.Node,
  +type?: BadgeType,
  +style?: StylePropType,
|};

export type BadgeType =
  | 'primary'
  | 'neutral'
  | 'critical'
  | 'success'
  | 'warning'
  | 'info'
  | 'dark'
  | 'white';
