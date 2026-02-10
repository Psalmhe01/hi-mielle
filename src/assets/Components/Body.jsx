import { Center, Box } from '@mantine/core';
import '../Styles/Body.css';
import Cards from './Cards';
import Pin from './Pin';

function Body() {
  return (
    <div className='container'>
    
    <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
         <Pin/>
    </Center>
    </div>
  );
}

export default Body