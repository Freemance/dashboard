import React from 'react';
import { IconProps } from 'react-feather';

interface IProps {
  icon: React.FunctionComponent<IconProps>;
}

const WrappIcon: React.FC<IProps> = ({ icon: Icon }: IProps) => <Icon />;

export default WrappIcon;
