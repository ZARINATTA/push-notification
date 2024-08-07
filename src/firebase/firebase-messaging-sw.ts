import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export async function requestPermission() {
  alert('권한 요청 중...');

  const permission = await Notification.requestPermission();
  if (permission === 'denied') {
    alert('알림 권한 허용 안됨');
    return;
  }

  alert('알림 권한이 허용됨');

  try {
    const token = await getToken(messaging, {
      vapidKey: process.env.REACT_APP_VAPID_KEY,
    });

    if (token) {
      window.navigator.clipboard.writeText(token);

      alert(token);
    } else {
      alert('Can not get Token');
    }

    onMessage(messaging, (payload) => {
      alert('안녕하세용');
      // ...
    });
  } catch (error) {
    alert(error);
  }
}
