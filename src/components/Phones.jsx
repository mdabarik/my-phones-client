import { useLoaderData } from 'react-router-dom';
import Phone from './Phone';

const Phones = () => {

    const phones = useLoaderData();
    console.log(phones);

    return (
        <div>
            <h2>All Phones here: {phones.length}</h2>
            {
                phones.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
            }
        </div>
    );
};

export default Phones;