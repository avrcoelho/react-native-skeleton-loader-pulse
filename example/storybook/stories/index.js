import React from 'react';

import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';

import { SkeletonLayout, SkeletonItem } from '../../src/App';

storiesOf('Skeleton', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Item', () => <SkeletonItem />)
  .add('Layout', () => (
    <SkeletonLayout
      align="center"
      items={[
        {
          height: 100,
          width: 100,
          borderRadius: 50,
          marginBottom: 15,
        },
        {
          height: 25,
          width: 250,
          marginBottom: 10,
        },
        {
          height: 10,
          width: 270,
        },
        {
          height: 10,
          width: 300,
        },
        {
          height: 10,
          width: 280,
        },
      ]}
    />
  ));
