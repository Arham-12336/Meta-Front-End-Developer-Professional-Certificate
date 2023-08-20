import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import {Routes,Route, Link} from 'react-router-dom'

function App() {
  const time=new Date();
  const day=time.toLocaleString("en-us",{Weekday:"long"});
  const mornings=time.getHours()>= 6 && time.getHours <=12;
  let daymessage;
  if(day.toLocaleLowerCase()==="monday")
  {
    daymessage=`Happy ${day}`;
  }
  else if(day.toLocaleLowerCase()==="tuesday"){daymessage=`${day},four days to go`}
  else if(day.toLocaleLowerCase()==="wednesday"){daymessage=`${day},half way there`}
  else if(day.toLocaleLowerCase()==="thursday"){daymessage=`${day},Start palnning the weekend`}
  else if(day.toLocaleLowerCase()==="fiday"){daymessage=`${day},Wo-hoo,the weekend is here`}
  else{daymessage="Stay calm"}
  return (
    <div className="App">
      <h1>
        {daymessage}
      </h1>
      {mornings ? <h2>Have you had a breakfaset?</h2>: ''}
      {/* <nav className="nav">
        <Link to="/" className="nav-item">HomePage</Link>
        <Link to="/about-me" className="nav-item">About Me</Link>
      </nav>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about-me" element={<AboutMe/>}/>
      </Routes> */}

    </div>
  );
}

export default App;
