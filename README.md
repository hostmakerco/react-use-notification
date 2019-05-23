# react-use-notification

>

[![NPM](https://img.shields.io/npm/v/react-use-notification.svg)](https://www.npmjs.com/package/react-use-notification) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-notification
```

## Usage

### withUseNotification
```jsx
import React from 'react'

import { withUseNotification } from 'react-use-notification'
import Button from './Button'

const App = (props) => {
  return (
    <button
      onClick={() => {
        props.notification.success({
          content: 'Success has been added',
          title: 'Success',
        })
      }}
    >
      Show Notification
    </button>
  )
}

export default withUseNotification()(App)

```

### useNotification
```jsx
import React from 'react'
import { useNotification, positions } from 'react-use-notification'

const Button = () => {
  const notification = useNotification()
  return (
    <button
      onClick={() => {
        notification.show({
          content: 'Anyone with access can view your invited visitors',
          title: 'My Good Title',
          duration: 1000000,
          position: positions.BOTTOM_CENTER
        })
      }}
    >
      Notification with use
    </button>
  )
}

export default Button
```

## License

MIT © [cemarguvanli](https://github.com/cemarguvanli)
