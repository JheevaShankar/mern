import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/about' element = {<About />} />
      <Route path='/service' element = {<Service />} />
      <Route path='/contact' element = {<Contact />} /> 
    </Routes>
    {/*<Form />
    <div>App</div>
    <State />
    <Like />
    <Profile name="John" age={20} skills={["HTML","CSS","Javascript"]}/> */}
    </>
  )
}

  


export default App
