import { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import MainLayout from '@/components/layouts/MainLayout';
import Login from '@/components/login/Login';
import {
  getGitHubToken,
  isAuthWithGitHub,
} from '@/services/auth/gitHubAuth';
import Secure from '@/utils/storage/secureLs';
import { useAuth } from '@/components/contexts/AuthContext';
import GitSpyLoader from '@/components/shared/skeleton/GitSpyLoader';
import API from '@/services/api/api';
import Keys from '@/utils/appConstants/keys';

const LoginPage = () => {
  const [loading, setLoading] = useState(isAuthWithGitHub());
  const { profile, setProfile } = useAuth();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const handleLogin = useRef(() => {});
  handleLogin.current = async () => {
    if (!code) {
      return;
    }
    try {
      setLoading(true);
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
        const { data: profileData } = await API.github.get('/user', {
          headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (profileData) {
          setProfile(profileData);
          Secure.set(Keys.USER_DATA, JSON.stringify(profileData));
          const redirectPathname = Secure.get(Keys.REDIRECT_KEY);
          if (redirectPathname) {
            Secure.remove(Keys.REDIRECT_KEY);
          }
          window.location.href =
            redirectPathname || `/${profileData.login}`;
        }
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (code) {
      handleLogin.current();
    }
  }, [code]);

  if (profile) {
    const redirectPathname = Secure.get(Keys.REDIRECT_KEY);
    if (redirectPathname) {
      Secure.remove(Keys.REDIRECT_KEY);
      return <Navigate to={redirectPathname} replace />;
    }
    return <Navigate to={`/${profile.login}`} replace />;
  }

  if (loading) {
    return <GitSpyLoader />;
  }

  return (
    <MainLayout>
      <Login />
    </MainLayout>
  );
};

export default LoginPage;
