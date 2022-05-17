import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Login/index.css'
import loginBg from '../Login/login.png'; 
import facebook from '../Login/facebook.png'; 
import google from '../Login/google.png';
import twitter from '../Login/twitter.png';


const Login = () => {
  
  return (
    <div className='login-box-wrapper'>

      <div className='login-box-inner'>
        <div className='top-header-logo'>
          <div>
            <img className='fs-logo' src="https://ghostlamp.com/wp-content/uploads/fav.png" alt="fs image"/>
          </div>
          <div>filestore</div>
          </div>
        
        <div className='flexed-inner-box'>
          <div className='left-img-box'>
            <img src={loginBg} alt="Login Illustrative Background"/>
          </div>
          <div className='right-login-box'>
            <header className='welcome'>Welcome Back:)</header>
            <p className='login-header-text'>To keep connected with us please login with your personal information by
              email addres and password 🔔
            </p>

            <div className="login-box-wrappe">
              <form onClick={() => {
                console.log('Submitted')
              }}>
                <div className="email-box">
                <span class="material-symbols-outlined lock">mail</span>
                  <div className='right-side-input'>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name='email' required/>
                  </div>
                </div>
                <div className="password-box">
                  <span class="material-symbols-outlined lock">lock</span>
                  <div className='right-side-input'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required/>
                  </div>
                </div>

                <div className='forgot-pass-box'>
                  <div className='remember-me'>
                    <input type="checkbox" name="remenber-me"/> 
                    <div>Remember Me</div>
                  </div>
                    <a href='https://www.google.com' className='forgot-pwd'>Forget Password?</a>
                </div>

                <div className='login-cra-btn'>
                  <button type='button' className='btn login-btn'>login now</button>
                  <button type='button' className='btn cra-btn'>create account</button>
                </div>
              </form>
              
              <div className="social-login">
                <p>Or you can join with</p>
                <div className='social'>
                  <img src={google} alt="Google Icon" />
                  <img src={facebook} alt="Facebook Icon" />
                  <img src={twitter} alt="Twitter Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;