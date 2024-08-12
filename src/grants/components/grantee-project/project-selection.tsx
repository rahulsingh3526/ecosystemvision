'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { Skeleton } from '@nextui-org/react';

import { cn } from '@/shared/utils/cn';

import { useGranteeProject } from '@/grants/hooks/use-grantee-project';

const SHARED_CLASSNAME = 'flex grow justify-center rounded-lg px-4 py-4';

interface Props {
  firstId: string;
  projectId: string;
  baseHref: string;
}

export const ProjectSelection = ({ firstId, projectId, baseHref }: Props) => {
  const params = useParams();
  const paramsProjectId = params.projectId as string;
  const href = `${baseHref}/${projectId}`;

  const isActive = paramsProjectId
    ? paramsProjectId === projectId
    : projectId === firstId; // Default to first project if no project-id params

  const { data } = useGranteeProject(paramsProjectId ?? firstId);

  if (!data) return <Skeleton className={cn(SHARED_CLASSNAME, 'h-[48px] rounded-2xl lg:h-[56px]')} />;

  return (
    <Link
      prefetch
      href={href}
      scroll={false}
      className={cn(SHARED_CLASSNAME, 'rounded-2xl bg-medium-gray px-3 py-3 text-center  text-base font-semibold', {
        'is-active': isActive,
      })}
    >
      {data.data.name}
    </Link>
  );
};
