import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { MostViewed } from './pages/MostViewed';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/most-viewed' element={<MostViewed />}/>
        </Routes>
    )
}