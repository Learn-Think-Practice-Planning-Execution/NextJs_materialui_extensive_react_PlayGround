import CryptoJS from 'crypto-js';

export function userDataFromLocal() {
  try {
    const userDeatils = localStorage.getItem('userDeatils');
    if (userDeatils !== null) {
      const bytes = CryptoJS.AES.decrypt(userDeatils, 'userDeatils');
      const originalUserData = bytes.toString(CryptoJS.enc.Utf8);
      if (originalUserData && originalUserData !== '') {
        return JSON.parse(originalUserData);
      }
      localStorage.removeItem('userDeatils');
      return {};
    }
  } catch (error) {
    console.log('error', error);
  }

  return {};
}
