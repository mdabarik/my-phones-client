import { Link } from 'react-router-dom';

const Phone = ({phone}) => {
    return (
        <div>
            <h1>{phone.name}</h1>
            <Link to={`/phone/${phone.id}`}>
                <button>Details</button>
            </Link>
        </div>
    );
};

export default Phone;