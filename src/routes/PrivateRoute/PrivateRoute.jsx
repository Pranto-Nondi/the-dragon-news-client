import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return (
          <div
            className='position-fixed top-50 start-50 translate-middle'
            style={{ zIndex: 9999 }}
          >
            <div className='spinner-grow' style={{ width: '3rem', height: '3rem' }} role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        );
      }
     
    // if (loading) {
    //     return <div className='d-flex justify-content-center h-100' ><div className="spinner-grow" style={{width: '3rem',height: '3rem'}} role="status">
    //         <span className="visually-hidden">Loading...</span>
    //     </div></div>
    // }
    if (user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace={true} ></Navigate>
};

export default PrivateRoute;