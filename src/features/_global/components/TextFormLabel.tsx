import { Text, TextProps } from '@hudoro/admin';

interface ITextFormLabel extends TextProps {}

export const TextFormLabel = (props: ITextFormLabel) => {
  return (
    <Text
      {...props}
      fontFamily="Poppins"
      fontSize={props.fontSize || 'sm'}
      fontWeight={props.fontWeight || 'medium'}
      color={props.color || 'gray-700'}
    >
      {props.children}
    </Text>
  );
};
