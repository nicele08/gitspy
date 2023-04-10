import { useEffect, useRef } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router';

import MainLayout from '@/components/layouts/MainLayout';
import Login from '@/components/login/Login';
import { getGitHubToken } from '@/services/auth/gitHubAuth';
import Secure from '@/utils/storage/secureLs';

const LoginPage = ({ authenticated = false }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');
  const handleLogin = useRef(() => {});
  handleLogin.current = async () => {
    if (!code) {
      return;
    }
    try {
      const { data } = await getGitHubToken(code);
      const {
        access_token: accessToken,
        expires_in: expiresIn,
        refresh_token: refreshToken,
        refresh_token_expires_in: refreshTokenExpiresIn,
      } = data;

      if (accessToken) {
        Secure.setGithubAccessData(
          JSON.stringify({
            accessToken,
            expiresIn,
            tokenTimestamp: Date.now(),
          }),
        );
        navigate('/');
      }
      if (refreshToken) {
        Secure.setGithubRefreshData(
          JSON.stringify({
            refreshToken,
            refreshTokenExpiresIn,
            tokenTimestamp: Date.now(),
          }),
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (code) {
      handleLogin.current();
    }
  }, [code]);

  if (authenticated) {
    return <Navigate to="/" />;
  }

  return (
    <MainLayout>
      <Login />
    </MainLayout>
  );
};

export default LoginPage;
