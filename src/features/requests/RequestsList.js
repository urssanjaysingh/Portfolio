import Request from './Request'
import { useGetAllRequestsQuery, useDeleteRequestMutation } from './requestsApiSlice';
import { Helmet } from 'react-helmet'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSendLogoutMutation } from '../auth/authApiSlice'
import useTitle from '../../hooks/useTitle';

const RequestsList = () => {

    const tableStyles = {
        table: {
            fontSize: '1rem',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr 1fr',
            color: 'var(--TABLE-COLOR)',
            gap: '0.1em',
        },
        button: {
            padding: '0.25em',
            fontSize: '1.5rem',
            color: 'var(--TABLE-COLOR)',
        },
        thead: {
            position: 'sticky',
            top: 0,
            zIndex: 1,
        },
        th: {
            backgroundColor: 'var(--TABLE-BGCOLOR)',
            textAlign: 'left',
            border: '1px solid var(--TABLE-COLOR)',
            padding: '0.5em',
        },
        cell: {
            backgroundColor: 'var(--TABLE-BGCOLOR)',
            textAlign: 'left',
            border: '1px solid var(--TABLE-COLOR)',
            padding: '0.5em',
        },
        lastCell: {
            display: 'grid',
            placeContent: 'center',
        },
        inactiveCell: {
            backgroundColor: 'var(--INACTIVE)',
        },
    };
    
    useTitle('Requests')

    const [selectedRequests, setSelectedRequests] = useState([]);
    const [deletedRequests, setDeletedRequests] = useState([]);
    const [err, setErr] = useState(null);

    const [deleteRequest, { isLoading: isDeleting }] = useDeleteRequestMutation();

    const { data: requests, isRequestLoading } = useGetAllRequestsQuery(
        {},
        {
            onError: (error) => {
                if (error.response?.status === 404) {
                    // Treat 404 as no requests found
                    setErr(null); // Clear any previous errors
                } else {
                    // Handle other errors
                    setErr('Error fetching requests.');
                }
            },
        }
    );

    const handleDeleteSelected = async () => {
        if (window.confirm('Are you sure you want to delete the selected requests?')) {
            try {
                await Promise.all(
                    selectedRequests.map(async (requestId) => {
                        await deleteRequest(requestId);
                    })
                );
                console.log('Selected requests deleted successfully');
                setSelectedRequests([]);
                setDeletedRequests(selectedRequests);
            } catch (error) {
                console.error('Error deleting selected requests:', error);
            }
        }
    };

    const errorStyle = {
        fontSize: '1.2rem',
        color: 'red',
    };

    const containerStyle = {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const navigate = useNavigate()

    const [sendLogout, {
        isLogoutLoading,
        isSuccess,
        isError,
        error
    }] = useSendLogoutMutation()

    useEffect(() => {
        if (isSuccess) navigate('/login')
    }, [isSuccess, navigate])

    if (isLogoutLoading) return <p>Logging Out...</p>

    if (isError) return <p>Error: {error.data?.message}</p>

    return (
        <main className="page request-page">
            <Helmet>
                <link rel="icon" href="../../img/icons/portfolio.ico" type="image/x-icon" />
                <link rel="stylesheet" href="../../bootstrap/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700&amp;display=swap" />
                <link rel="stylesheet" href="../../fonts/ionicons.min.css" />
                <link rel="stylesheet" href="../../css/pikaday.min.css" />
            </Helmet>
            <div className="container">
                <div className="row justify-content-center align-items-center" style={containerStyle}>
                    <div>
                        {isRequestLoading ? (
                            <div style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold', color: '#555', marginTop: '20px' }}>
                                Loading...
                            </div>
                        ) : err ? (
                            <div style={{ ...errorStyle, textAlign: 'center' }}>{error}</div>
                        ) : requests && requests.length > 0 ? (
                            <>
                                        <table className="request-table" style={tableStyles.table}>
                                            <thead style={tableStyles.thead}>
                                        <tr style={{ borderBottom: '1px solid #ccc', background: '#f1f1f1' }}>
                                            <th style={tableStyles.th}>Select</th>
                                            <th style={tableStyles.th}>Subject</th>
                                            <th style={tableStyles.th}>Email</th>
                                            <th style={tableStyles.th}>Message</th>
                                            <th style={{ ...tableStyles.th, textAlign: 'center' }}>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {requests.map((request) => (
                                            // Render the request only if it's not in deletedRequests
                                            !deletedRequests.includes(request._id) && (
                                                <Request
                                                    key={request._id}
                                                    request={request}
                                                    selectedRequests={selectedRequests}
                                                    setSelectedRequests={setSelectedRequests}
                                                />
                                            )
                                        ))}
                                    </tbody>
                                </table>
                            </>
                        ) : (
                            
                            <p style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold', color: '#555', marginTop: '20px' }}>
                                No requests available.
                            </p>
                        )}
                        {selectedRequests.length > 0 && (
                            <button
                                className="btn btn-danger"
                                style={{ marginTop: '20px' }}
                                onClick={handleDeleteSelected}
                                disabled={isDeleting}
                            >
                                {isDeleting ? 'Deleting...' : 'Delete Selected'}
                            </button>
                        )}
                        <Link title="Logout" onClick={sendLogout} className="btn btn-outline-primary" style={{ display: 'block', marginTop: '200px' }}>
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
            <Helmet>
                <script src="../../bootstrap/js/bootstrap.min.js"></script>
                <script src="../../js/pikaday.min.js"></script>
                <script src="../../js/theme.js"></script>
            </Helmet>
        </main>
    );
};

export default RequestsList;
