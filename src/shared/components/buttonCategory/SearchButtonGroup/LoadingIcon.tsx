import React from 'react';
import CSSMotion from 'rc-motion';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';

export interface LoadingIconProps {
  existIcon: boolean;
  loading?: boolean;
}
const getCollapsedWidth = () => ({
  width: 0,
  opacity: 0,
  transform: 'scale(0)',
});
const getRealWidth = (node: HTMLElement) => ({
  width: node.scrollWidth,
  opacity: 1,
  transform: 'scale(1)',
});

const LoadingIcon: React.FC<LoadingIconProps> = ({ loading, existIcon }) => {
  const visible = !!loading;

  if (existIcon) {
    return (
      <span className="ant-loading-icon">
        <LoadingOutlined />
      </span>
    );
  }

  return (
    <CSSMotion
      visible={visible}
      motionName="ant-loading-icon-motion"
      removeOnLeave
      onAppearStart={getCollapsedWidth}
      onAppearActive={getRealWidth}
      onEnterStart={getCollapsedWidth}
      onEnterActive={getRealWidth}
      onLeaveStart={getRealWidth}
      onLeaveActive={getCollapsedWidth}
    >
      {(
        {
          className,
          style,
        }: { className?: string; style?: React.CSSProperties },
        ref: any,
      ) => (
        <span
          className="ant-loading-icon self-btn-loading-icon"
          style={style}
          ref={ref}
        >
          <LoadingOutlined className={className} />
        </span>
      )}
    </CSSMotion>
  );
};

export default LoadingIcon;
