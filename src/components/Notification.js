import React from 'react'

const Notification = ({showNotification}) => {
  return (
    // eslint-disable-next-line no-template-curly-in-string
    <div className={`notification-container ${showNotification?'show':''}`}>
      <p>You have already entered this letter</p>
    </div>
  )
}

export default Notification