import { store } from '../../app/store'
import { requestsApiSlice } from '../requests/requestsApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {
    useEffect(() => {
        store.dispatch(requestsApiSlice.util.prefetch('getAllRequests', 'requestsList', { force: true }))
    }, [])

    return <Outlet />
}

export default Prefetch
