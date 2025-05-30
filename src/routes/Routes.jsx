import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserList from '../pages/UserList'

const RoutesApp = () => {
    return(
    
        <Router>
            <Routes>
                <Route path='/' element={<UserList />} />
            </Routes>
        </Router>   
    )
}

export default RoutesApp