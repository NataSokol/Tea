import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { axiosRequest } from '../../services/axiosInstance';
import TeasPage from '../page/tea/TeasPage';
import TeaItems from '../page/tea/TeaItems';
import Navbar from '../widgets/Navbar';
import './App.css';

function App() {
  const [teas, setTeas] = useState([]);

  const getAllTea = async () => {
    try {
      const response = await axiosRequest.get('/teas');
      if (response.status === 200) {
        setTeas(response.data);
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  useEffect(() => {
    getAllTea();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' />
        <Route
          path='/teas'
          element={<TeasPage teas={teas} setTeas={setTeas} />}
        />
        <Route
          path='/teas/:id'
          element={<TeaItems teas={teas} setTeas={setTeas} />}
        />
      </Routes>
    </>
  );
}

export default App;
