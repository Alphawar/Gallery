import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { fetchPhotos } from './store/asyncActions';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import Loader from './components/UI/Loader/Loader';
import { useTypedSelector } from './store/hooks';
import { bindActionCreators } from 'redux';

function App() {

  const state = useTypedSelector(state => state.photo)
  const dispatch = useDispatch()

  useEffect(() => {
    bindActionCreators(fetchPhotos, dispatch)()
  }, [dispatch])

  return (
    <div className='Layout'>
      <Header />
      {state.loading ?
        <Loader/> :
        <div className='container'>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/post/:id' element={<DetailsPage />}/>
            <Route path='*' element={<NotFoundPage />}/>
          </Routes>
        </div>
      }
      <Footer />
    </div>
  );
}

export default App;
