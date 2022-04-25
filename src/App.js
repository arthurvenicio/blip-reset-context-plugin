import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Routes from './routes';

import { withLoadingAsync, showToast } from './services/common-service';
import BlipPortalToastTypes from './constants/blip-portal-toast-types';

const App = () => {
    const { t } = useTranslation();

    useEffect(() => {
        getInitialInfoAsync();
    }, []);

    const getInitialInfoAsync = async () => {
        await withLoadingAsync(async () => {
            showToast({
                type: BlipPortalToastTypes.SUCCESS,
                message: t('success.loaded')
            });
        });
    };

    return <Routes />;
};

export default App;
