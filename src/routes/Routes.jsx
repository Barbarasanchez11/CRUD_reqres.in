import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserList from '../pages/UserList'
import UserDetail from '../pages/UserDetail'
import CreateUser from '../pages/CreateUser'
import EditUser from '../pages/EditUser'

const RoutesApp = () => {
   
    return(
    
        <Router>
            <Routes>
                <Route path='/' element={<UserList />} />
                <Route path='users/:id' element={<UserDetail />} />
                <Route path='users/new' element={<CreateUser />} />
                <Route path='users/:id/edit' element={<EditUser />} />
                
            </Routes>    
        </Router>   
    )
}

export default RoutesApp