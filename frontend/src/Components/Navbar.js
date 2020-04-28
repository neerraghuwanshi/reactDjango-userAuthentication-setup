import React from 'react'
import {NavLink, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../store/actions';

import '../SCSS/navbar.scss'

function Navbar({logout,history}) {
    
    return(
    localStorage.getItem('token') !== null
    ?   <div>
        <div className={'navbarContainer'}> 
            <h2>AddEarn</h2>
            <NavLink className={'link center'} to={'/home'}>Home</NavLink>
            <NavLink className={'link center'} to={'/trending'}>Trending</NavLink>
            <NavLink className={'link center'} to={'/categories'}>Categories</NavLink>
            <NavLink className={'link center'} to={'/search'}>Search</NavLink>
            <h3 type={'submit'} className={'right logoutBtn'} onClick={()=>{logout();history.push('/signin')}} style={{}}>{`Hello ${localStorage.getItem('username')}`}</h3>
        </div>  
        </div>

    :   <div>
        <Redirect to={'/signin'}/>
        <h1>Addearn</h1>
        <div className={'navbarContainer'}>
            <NavLink className={'link right'} to={'/signup'}>SignUp</NavLink>
            <NavLink className={'link left'} to={'/signin'}>SingIn</NavLink>
        </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return{
        logout: ()=>dispatch(actions.logout)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)