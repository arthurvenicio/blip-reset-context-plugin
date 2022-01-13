/* eslint-disable no-bitwise */
import { IframeMessageProxy } from 'iframe-message-proxy';
import IMPContainer from '../constants/iframe-message-proxy-container';
import _config from '../config/appsettings.json';

const ACTION_SEND_COMMAND = _config.iframe.sendCommandAction;
const DESTINATION_MESSAGING_HUB = _config.iframe.messagingHub;

const getApplicationDataAsync = async (fullIdentity = null) => {
    const { response: application } = await IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.GET_APPLICATION,
        content: fullIdentity
    });
    return application;
};

const getCurrentLanguageAsync = async () => {
    const { response } = await IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.GET_CURRENT_LANGUAGE
    });

    return response;
};

const createGuid = () => {
    const crypto = window.crypto || window.msCrypto;
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
    );
};

const getContact = async (id) => {
    const response = await IframeMessageProxy.sendMessage({
        action: ACTION_SEND_COMMAND,
        content: {
            destination: DESTINATION_MESSAGING_HUB,
            command: {
                method: 'get',
                uri: `/contacts/${id}`
            }
        }
    });

    return response;
};

const getContext = async (identity) => {
    try {
        const {
            response: { items }
        } = await IframeMessageProxy.sendMessage({
            action: ACTION_SEND_COMMAND,
            content: {
                destination: DESTINATION_MESSAGING_HUB,
                command: {
                    to: 'postmaster@msging.net',
                    method: 'get',
                    uri: `/contexts/${identity}`
                }
            }
        });

        return items;
    } catch (error) {
        return null;
    }
};

const deleteContext = async (identity, extra) => {
    const response = await IframeMessageProxy.sendMessage({
        action: ACTION_SEND_COMMAND,
        content: {
            destination: DESTINATION_MESSAGING_HUB,
            command: {
                to: 'postmaster@msging.net',
                method: 'delete',
                uri: `/contexts/${identity}/${extra}`
            }
        }
    });

    return response;
};

const deleteExtra = async (user) => {
    const response = await IframeMessageProxy.sendMessage({
        action: ACTION_SEND_COMMAND,
        content: {
            destination: DESTINATION_MESSAGING_HUB,
            command: {
                to: 'postmaster@msging.net',
                method: 'set',
                type: 'application/vnd.lime.contact+json',
                uri: '/contacts',
                resource: user
            }
        }
    });

    return response;
};

const resetUser = async (id) => {
    const { response } = await getContact(id);
    const newUser = { ...response, extras: {} };

    const context = await getContext(id);

    if (context !== null) {
        // eslint-disable-next-line array-callback-return
        context.map((c) => {
            deleteContext(id, c);
        });
    }

    try {
        await deleteExtra(newUser);
    } catch (error) {
        throw new Error(error);
    }

    return newUser;
};

export {
    getApplicationDataAsync,
    getCurrentLanguageAsync,
    createGuid,
    getContact,
    resetUser,
    deleteContext,
    deleteExtra,
    getContext
};
