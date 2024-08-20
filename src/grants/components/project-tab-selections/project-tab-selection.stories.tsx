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
import { mockGranteeListQuery } from '@/grants/testutils/mock-grantee-list-query';
import { mockGranteeQuery } from '@/grants/testutils/mock-grantee-query';

import { ProjectTabSelection } from './project-tab-selection';

faker.seed(420);

const grant = fakeGrant();
const grantId = grant.slug;
const grantee = fakeGrantee();
const grantees = [
  { ...fakeGranteeItem(), id: grantee.slug },
  ...fakeGrantees().slice(1),
];

const meta: Meta<typeof ProjectTabSelection> = {
  title: 'grants/components/project-tab-selection',
  component: ProjectTabSelection,
  parameters: {
    nextjs: {
      navigation: {
        pathname: `/grants/${grantId}`,
        segments: [['grantId', grantId]],
      },
    },
    msw: {
      handlers: [
        mockGranteeListQuery(MockInfiniteQueryResult.SUCCESS, {
          grantId,
          data: grantees,
        }),
        mockGranteeQuery(MockQueryResult.SUCCESS, {
          grantId,
          data: grantee,
        }),
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectTabSelection>;

export const Default: Story = {};
