import React from 'react';
import LoginPage from './login/LoginPage';

function App() {
  return (
    <div className="login-container">
      <h1>Welcome to DiscoverOne!</h1>
      <br />

      <p>Your gateway to rewards and more.</p>
      <br />

      <p>Manage your account, track your rewards, and explore exclusive offers.</p>
      <p>Get started by logging in below.</p>

      <br />

        <div className="login-box">
            <h4>Login with your CapitalOne or Discover credentials.</h4>
            <LoginPage />

            <br />
            
            <h4>New to DiscoverOne? </h4>
            <br />
            <h4><a href="https://www.capitalone.com/bank/checking250/">Sign up here!</a></h4>
        </div>
    </div>
  )
}

export default App;