import * as React from 'react';
import { Stepper, Button, Breadcrumbs, Badge, Text, MetaList, Avatar, PageHeader, Dropdown } from '@/index';
import { action } from '@/utils/action';

export const stepperInPageHeader = () => {
  const stepperData = [
    {
      value: 'step_1',
      label: 'Recipients',
    },
    {
      value: 'step_2',
      label: 'Message',
    },
    {
      value: 'step_3',
      label: 'Schedule',
    },
  ];

  const options = [
    {
      label: 'Option 1',
      value: 'Option 1',
    },
    {
      label: 'Option 2',
      value: 'Option 2',
    },
    {
      label: 'Option 3',
      value: 'Option 3',
    },
  ];

  const [active, setActive] = React.useState(2);

  const onChangeHandler = (activeStep) => {
    setActive(activeStep);
  };

  const stepper = <Stepper steps={stepperData} onChange={onChangeHandler} active={active} completed={1} />;

  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Text className="mr-4" appearance="subtle">
        Few minutes ago
      </Text>
      <Avatar className="mr-4" firstName="John" lastName="Doe" appearance="accent2" />
      <div className="mr-4">
        <Dropdown menu={true} icon="more_horiz" options={options} />
      </div>
      <Button className="mr-4">Finish later</Button>
    </div>
  );

  const breadcrumbs = (
    <Breadcrumbs
      list={[
        {
          label: 'Campaigns',
          link: '/Campaigns',
        },
      ]}
      onClick={(link) => action(`on-click: ${link}`)}
    />
  );

  const badge = <Badge appearance="secondary">Message</Badge>;

  const meta = <MetaList list={[{ label: 'Alert' }, { label: 'Draft' }]} />;

  return (
    <div className="w-100 p-6 bg-secondary-lightest">
      <PageHeader
        title="Annual Wellness Visit"
        separator={true}
        navigationPosition="center"
        stepper={stepper}
        actions={actions}
        breadcrumbs={breadcrumbs}
        badge={badge}
        meta={meta}
      />
    </div>
  );
};

const customCode = `() => {
  const stepperData = [
    {
      value: 'step_1',
      label: 'Recipients',
    },
    {
      value: 'step_2',
      label: 'Message'
    },
    {
      value: 'step_3',
      label: 'Schedule',
    }
  ];

  const options = [
    {
      label: 'Option 1',
      value: 'Option 1',
    },
    {
      label: 'Option 2',
      value: 'Option 2',
    },
    {
      label: 'Option 3',
      value: 'Option 3',
    }
  ];

  const [active, setActive] = React.useState(2);

  const onChangeHandler = (activeStep) => {
    setActive(activeStep);
  };

  const stepper = <Stepper steps={stepperData} onChange={onChangeHandler} active={active} completed={1} />;

  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Text className="mr-4" appearance="subtle" >Few minutes ago</Text>
      <Avatar className="mr-4" firstName="John" lastName="Doe" appearance="accent2"/>
      <div className="mr-4">
        <Dropdown
          menu={true}
          icon="more_horiz"
          options={options}
        />
      </div>
      <Button className="mr-4">Finish later</Button>
    </div>
  );

  const breadcrumbs = (
    <Breadcrumbs
      list={[{
        label: 'Campaigns',
        link: '/Campaigns'
      }]}
      onClick={link => console.log(\`on-click: \${link}\`)}
    />
  );

  const badge = (
    <Badge appearance="secondary">Message</Badge>
  );

  const meta = (
    <MetaList
      list={[{ label: 'Alert'}, { label: 'Draft' }]}
    />
  );

  return (
    <div className="p-6 bg-secondary-lightest" style={{width:'1200px'}}>
      <PageHeader
        title="Annual Wellness Visit"
        separator={true}
        navigationPosition="center"
        stepper={stepper}
        actions={actions}
        breadcrumbs={breadcrumbs}
        badge={badge}
        meta={meta}
      />
    </div>
  );
}`;

export default {
  title: 'Components/Stepper/Stepper In Page Header',
  component: Stepper,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
