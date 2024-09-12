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
    setTextColor(theme === 'dark' ? 'text-[#000000]' : 'text-[#ff0000]')
  }, [theme]);  
  
  return (
      <div className='absolute w-full max-w-fit top-[50px] mt-[-50px] left-[55px] right-[10px] bg-white rounded-md border-[1px] border-solid border-black p-[10px]'>
        {notificationsToShow.length === 0 ? (
          <p className={clsx('no-wrap font-semibold font-sans',
            textColor
            )}>Hiện không có thông báo nào! 😐
          </p>
        ) : (
          <ul className='z-[9999] z-index w-full'>
            {notificationsToShow.map((notification) => (
              <li key={notification.id} className='flex flex-row w-full item-center'>
                <span className={clsx('no-wrap w-[95%] font-sans font-semibold',
                textColor
                )}
                >{notification.message}</span>
                <button className='ml-[10px] w-[5%] pr-[10px] font-bold font-sans text-black'
                  onClick={() => dispatch(removeNotification(notification.id))}>X</button>
              </li>
            ))}
          </ul>
        )}
      </div>
  );
};

export default NotificationList;
