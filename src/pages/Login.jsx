import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Login.css'
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons' 

const Login = () => {
  
  return (
    <div className='login-box-wrapper'>

      <div className='login-box-inner'>
        <div className='top-header-logo'>FileStore</div>
        
        <div className='flexed-inner-box'>
          <div className='left-img-box'>
            <img src="https://a.slack-edge.com/d9cde/marketing/img/features/inline/img-work-easily.png" alt="" />
          </div>
          <div className='right-login-box'>
            <header className='welcome'>Welcome Back:)</header>
            <p className='login-header-text'>To keep connected with us please login with your personal information by
              email addres and password 🔔
            </p>

            <div className="login-box-wrappe">
              <form>
                <div className="email-box">
                  <FontAwesomeIcon className='font-awesome' icon={faEnvelope} />
                  <div className='right-side-input'>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name='email' required/>
                  </div>
                </div>
                <div className="password-box">
                  <FontAwesomeIcon className='font-awesome' icon={faLock} />
                  <div className='right-side-input'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required/>
                  </div>
                </div>
                <div className='login-cra-btn'>
                  <button type='button' className='btn login-btn'>login now</button>
                  <button type='button' className='btn cra-btn'>create account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;