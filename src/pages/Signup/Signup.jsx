import LoginLayout from '../../components/Layouts/LoginLayout/LoginLayout';
import Field from '../../components/Field/Flied';
import { useEffect, useState } from 'react';
import SignupWrapper from './ui-Signup';
import { createUser } from '../../services/auth-service';
import { useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';

const Signup = () => {
  const [showInpPassword, setShowInpPassword] = useState(false);
  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const { user } = useUser();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  const handleShowInpPassword = () => {
    setShowInpPassword(!showInpPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(signupData);
  };

  return (
    <LoginLayout>
      <SignupWrapper className="flex a-center j-center">
        <div className="signup-body flex column j-center a-center">
          <h1>Unlimited movies, TV shows and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <div className="input-container flex a-center j-center">
            <div className="input-body flex column">
              <h3>
                Ready to watch? Enter your email to create o restart your
                membership
              </h3>
              <form
                className="form-signup flex a-center column"
                onSubmit={handleSubmit}>
                <div className="inputs flex">
                  <Field
                    name="email"
                    placeholder="Email address"
                    type="email"
                    onChange={handleChange}
                  />
                  {showInpPassword ? (
                    <Field
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={handleChange}
                    />
                  ) : (
                    <button
                      className="btn"
                      type="button"
                      onClick={handleShowInpPassword}>
                      Get Started
                    </button>
                  )}
                </div>
                {showInpPassword && (
                  <div className="btn-signup__submit">
                    <button className="btn" type="submit">
                      Sign up
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </SignupWrapper>
    </LoginLayout>
  );
};

export default Signup;
