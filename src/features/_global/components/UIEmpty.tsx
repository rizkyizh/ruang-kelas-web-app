import { Text, Box, Flex } from '@hudoro/admin';
import Grid from '@core/assets/icons/Grid';
import { ReactNode } from 'react';

interface IUIEmpty {
  button?: ReactNode;
  message: string;
  message2?: string;
  minHeight?: string;
}

export function UIEmpty(props: IUIEmpty) {
  return (
    <Box
      display="flex"
      align="center"
      justify="center"
      style={{ minHeight: props.minHeight ?? 'calc(100vh - 163px' }}
    >
      <Box
        display="flex"
        justify="center"
        align="center"
        width="width-full"
        height="height-full"
        gap="spacing-4"
      >
        <Box position="relative">
          <Box
            width="width-64"
            height="height-12"
            borderRadius="rounded-sm"
            borderWidth="border-2"
            borderStyle="border-solid"
            borderColor="gray-100"
            bg="text-light"
            style={{
              zIndex: 99
            }}
            display="flex"
            direction="row"
            align="center"
            padding="spacing-3"
            gap="spacing-2"
          >
            <Grid width={24} height={24} />

            <Flex direction="column" justify="center" gap="spacing-1">
              <Box
                width="width-16"
                height="height-2"
                borderRadius="rounded-full"
                style={{
                  background:
                    'linear-gradient(to left, #FFFFFF, rgba(209, 208, 208, 1))'
                }}
              ></Box>
              <Box
                width="width-16"
                height="height-2"
                borderRadius="rounded-full"
                style={{
                  background:
                    'linear-gradient(to left, #FFFFFF, rgba(209, 208, 208, 1))'
                }}
              ></Box>
            </Flex>
          </Box>
          <Box
            width="width-64"
            height="height-12"
            position="absolute"
            borderRadius="rounded-sm"
            bg="gray-100"
            style={{
              borderColor: 'transparent',
              bottom: '-5px',
              right: '-10px'
            }}
            borderStyle="border-solid"
            borderWidth="border"
          ></Box>
        </Box>
        <Box style={{ color: 'var(--hsd-ui-text-default)' }}>
          <Text
            textAlign="center"
            style={{ color: 'var(--hsd-ui-text-default)' }}
            fontWeight="medium"
          >
            {props.message}
          </Text>
          {props.message2 && (
            <Text
              textAlign="center"
              style={{ color: 'var(--hsd-ui-text-default)' }}
              fontWeight="medium"
            >
              {props.message2}
            </Text>
          )}
        </Box>
        {props.button}
      </Box>
    </Box>
  );
}
