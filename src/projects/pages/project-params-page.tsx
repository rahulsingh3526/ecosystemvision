'use client';

import dynamic from 'next/dynamic';
import { use } from 'react';

import { ROUTE_TABS } from '@/shared/core/constants';
import { FRONTEND_URL } from '@/shared/core/envs';

import { useProjectDetails } from '@/projects/hooks/use-project-details';

const ProjectDetailsCard = dynamic(() =>
  import(
    '@/projects/components/project-details-cards/project-details-card'
  ).then((m) => m.ProjectDetailsCard),
);

const OrgDetailsCard = dynamic(() =>
  import('@/orgs/components/org-details-card').then((m) => m.OrgDetailsCard),
);

interface Props {
  params: Promise<{
    slug: string;
    tab: string;
  }>;
}

export const ProjectParamsPage = ({ params }: Props) => {
  const { slug, tab } = use(params);
  const { data } = useProjectDetails(slug);

  if (!data) return null;

  if (tab === ROUTE_TABS.SHARED.DETAILS) {
    return <ProjectDetailsCard project={data} />;
  }

  if (data.organizations.length > 0 && tab === ROUTE_TABS.SHARED.ORG) {
    return (
      <OrgDetailsCard
        org={data.organizations[0]}
        actionHref={`${FRONTEND_URL}/organizations/names/${data.organizations[0].normalizedName}/details`}
      />
    );
  }

  return null;
};
