import EventsSidebar from './components/EventsSidebar';
import Main from './components/Main';
import Nav from './components/Nav';
import RightSidebar from './components/LeftSidebar';
import './index.scss'
import LeftSidebar from './components/LeftSidebar';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='main'>
        <LeftSidebar />
        <Main />
        <EventsSidebar />
      </div>
    </div>
  );
}

export default App;
