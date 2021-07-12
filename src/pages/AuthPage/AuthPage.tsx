import { useState } from 'react';
import './AuthPage.scss';

const AuthPage = () => {
  const [isAuth, setIsAuth] = useState(false)
  const authTitle = isAuth ? 'Bejelentkezés' : 'Regisztráció';
  return (
    <div className="auth-page">
      <h3 className="auth-page-title">{authTitle}</h3>
      <input type="email" className="auth-page-input" placeholder="email" />
      <input type="password" className="auth-page-input" placeholder="password" />
    </div>
  )
}

export default AuthPage;