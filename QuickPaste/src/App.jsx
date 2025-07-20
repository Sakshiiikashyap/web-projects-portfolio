import './App.css'
import Home from './components/Home';
import Navabar from './components/Navabar';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navabar />
        <Home />
      </div>
    },
    {
      path:"/pastes",
      element:
      <div>
        <Navabar />
        <Paste />
      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div>
        <Navabar />
        <ViewPaste />
      </div>
    },

  ]
);

function App() {
  

  return (
    <div>
      sakshi hello
    </div>
  )
}

export default App
