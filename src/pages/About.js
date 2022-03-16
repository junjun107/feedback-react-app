import { Link } from 'react-router-dom';
import Card from '../shared/Card';

const About = () => {
  return (
    <Card>
      <p>This is a web app for rewviews and feedbacks</p>
      <p>Version 1.1.0</p>
      <Link to='/'>Home</Link>
    </Card>
  );
};

export default About;
