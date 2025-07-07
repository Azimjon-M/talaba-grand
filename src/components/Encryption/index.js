import CryptoJS from 'crypto-js';

const Encryption = (data, key) => {
    if (!data || !key) {
        console.error('Encryption uchun data yoki kalit yetishmayapti!');
        return null;
    }

    try {
        const stringifiedData = JSON.stringify(data);
        const encryptedData = CryptoJS.AES.encrypt(
            stringifiedData,
            key
        ).toString();
        return encryptedData;
    } catch (error) {
        console.error('Encryption jarayonida xatolik:', error);
        return null;
    }
};

export default Encryption;
