import * as React from 'react';
import classNames from 'classnames';
import { TIconPosition, TSize2Hierarchy } from '../common.type';
import SaraIconTop from './icons/SaraIconTop';
import SaraIconBottom from './icons/SaraIconBottom';
import SaraDisabledTop from './icons/SaraDisabledTop';
import SaraDisabledBottom from './icons/SaraDisabledBottom';

interface SaraIconProp {
  size: TSize2Hierarchy;
  position: TIconPosition;
  disabled?: boolean;
}

export const SaraIcon = (props: SaraIconProp) => {
  const { size, position, disabled } = props;

  const AIIconClassNames = classNames({
    'AIIconButton-AIIcon': true,
    'AIIconButton-AIIcon--largeTop': position === 'top' && size === 'large',
    'AIIconButton-AIIcon--regularTop': position === 'top' && size === 'regular',
    'AIIconButton-AIIcon--regularBottom': position === 'bottom' && size === 'regular',
    'AIIconButton-AIIcon--largeBottom': position === 'bottom' && size === 'large',
  });

  if (disabled && position === 'bottom') {
    return <SaraDisabledBottom className={AIIconClassNames} />;
  }

  if (disabled && position === 'top') {
    return <SaraDisabledTop className={AIIconClassNames} />;
  }

  if (position === 'bottom') {
    return <SaraIconBottom className={AIIconClassNames} />;
  }

  return <SaraIconTop className={AIIconClassNames} />;
};

SaraIcon.defaultProps = {
  size: 'regular',
  position: 'top',
};

export default SaraIcon;