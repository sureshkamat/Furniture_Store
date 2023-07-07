import { Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import "./App.css";
import { Cart } from './components/Cart';
import { AllRoutes } from './components/AllRoutes';
function App() {
  const {name}=useSelector((state)=>state);
console.log(name);
  return (
    <div className="App">
    <Heading> {name} React Project</Heading>
    <AllRoutes/>
   </div>
  );
}

export default App;
