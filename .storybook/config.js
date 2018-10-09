import { configure, addDecorator  } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { setOptions } from '@storybook/addon-options'

setOptions({
  name: 'Tracker component store',
  goFullScreen: false,
  showAddonsPanel: true,
  showSearchBox: false,
  addonPanelInRight: false,
  sortStoriesByKind: true,
//   hierarchyRootSeparator: /\|/,
  enableShortcuts: true,
});

const req = require.context('../src/app/componentStore', true, /\.stories\.tsx?$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(withKnobs);

configure(loadStories, module);