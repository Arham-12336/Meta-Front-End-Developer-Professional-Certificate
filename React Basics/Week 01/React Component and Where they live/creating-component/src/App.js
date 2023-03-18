import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import Heading from './Heading';
import Main from './Main';
import Sidebar from './Sidebar';


function Image(props)
{
  const userpic=<img src={logo}/>;
  return userpic;
}


function Header()
{
  return <h1>Hello World!</h1>
}

function App() {
  return(   
    // <h1>Hello World</h1>
    // // <Heading firstname="Arham"/>
    <Image />
  );
}

export default App;
