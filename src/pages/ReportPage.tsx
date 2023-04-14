import { useNavigate } from 'react-router-dom';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import ComingSoonCard from '@/components/shared/others/ComingSoonCard';

const ReportPage = () => {
  return (
    <DashboardLayout>
      <ComingSoonCard />
    </DashboardLayout>
  );
};

export default ReportPage;
