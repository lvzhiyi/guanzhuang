import React from 'react';
import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import classNames from 'classnames';
import LoadingIcon from './LoadingIcon';
import './index.less';

export interface BaseButtonProps extends ButtonProps {}

const BaseButton: React.FC<BaseButtonProps> = (props) => {
  const { className, children, loading, ...restProps } = props;

  const loadingIcon = <LoadingIcon existIcon />;

  const childrenNode = loading ? loadingIcon : children;

  return (
    <Button
      className={classNames('base-button', className)}
      loading={loading}
      {...restProps}
    >
      {childrenNode}
    </Button>
  );
};

export default BaseButton;
