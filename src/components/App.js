import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Popular from './Popular';
import Battle from './Battle';
import Result from './Result';

export default function App(props){
  return (
    <>
      <Header />
      <Routes> 
        <Route path='/' element={<Popular />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  )
}