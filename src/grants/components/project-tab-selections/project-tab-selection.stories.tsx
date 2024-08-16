import { Meta, StoryObj } from '@storybook/react';

import { faker } from '@faker-js/faker';

import {
  MockInfiniteQueryResult,
  MockQueryResult,
} from '@/shared/testutils/misc';

import { fakeGrant } from '@/grants/testutils/fake-grant';
import {
  fakeGrantee,
  fakeGranteeItem,
  fakeGrantees,
} from '@/grants/testutils/fake-grantee';
import { fakeGranteeProject } from '@/grants/testutils/fake-grantee-project';
import { mockGranteeListQuery } from '@/grants/testutils/mock-grantee-list-query';
import { mockGranteeProjectQuery } from '@/grants/testutils/mock-grantee-project-query';
import { mockGranteeQuery } from '@/grants/testutils/mock-grantee-query';

import { ProjectTabSelection } from './project-tab-selection';

faker.seed(420);

const grant = fakeGrant();
const grantee = fakeGrantee();
const grantees = [
  { ...fakeGranteeItem(), id: grantee.id },
  ...fakeGrantees().slice(1),
];
const granteeProject = fakeGranteeProject({ id: grantee.projects[0] });

const meta: Meta<typeof ProjectTabSelection> = {
  title: 'grants/components/project-tab-selection',
  component: ProjectTabSelection,
  parameters: {
    nextjs: {
      navigation: {
        pathname: `/grants/${grant.id}`,
        segments: [['grantId', grant.id]],
      },
    },
    msw: {
      handlers: [
        mockGranteeListQuery(MockInfiniteQueryResult.SUCCESS, {
          grantId: grant.id,
          data: grantees,
        }),
        mockGranteeQuery(MockQueryResult.SUCCESS, {
          data: grantee,
        }),
        mockGranteeProjectQuery(MockQueryResult.SUCCESS, {
          data: granteeProject,
        }),
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectTabSelection>;

export const Default: Story = {};
