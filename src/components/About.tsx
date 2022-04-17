import type { FC } from 'react';
import { useLocation } from 'react-router-dom';

const About: FC = (props) => {
  console.log('mafia2::About::props:: ', props);
  const location = useLocation();
  console.log('location::', location)
  return (<div>About</div>);
}

export default About;
