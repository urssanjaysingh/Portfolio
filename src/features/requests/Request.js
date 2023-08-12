import { memo } from 'react';

const Request = ({ request, selectedRequests, setSelectedRequests }) => {
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
        <tr style={rowStyle}>
            <td style={cellStyle}>
                <input type="checkbox" checked={isSelected} onChange={toggleSelect} />
            </td>
            <td style={cellStyle}>{subject}</td>
            <td style={cellStyle}>{email}</td>
            <td style={cellStyle}>{message}</td>
            <td style={dateCellStyle}>
                {new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </td>
        </tr>
    );
};

const rowStyle = {
    borderBottom: '1px solid #ccc',
};

const cellStyle = {
    padding: '8px',
};

const dateCellStyle = {
    ...cellStyle,
    textAlign: 'center',
};

const memoizedRequest = memo(Request);

export default memoizedRequest;
