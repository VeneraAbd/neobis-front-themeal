import { Routes, Route} from 'react-router-dom';
import Meal from './pages/Meal/Meal';
import DishDetails from './pages/DishDetails';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<Layout/>}>
          <Route index element={<Meal/>}/>
          <Route path="dishdetails" element={<DishDetails/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        <Route/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
