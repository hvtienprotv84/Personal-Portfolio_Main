import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/redux/store';
import { removeNotification } from '../app/redux/notificationsSlice';
import "../app/globals.css"
import clsx from 'clsx';
import { useTheme } from 'next-themes';

const NotificationList: React.FC = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state: RootState) => state.notifications.notifications);

  // Ensure only the first 3 notifications are shown
  const notificationsToShow = notifications.slice(0, 3);

  const { theme } = useTheme(); 
  const [textColor, setTextColor] = useState('');

  useEffect(() => {
    // Cập nhật màu sắc dựa trên theme
    setTextColor(theme === 'dark' ? 'text-[#000000]' : 'text-[#ffb800]')
  }, [theme]);  
  
  return (
      <div className='absolute w-full max-w-[300px] top-[50px] mt-[-50px] left-[50px] right-[10px] bg-white rounded-md border-[1px] border-solid border-black p-[10px]'>
        {notificationsToShow.length === 0 ? (
          <p className='no-wrap'>No notifications</p>
        ) : (
          <ul className='z-[9999] z-index w-full'>
            {notificationsToShow.map((notification) => (
              <li key={notification.id} className='flex flex-row w-full item-center'>
                <span className={clsx('no-wrap',
                textColor
                )}
                >{notification.message}</span>
                <button className={clsx('ml-[10px]', 
                textColor
                )} 
                onClick={() => dispatch(removeNotification(notification.id))}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
  );
};

export default NotificationList;
