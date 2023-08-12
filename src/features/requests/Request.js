import { memo } from 'react';

const Request = ({ request, selectedRequests, setSelectedRequests }) => {

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

    const { _id, subject, email, message, date } = request;

    const isSelected = selectedRequests.includes(_id);

    const toggleSelect = () => {
        if (!isSelected) {
            setSelectedRequests((prevSelected) => [...prevSelected, _id]);
        } else {
            setSelectedRequests((prevSelected) => prevSelected.filter((id) => id !== _id));
        }
    };

    return (
        <tr style={{ borderBottom: '1px solid #ccc' }}>
            <td style={tableStyles.cell}>
                <input type="checkbox" checked={isSelected} onChange={toggleSelect} />
            </td>
            <td style={tableStyles.cell}>{subject}</td>
            <td style={tableStyles.cell}>{email}</td>
            <td style={tableStyles.cell}>{message}</td>
            <td style={{ ...tableStyles.cell, textAlign: 'center' }}>
                {new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </td>
        </tr>
    );
};

const memoizedRequest = memo(Request)

export default memoizedRequest