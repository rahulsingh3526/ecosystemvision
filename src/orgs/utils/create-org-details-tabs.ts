import { ROUTE_SECTIONS } from '@/shared/core/constants';

import { OrgDetails } from '@/orgs/core/schemas';

export const createOrgDetailsTabs = (org: OrgDetails) => {
  const hrefPrefix = `/${ROUTE_SECTIONS.ORGS}/info/${org.normalizedName}`;

  const tabs = [{ key: 'overview', text: 'Overview', href: `${hrefPrefix}` }];

  const fundingRoundsCount = org.fundingRounds.length;
  const investorsCount = org.investors.length;
  if (fundingRoundsCount || investorsCount) {
    const text = `Investments${fundingRoundsCount ? ` (${fundingRoundsCount})` : ''}`;
    tabs.push({
      key: 'investments',
      text,
      href: `${hrefPrefix}/investments`,
    });
  }

  const projectsCount = org.projects.length;
  if (projectsCount > 0) {
    const projectsTitle =
      projectsCount === 1 ? 'Project' : `Projects (${projectsCount})`;
    tabs.push({
      key: 'projects',
      text: projectsTitle,
      href: `${hrefPrefix}/projects`,
    });
  }

  const jobsCount = org.jobs.length;
  if (jobsCount > 0) {
    const jobsTitle = jobsCount === 1 ? 'Job' : `Jobs (${jobsCount})`;
    tabs.push({
      key: 'jobs',
      text: jobsTitle,
      href: `${hrefPrefix}/jobs`,
    });
  }

  return tabs;
};
