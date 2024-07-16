import { Box, IInputProps, Input, Text } from '@hudoro/admin';
import { ChangeEventHandler } from 'react';
import { TextFormLabel } from './TextFormLabel';

interface IInputForm {
  label: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error?: string;
  inputKey?: string;
  inputProps?: IInputProps;
}

export const InputForm = (props: IInputForm) => {
  return (
    <Box gap="sm" width="width-full">
      <TextFormLabel>{props.label}</TextFormLabel>
      <Input
        {...props.inputProps}
        key={props.inputKey}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && (
        <Text color="error" fontSize="xs">
          {props.error}
        </Text>
      )}
    </Box>
  );
};
