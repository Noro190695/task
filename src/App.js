import './styles/style.scss'
import Navbar from "./components/navbar/Navbar";
import {Switch, Route } from 'react-router-dom'
import Categories from "./components/categories/Categories";
function App(props) {

  return (
    <div className="app">
      <Navbar />
      <Categories />
    </div>
  );
}

export default App;
