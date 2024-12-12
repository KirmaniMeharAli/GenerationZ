// src/components/UserProfile.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import './UserProfile.css';

const UserProfile = () => {
  const { user, logout } = useContext(AuthContext);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSave = () => {
    // Save the updated user information
    // This is a placeholder for actual save logic
    alert('Profile updated');
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmNewPassword) {
      alert('New passwords do not match');
      return;
    }
    // Change the password
    // This is a placeholder for actual change password logic
    alert('Password updated');
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-field">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="profile-field">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={logout} className="logout-button">Logout</button>

      <h2>Change Password</h2>
      <div className="profile-field">
        <label>Current Password:</label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      <div className="profile-field">
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className="profile-field">
        <label>Confirm New Password:</label>
        <input
          type="password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
      </div>
      <button onClick={handleChangePassword}>Change Password</button>
    </div>
  );
};

export default UserProfile;
