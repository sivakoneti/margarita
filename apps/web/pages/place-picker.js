// @flow

import * as React from 'react';
import { View } from 'react-native';
import { PlacePicker } from '@kiwicom/margarita-core';
import { Layout } from '@kiwicom/margarita-components';

export default () => (
  <Layout>
    <View>
      <PlacePicker />
    </View>
  </Layout>
);