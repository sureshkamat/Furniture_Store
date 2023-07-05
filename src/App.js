import { Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import "./App.css";
import { Cart } from './components/Cart';
function App() {
  const {name}=useSelector((state)=>state);
console.log(name);
  return (
    <div className="App">
    <Heading> {name} React Project</Heading>
    <Cart/>
   </div>
  );
}

export default App;
