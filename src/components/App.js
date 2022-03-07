import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Popular from './Popular';
import Battle from './Battle';

export default function App(props){
  return (
    <>
      <Header />
      <Routes> 
        <Route path='/' element={<Popular />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/battle" element={<Battle />} />
      </Routes>
    </>
  )
}