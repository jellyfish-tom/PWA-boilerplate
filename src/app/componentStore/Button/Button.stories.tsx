import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';

//storybook story obviously :) 

storiesOf('Button', module)
  .add('with label', () => (
    <Button
        label={"test"}
    >
    </Button>
))
