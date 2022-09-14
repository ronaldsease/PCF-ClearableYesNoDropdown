import * as React from 'react';
import { Label } from '@fluentui/react';

export interface IHelloWorldProps {
  name?: string;
}

export const HelloWorld : React.FC<IHelloWorldProps> = (props: IHelloWorldProps) => {
    return (
      <Label>
        {props.name}
      </Label>
    )
}
