import React,{useState} from 'react'
import '../SCSS/signin.scss'
import {connect} from 'react-redux'
import * as actions from '../store/actions';

function SignIn({signIn, history}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        signIn(username, password);
        history.push('/home')
    }

    return (
        <div className={'signin'}>
            <form onSubmit={handleSubmit}>
            <label htmlFor={'username'}>Username</label>
            <input type="text" placeholder="Username" id={'username'} onChange={(event) => setUsername(event.target.value)}/>

            <label htmlFor={'password1'}> Enter Password</label>
            <input type="password" placeholder="Enter Password" id={'password1'} onChange={(event) => setPassword(event.target.value)}/>
    
            <button type="submit">Submit</button>
            </form>
        </div >
    )
}

const mapStateToProps = state => {
    return{
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return{
        signIn: (username, password) => dispatch(actions.authLogin(username, password)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
