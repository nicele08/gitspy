import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import ProfileAvatar from '@/components/landing/header/ProfileAvatar';
import { IProfile } from '@/types/user/profile';

const profile: IProfile = {
  id: 1,
  avatar_url: 'https://avatars.githubusercontent.com/u/12345678?v=4',
  name: 'Nicele08',
};

test('renders <ProfileAvatar /> correctly', async () => {
  const { findByText } = render(
    <Router>
      <ProfileAvatar profile={profile} hovered />
    </Router>,
  );
  const one = await findByText(/Nicele08/i);
  expect(one).toBeInTheDocument();
});
