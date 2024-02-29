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

const knowledgegraphSideBarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'journey',
    path: '/journey',
    icon: getIcon(JourneyIcon)
  },
  {
    title: 'process',
    path: '/process',
    icon: getIcon(ProcessIcon)
  },
  {
    title: 'rules',
    path: '/rules',
    icon: getIcon(RulesIcon)
  },
  {
    title: 'score card',
    path: '/scorecard',
    icon: getIcon(ScorecardIcon)
  },
  {
    title: 'data flow',
    path: '/dataflow',
    icon: getIcon(DataflowIcon)
  },
  {
    title: 'data source',
    path: '/datasource',
    icon: getIcon(DataSourceIcon)
  },
  {
    title: 'Knowledge Graph',
    path: '/knowledgegraph',
    icon: getIcon(KnowledgegraphIcon)
  }
];

export default knowledgegraphSideBarConfig;
