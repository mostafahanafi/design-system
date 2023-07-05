import * as React from 'react';
import { ChipInput, Label, Row, Column } from '@/index';

export const chipsWrappedToNextLine = () => {
  const [value, setValue] = React.useState([
    'Anyone',
    'Person with disability',
    'Retired person from the armed forces',
  ]);

  return (
    <Row>
      <Column size={4}>
        <Label withInput={true}>Population Focus</Label>
        <ChipInput value={value} chipOptions={{ clearButton: true }} onChange={setValue} />
      </Column>
    </Row>
  );
};

const customCode = `() => {
  const [value, setValue] = React.useState(
    ['Anyone', 'Person with disability', 'Retired person from the armed forces']
  );

  return (
    <Row>
      <Column size={4}>
        <Label withInput={true}>Population Focus</Label>
        <ChipInput
          value={value}
          chipOptions={{ clearButton: true }}
          onChange={setValue}
        />
      </Column>
    </Row>
  );
}`;

export default {
  title: 'Inputs/ChipInput/Chips Wrapped To Next Line',
  component: ChipInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
