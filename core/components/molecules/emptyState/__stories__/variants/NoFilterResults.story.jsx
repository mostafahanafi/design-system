import * as React from 'react';
import { EmptyState, Button } from '@/index';
import noContent from '../assets/file-not-found.svg';

export const noFilterResults = () => {
  return (
    <EmptyState>
      <EmptyState.Image src={noContent}></EmptyState.Image>
      <EmptyState.Title>No results match your criteria</EmptyState.Title>
      <EmptyState.Description>Try adjusting your filters to find what you are looking for.</EmptyState.Description>
      <EmptyState.Actions>
        <Button>Clear filters</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
};

const ImagePath = JSON.stringify(noContent);

const customCode = `() => {
  return (
      <EmptyState>
        <EmptyState.Image src={${ImagePath}}></EmptyState.Image>
        <EmptyState.Title>No results match your criteria</EmptyState.Title>
        <EmptyState.Description>Try adjusting your filters to find what you are looking for.</EmptyState.Description>
        <EmptyState.Actions>
          <Button>Clear filters</Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}`;

export default {
  title: 'Components/EmptyState/Variants/No Filter Results',
  component: EmptyState,
  subcomponents: {
    'EmptyState.Image': EmptyState.Image,
    'EmptyState.Title': EmptyState.Title,
    'EmptyState.Description': EmptyState.Description,
    'EmptyState.Actions': EmptyState.Actions,
  },
  parameters: {
    docs: {
      docPage: {
        title: 'EmptyState',
        customCode,
      },
    },
  },
};
