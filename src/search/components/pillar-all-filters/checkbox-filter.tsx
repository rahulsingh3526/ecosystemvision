import { Checkbox, CheckboxGroup } from '@heroui/checkbox';

import { Divider } from '@/shared/components/divider';

interface Props {
  label: string;
  items: { label: string; value: string | boolean }[];
}

export const CheckboxFilter = ({ label, items }: Props) => {
  return (
    <>
      <CheckboxGroup label={label}>
        {items.map((item) => (
          <Checkbox
            key={item.value as string}
            color="default"
            value={item.value as string}
          >
            {item.label}
          </Checkbox>
        ))}
      </CheckboxGroup>
      <Divider />
    </>
  );
};
