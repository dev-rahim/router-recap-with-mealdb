import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MealDetails from './Components/MealDetails/MealDetails';
import NotFound from './Components/NotFound/NotFound';
import Restaurant from './Components/Restaurant/Restaurant';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/restaurant' element={<Restaurant />} />
          <Route path='*' element={<NotFound />} />
          <Route exact path='/meal/:mealdb' element={<MealDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
