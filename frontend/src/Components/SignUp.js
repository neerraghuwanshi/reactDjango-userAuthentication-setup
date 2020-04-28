import React,{useState} from 'react'
import '../SCSS/signin.scss'
import {connect} from 'react-redux'
import * as actions from '../store/actions';

function SignUp({signUp,history}) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

        const handleSubmit = () => {
                    signUp(username, email, password1, password2);
                    history.push('/home')
                }
        
    return (
        <div className={'signin'}>
            <form onSubmit={handleSubmit}>
                <label htmlFor={'username'}>Username</label>
                <input type="text" placeholder="Username" id={'username'} onChange={(event) => setUsername(event.target.value)}/>
                
                <label htmlFor={'email'}>E-mail</label>
                <input type="email" placeholder="E-mail" id={'email'} onChange={(event) => setEmail(event.target.value)}/>
               
                <label htmlFor={'password1'}> Enter Password</label>
                <input type="password" placeholder="Enter Password" id={'password1'} onChange={(event) => setPassword1(event.target.value)}/>
           
                <label htmlFor={'password2'}>Confirm Password</label>
                <input type="password" placeholder="Confirm Password" id={'password2'} onChange={(event) => setPassword2(event.target.value)}/>
            
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
