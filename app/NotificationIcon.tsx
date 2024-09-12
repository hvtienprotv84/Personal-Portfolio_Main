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
    <div className='relative pb-[500px]'>
      {/* <button onClick={handleAddNotification}>Add Notification</button> */}
      <button onClick={togglePopup} className='flex flex-row justify-center items-center'> 
        <Image src={notification} alt="" className='w-[20px] h-[20px]'/>
        ({notifications.length})
      </button>
      {isPopupVisible && <NotificationList />}
    </div>
  );
};

export default NotificationIcon;
