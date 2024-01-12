import { Outlet } from 'react-router-dom'
import  Navbar  from '../components/Navbar'

const PublicLayout = () => {

    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center">
                <Outlet />
            </div>
        
        </div>
    )
}

export default PublicLayout