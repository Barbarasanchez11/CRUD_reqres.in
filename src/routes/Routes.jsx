import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserList from '../pages/UserList'
import UserDetail from '../pages/UserDetail'
import CreateUser from '../pages/CreateUser'

const RoutesApp = () => {
    return(
    
        <Router>
            <Routes>
                <Route path='/' element={<UserList />} />
                <Route path='users/:id' element={<UserDetail />} />
                <Route path='users/new' element={<CreateUser />} />
            </Routes>    
        </Router>   
    )
}

export default RoutesApp