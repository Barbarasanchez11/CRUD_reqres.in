import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserList from '../pages/UserList'
import UserDetail from '../pages/UserDetail'

const RoutesApp = () => {
    return(
    
        <Router>
            <Routes>
                <Route path='/' element={<UserList />} />
                <Route path='users/:id' element={<UserDetail />} />
            </Routes>    
        </Router>   
    )
}

export default RoutesApp