import { Text, Box } from '@hudoro/admin';

type FontSizeType =
  | 'lg'
  | 'xs'
  | 'sm'
  | 'md'
  | '2xl'
  | 'xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | undefined;

export default function UIisLoading({
  width,
  fontSize = '2xl'
}: {
  width?: string;
  fontSize?: FontSizeType;
}) {
  return (
    <Box
      display="flex"
      direction="row"
      align="center"
      justify="center"
      style={{ minHeight: width ? width : 'calc(100vh - 163px' }}
    >
      <Text fontFamily="Poppins" fontSize={fontSize}>
        Loading...
      </Text>
    </Box>
  );
}
