import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/redux/store';
import { addNotification } from '../app/redux/notificationsSlice';
import NotificationList from './NotificationList';
import notification from '../public/icon-notification.png';
import Image from "next/image";

const NotificationIcon: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const dispatch = useDispatch();
  const notifications = useSelector((state: RootState) => state.notifications.notifications);

//   const handleAddNotification = () => {
//     dispatch(addNotification({ id: Date.now(), message: 'New notification' }));
//   };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className='relative z-[9999]'>
      {/* <button onClick={handleAddNotification}>Add Notification</button> */}
      <button onClick={togglePopup} className='flex flex-row justify-center items-center'> 
          <div className='flex items-center justify-center absolute mt-[-27px] ml-[22px]'>
            <div className='bg-red-600 rounded-full w-[25px]'>
              <span className='text-[14px] font-bold font-sans'>{notifications.length}</span>
            </div>
          </div>
        <Image src={notification} alt="" className='w-[50px] h-[50px]'/>
      </button>
      {isPopupVisible && <NotificationList />}
    </div>
  );
};

export default NotificationIcon;
