import { Center, Box } from '@mantine/core';
import '../Styles/Body.css';
import Cards from './Cards';
import Pin from './Pin';
import Background from './Background';

function Body() {
  return (
    <div className='container'>
    <Background />
         <Pin/>
    
    </div>
  );
}

export default Body