import { useState } from 'react';

import './Auth';

const Auth = () => {
  const [title, setTitle] = useState('Registration')
  title === 'Sign In' ? 'Sign In' : 'Registration';

  return (
    <div className="auth-panel">
      <h3 className="auth-panel-title">{title}</h3>
      <button className="auth-panel-submit">Regisztrálok</button>
    </div>
  )
}

export default Auth;