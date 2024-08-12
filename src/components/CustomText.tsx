import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

interface CustomTextProps {
  children: React.ReactNode;
  fontSize?: string;
  color?: string;
  className?:string
}

const CustomText: React.FC<CustomTextProps> = ({ children, fontSize, color,className }) => {
  return (
    <Text
      className={`${className} ${fontSize ? fontSize : 'text-sm'} ${color ? color : 'text-black'} font-serif uppercase`}
    >
      {children}
    </Text>
  );
};

export default CustomText;
