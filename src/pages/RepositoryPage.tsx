import { useNavigate } from 'react-router-dom';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import ComingSoonCard from '@/components/shared/others/ComingSoonCard';

const RepositoryPage = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout
      onSearch={q => {
        // TODO: Implement search
        navigate(`/repositories?q=${q}`);
      }}
    >
      <ComingSoonCard />
    </DashboardLayout>
  );
};

export default RepositoryPage;
