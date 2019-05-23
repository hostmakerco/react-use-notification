import React from 'react'
import { useNotification, positions } from 'react-use-notification'

const Button = () => {
  const notification = useNotification()
  return (
    <div>
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
    </div>
  )
}

export default Button
