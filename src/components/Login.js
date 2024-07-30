// import React, { useState } from 'react';
// import 'C:/Users/kruth/OneDrive/Desktop/REM/src/assets/img/css/LoginSignup.css';

// import { useNavigate } from 'react-router-dom';


// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('customer'); 
//   const navigate = useNavigate();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Add your login logic here
// //     if (role === 'agent') {
// //       // Agent login logic
// //     } else {
// //       // Customer login logic
// //     }
// //     navigate('/');
// //   };

//   return (
//     <div>
//     <div className="login-signup-container">
        
//       <h2>Login</h2>
//       <form >
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </div>
//         <div className="form-group">
//           <label>Role:</label>
//           <select value={role} onChange={(e) => setRole(e.target.value)}>
//             <option value="customer">Customer</option>
//             <option value="agent">Agent</option>
//           </select>
//         </div>
//        <button>Submit</button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default Login;
// Login.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext.js';
import 'C:/Users/kruth/OneDrive/Desktop/REM/src/assets/img/css/LoginSignup.css';
import a from '../profile.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('customer');
    const navigate = useNavigate();
    const { login } = useContext(UserContext);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mock login logic using local storage
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const user = existingUsers.find(user => user.email === email && user.password === password && user.role === role);

        if (user) {
            const userInfo = {
                email: user.email,
                role: user.role,
                profileImage: user.profileImage,
            };
            login(userInfo);
            navigate('/');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="login-signup-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Role:</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="customer">Customer</option>
                        <option value="agent">Agent</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Login;
