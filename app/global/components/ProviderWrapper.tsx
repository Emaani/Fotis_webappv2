"use client";

import { store } from '@/global/state/store';
import { Provider } from 'react-redux';
import ToastWrapper from './ToastWrapper';

const ProviderWrapper = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <Provider store={store}>
            <>
                <ToastWrapper />
                {children}
            </>
        </Provider>
    )
}

export default ProviderWrapper;