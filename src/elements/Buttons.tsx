import React from 'react';
import './styling/buttons.scss';

export interface Props {
  children: any;
}

const DefaultButton = ({ children }: Props) => {
  return <button className="default-button">{children}</button>
}

export { DefaultButton };