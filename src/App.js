import logo from './logo.svg';
import './App.css';
import Firstcomponent from './components/Firstcomponet';
import Secondcomponent from './components/Secondcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Fifthcomponent from './components/Fifthcomponent';
import Contactuscomponent from './components/Contactuscomponent';
import Helpcomponent from './components/Helpcomponent';
import Sixthcomponent from './components/Sixthcomponent';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Notfound from './components/Notfound';
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to = "/first"  className='navlink'>First</Link>
          <Link to = "/second" className='navlink'>Second</Link>
          <Link to = "/third" className='navlink'>Third</Link>
          <Link to = "/fourth" className='navlink'>Fourth</Link>
          <Link to = "/fifth" className='navlink'>Fifth</Link>
          <Link to = "/contactus" className='navlink'>Contact Us</Link>
          <Link to = "/help" className='navlink'>Help</Link>
          <Link to = "/sixth" className='navlink'>Sixth</Link>
        </nav>
      <header className="App-header">
       <h1>Hello Welcome to learning React!</h1>
       <h2>React is Fun</h2>
      </header>
      {/* Below we render/display/show our components */}
      <Routes>
        <Route path="/first" element={<Firstcomponent />} />
        <Route path="/second" element={<Secondcomponent />} />
        <Route path="/third" element={<Thirdcomponent />} />
        <Route path="/fourth" element={<Fourthcomponent />} />
        <Route path="/fifth" element={<Fifthcomponent />} />
        <Route path="/contactus" element={<Contactuscomponent />} />
        <Route path="/help" element={<Helpcomponent />} />
        <Route path="/sixth" element={<Sixthcomponent />} />  
        <Route path="*" element={<Notfound />} /> 

      </Routes>
    
        
    </div>
    </Router>

  );
}

export default App;
