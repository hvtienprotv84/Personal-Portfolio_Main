import { useEffect, useState } from 'react';
import { Text } from '../Text';

export const OnlineOffline = () => {
    const [status, setStatus] = useState('Offline');

    useEffect(() => {
        const checkStatus = () => {
            const now = new Date();
            const hours = now.getHours();

            const startHour = 8; // 8 giờ sáng
            const endHour = 21;  // 9 giờ tối (21 giờ)

            if (hours >= startHour && hours < endHour) {
                setStatus('🟢Online');
            } else {
                setStatus('⚪Offline');
            }
        };

        // Kiểm tra trạng thái khi component được gắn vào DOM
        checkStatus();

        // Thiết lập kiểm tra trạng thái lại sau mỗi phút (60000 ms)
        const interval = setInterval(checkStatus, 60000);

        // Dọn dẹp interval khi component bị hủy
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {/* <p>Status: {status}</p> */}
            <p>
                <Text tid="welcomeDescription" />
                <span>: {status}</span>
            </p>
        </div>
    );
};

export default OnlineOffline;
