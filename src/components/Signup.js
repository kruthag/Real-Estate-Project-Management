// import React, { useState } from 'react';

// import 'C:/Users/kruth/OneDrive/Desktop/REM/src/assets/img/css/LoginSignup.css';

// import { useNavigate } from 'react-router-dom';


// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('customer'); // Default role is customer
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your signup logic here
//     if (role === 'agent') {
//       // Agent signup logic
//     } else {
//       // Customer signup logic
//     }
//     navigate('/');
//   };

//   return (
//     <div className="login-signup-container">
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
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
//         <button >Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
// Signup.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import 'C:/Users/kruth/OneDrive/Desktop/REM/src/assets/img/css/LoginSignup.css';
import a from '../profile.png';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('customer');
    const navigate = useNavigate();
    const { login } = useContext(UserContext);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mock signup logic using local storage
        try {
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = existingUsers.some(user => user.email === email);

            if (userExists) {
                setError('User already exists');
            } else {
                const newUser = { email, password, role, profileImage: a };
                existingUsers.push(newUser);
                localStorage.setItem('users', JSON.stringify(existingUsers));

                const userInfo = {
                    email: newUser.email,
                    role: newUser.role,
                    profileImage: newUser.profileImage,
                };
                login(userInfo);
                navigate('/');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="login-signup-container">
            <h2>Signup</h2>
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
                <button >Signup</button>
            </form>
        </div>
    );
};

export default Signup;


