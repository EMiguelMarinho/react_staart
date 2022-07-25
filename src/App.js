import { BrowserRouter, Link } from 'react-router-dom'
import { AppRoutes } from './Routes'

export const App = () => {    
    return (
        <div className='wrapper'>
            <BrowserRouter>
                <nav>
                    <Link to='/'>Meu Feed</Link>
                    <Link to='/most-viewed'>Mais Vistos</Link>
                </nav>

                <AppRoutes />
            </BrowserRouter>
        </div>
    )
}
