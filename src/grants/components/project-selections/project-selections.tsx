'use client';

import { useParams } from 'next/navigation';

import { useGranteeFetch } from '@/grants/hooks/use-grantee-fetch';
import { ProjectSelectionItemSkeleton } from '@/grants/components/project-selections/project-selection-item-skeleton';

import { ProjectSelection } from './project-selection';

const WRAPPER_CLASSNAME = 'flex w-full gap-3 rounded-20 bg-white/5 p-3';

export const ProjectSelections = () => {
  const { grantId, granteeId } = useParams() as {
    grantId: string;
    granteeId?: string;
  };

  const { granteeData, isLoading, errorMessage } = useGranteeFetch(
    grantId,
    granteeId,
  );

  if (isLoading) {
    return (
      <div className={WRAPPER_CLASSNAME}>
        <ProjectSelectionItemSkeleton />
        <ProjectSelectionItemSkeleton />
      </div>
    );
  }

  if (errorMessage) {
    return <p>Error: {errorMessage}</p>;
  }

  if (!granteeData?.data) {
    return <p>TODO: No Grantee UI</p>;
  }

  const baseHref = `/grants/${grantId}/grantees/${granteeData.data.id}/projects`;

  return (
    <div className={WRAPPER_CLASSNAME}>
      {granteeData.data.projects.map((projectId, index) => (
        <ProjectSelection
          key={projectId}
          projectId={projectId}
          href={`${baseHref}/${projectId}`}
          isActiveBypass={!granteeId && index === 0}
        />
      ))}
    </div>
  );
};
