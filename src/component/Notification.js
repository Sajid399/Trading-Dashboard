import React, { useState } from 'react';

const Notification = () => {
  // Use a more descriptive variable name and destructuring for better readability
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // Toggle the notification state when the notification area is clicked
  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <div className="ms-1">
      <div className="notifications" onClick={toggleNotification}>
        <div>
          This is the Notification Page
          <p>
            This is the Notification Page
            </p>
            <p>
            This is the Notification Page
            </p>
            <p>
            This is the Notification Page
            </p>
         

        </div>
      </div>
    </div>
  );
}

export default Notification;
