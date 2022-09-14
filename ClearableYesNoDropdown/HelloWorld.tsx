import * as React from 'react';
import { Label, Dropdown, IDropdownOption, Icon, FontIcon, IconButton, Stack, IStackTokens, IDropdownStyles } from '@fluentui/react';
import { IInputs } from './generated/ManifestTypes';

export interface IHelloWorldProps {
  context: ComponentFramework.Context<IInputs>;
}

export const HelloWorld: React.FC<IHelloWorldProps> = (props: IHelloWorldProps) => {

  const onRenderCaretDown = (): JSX.Element => {
    return <Icon iconName="CalculatorMultiplyIcon" />;
  };
  const stackTokens: IStackTokens = { childrenGap: 30 };
  const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: 300 }};
  const [selectedValue, setSelectedValue] = React.useState(props.context.parameters.yesNoProperty?.raw);
  const items: IDropdownOption[] = [
    { key: 0, text: 'No' },
    { key: 1, text: 'Yes' }
  ];
  const onDropdownChange = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption<any> | undefined, index?: number | undefined) => {
    if(option != null && option?.key !== null){
      let valueSelected = option.key === 0 ? false : true;
      props.context.parameters.yesNoProperty.raw = valueSelected;
      setSelectedValue(Boolean(valueSelected));
    }
    else{
      props.context.parameters.yesNoProperty.raw = Boolean(null);
      setSelectedValue(Boolean(null));
    }
  }
  const dropdownRef = React.useRef();

  return (
    <Stack horizontal tokens={stackTokens} >
      <Dropdown
        options={items}
        styles={dropdownStyles}
        selectedKey={selectedValue === null ? -1 : Number(selectedValue)}
        onChange={onDropdownChange}
      />


        <IconButton
          iconProps={{ iconName: 'Info' }}
          title="Info"
          ariaLabel="Info"
          onClick={() => setSelectedValue(Boolean(null))}
        />     
        
    </Stack>
  )
}
