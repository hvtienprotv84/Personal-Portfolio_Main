import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/redux/store';
import { removeNotification } from '../app/redux/notificationsSlice';

const NotificationList: React.FC = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state: RootState) => state.notifications.notifications);

  // Ensure only the first 3 notifications are shown
  const notificationsToShow = notifications.slice(0, 3);

  return (
    <div className='z-[9999]' style={{ position: 'absolute', top: '50px', right: '10px', border: '1px solid black', backgroundColor: 'white', padding: '10px' }}>
      {notificationsToShow.length === 0 ? (
        <p>No notifications</p>
      ) : (
        <ul>
          {notificationsToShow.map((notification) => (
            <li key={notification.id}>
              {notification.message}
              <button onClick={() => dispatch(removeNotification(notification.id))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationList;
