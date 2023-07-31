import React, { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

const GoogleLogIn = () => {
  return (
    <React.Fragment>
      <GoogleOAuthProvider clientId="907824685069-6mlq4rgbjs5g4f9a075thftst08eur4v.apps.googleusercontent.com">
        <GoogleLogin
          buttonText="google login"
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('LOGIN FAILED');
          }}
      />
      </GoogleOAuthProvider>
    </React.Fragment>
  )
}

export default GoogleLogIn

// function App() {



//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {user && (
//           <h1>welcome, {user.Bd}</h1>
//         )}
//         <GoogleLogin
//           clientId="967419455627-uj47kfrnheso9kn38b6h30h3mspkperk.apps.googleusercontent.com"
//           buttonText="Login"
//           onSuccess={responseGoogle}
//           onFailure={responseGoogle}
//         />
//         <GoogleLogout
//           clientId="967419455627-uj47kfrnheso9kn38b6h30h3mspkperk.apps.googleusercontent.com"
//           buttonText="Logout"
//           onLogoutSuccess={logout}
//         />
//       </header>
//     </div>
//   );
// }

// export default App;