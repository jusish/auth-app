import { useLocation } from 'react-router-dom';

const UserGreeting = () => {
    const location = useLocation();
    const { name } = location.state || { name: 'User' };

    return <h1 className="text-center text-3xl mt-10">Hello {name}!</h1>;
};

export default UserGreeting;