import React from 'react'

import { withUseNotification, positions } from 'react-use-notification'
import Button from './Button'

const App = (props) => {
  return (
    <div>
      <Button />
      <button
        onClick={() => {
          props.notification.success({
            content: 'Success has been added',
            title: 'Success',
          })
          props.notification.show({
            content: 'Default has been added',
            title: 'Default',
          })
          props.notification.error({
            content: 'Error has been added',
            title: 'Error',
          })
          props.notification.warning({
            content: 'Warning has been added',
            title: 'Warning',
          })
          props.notification.info({
            content: 'Info has been added',
            title: 'Info',
          })
          props.notification.loading({
            content: 'Loading has been added',
            title: 'Loading...',
            position: positions.TOP_CENTER
          })
        }}
      >
        Show Notification
      </button>
    </div>
  )
}

export default withUseNotification()(App)
