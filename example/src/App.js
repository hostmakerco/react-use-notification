import React, { Component } from 'react'

import { useNotification, positions } from 'react-use-notification'
import Button from './Button'

const App = () => {
  const notification = useNotification();

  const showSuccess = (options = {}) => {
    notification.success({
      content: 'Success has been added',
      title: 'Success',
      ...options,
    })
  }
  const showDefault = (options = {}) => {
    notification.show({
      content: 'Default has been added',
      title: 'Default',
      ...options,
    })
  }
  const showError = (options = {}) => {
    notification.error({
      content: 'Error has been added',
      title: 'Error',
      ...options,
    })
  }
  const showWarning = (options = {}) => {
    notification.warning({
      content: 'Warning has been added',
      title: 'Warning',
      ...options,
    })
  }
  const showInfo = (options = {}) => {
    notification.info({
      content: 'Info has been added',
      title: 'Info',
      ...options,
    })
  }
  const showLoading = () => {
    const notified = notification.loading({
      content: 'Loading...',
    })

    setTimeout(() => {
      notification.remove(notified)
    }, 10000)
  }

  return (
    <React.Fragment>
      <div>
        <Button />
        <h1>Notification Types</h1>
        <button onClick={() => showDefault()} className="default">
          Show Default
        </button>
        <button onClick={() => showInfo()} className="info">
          Show Info
        </button>
        <button onClick={() => showError()} className="error">
          Show Error
        </button>
        <button onClick={() => showSuccess()} className="success">
          Show Success
        </button>
        <button onClick={() => showWarning()} className="warning">
          Show Warning
        </button>
        <button onClick={() => showLoading()} className="loading">
          Show Loading
        </button>
      </div>
      <div>
        <h1>Positions</h1>
        <button
          onClick={() => { showDefault({ position: positions.BOTTOM_CENTER }) }}
          className="default"
        >
          Bottom Center
        </button>
        <button
          onClick={() => { showInfo({ position: positions.TOP_CENTER }) }}
          className="info"
        >
          Top Center
        </button>
        <button
          onClick={() => { showError({ position: positions.TOP_RIGHT }) }}
          className="error"
        >
          Top Right
        </button>
        <button
          onClick={() => { showSuccess({ position: positions.TOP_LEFT }) }}
          className="success"
        >
          Top Left
        </button>
      </div>
      <div>
        <h1>Events (onOpen, onClose)</h1>
        <button
          onClick={() => showDefault({ onClose: () => console.log('on close') })}
          className="default"
        >
          On Close
        </button>
        <button
          onClick={() => showDefault({ onOpen: () => console.log('on open') })}
          className="default"
        >
          On Open
        </button>
      </div>
    </React.Fragment>
  )
}

export default App
