import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import {
  JourneyIcon,
  DataSourceIcon,
  ProcessIcon,
  RulesIcon,
  ScorecardIcon,
  DataflowIcon,
  AutoMLIcon,
  KnowledgegraphIcon
} from '../../../vector';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const visualizationsidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Visual Analytics',
    path: '/visualanalytics',
    icon: getIcon(JourneyIcon)
  }
];

export default visualizationsidebarConfig;
