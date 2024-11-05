import React, { useEffect } from 'react';
import { auth } from '@/store/actions/user';
import { API_URL } from '@/configs/env';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import routes from '@/configs/routes';
import GoogleIcon from '@/assets/icons/google.svg?react';
import FacebookIcon from '@/assets/icons/facebook.svg?react';
import GithubIcon from '@/assets/icons/github.svg?react';

function AuthSocial(props) {
  const { actions } = props;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('jwt');

  useEffect(() => {
    if (token) actions.auth({ token }, () => navigate(routes.home.path));
  }, [token]);

  const handleLoginFaceBook = () => {
    window.open(`${API_URL}/auth/facebook`, '_self');
  };

  const handleLoginGithub = () => {
    window.open(`${API_URL}/auth/github`, '_self');
  };

  const handleLoginGoogle = () => {
    window.open(`${API_URL}/auth/google`, '_self');
  };

  return (
    <div className='auth-social'>
      <button className='btn-social' onClick={() => handleLoginFaceBook()}>
        <FacebookIcon className='auth-icon' />
      </button>
      <button className='btn-social' onClick={() => handleLoginGoogle()}>
        <GoogleIcon className='auth-icon' />
      </button>
      <button className='btn-social' onClick={() => handleLoginGithub()}>
        <GithubIcon className='auth-icon' />
      </button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ auth }, dispatch),
});

export default connect(null, mapDispatchToProps)(AuthSocial);
