import { showToast as Toast } from '../services/common-service';

export const showToast = (type, title, message) => {
    Toast({
        type,
        title,
        message
    });
};
