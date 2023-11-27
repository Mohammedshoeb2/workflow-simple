import './App.css';
import Signin from './Resources/Signin'

function App() {
  return (
    <div className="App flex">
      <div className='card flex'>
        <h2>SYNECT<span id='one'>I</span>KS</h2>
        <h1>Workflow Management</h1>
        <p className='card-text'>
          Manage your project and the team in easy way.
        </p>
      </div>
      <div className='login'>
        <div className='login-bar'>
          <h4 className='flex two'><a href="#">Login</a> <a href="#">Signup</a></h4>
        </div>
        <div className="flex input-main">
        <input className='input' placeholder='Username:admin or User'></input>
        <input type='Password' className='input' placeholder='Password:Synectiks design'></input>
         
        </div>
        
        <div className='flex new'>
          <div className="flex cbx">
          <input type="checkbox" /> <span> Remember me</span>

          </div>

          <a href="#" id='second'>Forgot your Password?</a>
        </div>
        <Signin btnName='SignIn' className='btn'/>

      </div>
    </div>
  );
}

export default App;
