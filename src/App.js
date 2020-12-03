import logo from './logo.svg';
import './App.css';
import  ThemeContextProvider  from './context/ThemeContext';
 import Booklist from './components/Booklist';

function App() {
  return (
    <ThemeContextProvider>
      <Booklist />
    </ThemeContextProvider>
   
  );
}

export default App;
