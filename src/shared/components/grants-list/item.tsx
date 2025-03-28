import { CoinsIcon, HandCoinsIcon } from 'lucide-react';

import { InfoTagProps } from '@/shared/core/types';
import { cn } from '@/shared/utils/cn';
import { formatNumber } from '@/shared/utils/format-number';
import { shortTimestamp } from '@/shared/utils/short-timestamp';
import { Divider } from '@/shared/components/divider';
import { BankIcon } from '@/shared/components/icons/bank-icon';
import { PaperbillIcon } from '@/shared/components/icons/paperbill-icon';
import { InfoTag } from '@/shared/components/info-tag';
interface Props {
  amount: number | null;
  programName: string | null;
  fundingDate: number | null;
  tokenUnit: string | null;
  tokenAmount: number | null;
  showDivider: boolean;
  isGrid?: boolean;
}

export const GrantsListItem = (props: Props) => {
  const {
    amount,
    tokenUnit,
    fundingDate,
    tokenAmount,
    programName,
    showDivider,
    isGrid,
  } = props;
  const hasTokenAmount = tokenUnit && tokenAmount;

  const infoTags = [
    programName && {
      text: `${programName}`,
      icon: <BankIcon />,
    },
    amount && {
      text: `Raised Amount: $${formatNumber(amount)}`,
      icon: <PaperbillIcon />,
    },
    ...(hasTokenAmount
      ? [
          {
            text: `Token Amount: ${formatNumber(tokenAmount)} ${tokenUnit}`,
            icon: <CoinsIcon size={16} />,
          },
        ]
      : []),
    fundingDate && {
      text: `Date: ${shortTimestamp(fundingDate / 1000)}`,
      icon: <HandCoinsIcon size={16} />,
    },
  ].filter(Boolean) as InfoTagProps[];

  return (
    <div className="flex flex-col gap-2.5">
      <div
        className={cn({
          'flex flex-wrap items-center gap-x-4': !isGrid,
          'grid max-w-3xl grid-cols-4': isGrid,
        })}
      >
        {infoTags.map((tag) => (
          <InfoTag key={tag.text} tag={tag} />
        ))}
      </div>

      {showDivider && <Divider />}
    </div>
  );
};
