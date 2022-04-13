import EventsSidebar from './components/EventsSidebar';
import Main from './components/Main';
import Nav from './components/Nav';
import RightSidebar from './components/RightSidebar';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <RightSidebar />
      <EventsSidebar />
    </div>
  );
}

export default App;
