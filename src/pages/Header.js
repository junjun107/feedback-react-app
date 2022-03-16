import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <Link
          to={{
            pathname: '/',
          }}
        >
          <h1 style={{ color: '#FF5DA2' }}>Feedback </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
