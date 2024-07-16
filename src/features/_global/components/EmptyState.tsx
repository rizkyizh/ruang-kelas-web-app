import Empty from '@core/assets/icons/Empty';
import { Box, Button, Text } from '@hudoro/admin';
import React, { ReactElement } from 'react';

interface EmptyStateProps {
  title?: string;
  children: Array<string>;
  onClickAction?: () => void;
  variant?: 'primary' | 'secondary' | 'success';
  variantTitle?: 'success';
  leftIcon?: ReactElement;
  showButton?: boolean;
  isCustomWidth?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  children,
  onClickAction,
  variant = 'primary',
  variantTitle,
  leftIcon,
  showButton = true,
  isCustomWidth
}) => {
  const renderButton = () => {
    switch (variant) {
      case 'primary':
        return (
          <>
            {leftIcon ? (
              <Button primary iconLeft={leftIcon} onClick={onClickAction}>
                {title}
              </Button>
            ) : (
              <Button primary onClick={onClickAction}>
                {title}
              </Button>
            )}
          </>
        );
      case 'secondary':
        return (
          <>
            {leftIcon ? (
              <Button secondary iconLeft={leftIcon} onClick={onClickAction}>
                {variantTitle ? (
                  <Text
                    fontFamily="Poppins"
                    fontSize="md"
                    fontWeight="medium"
                    style={{ color: 'var(--hsd-ui-utility-success-default)' }}
                  >
                    {title}
                  </Text>
                ) : (
                  title
                )}
              </Button>
            ) : (
              <Button secondary onClick={onClickAction}>
                {title}
              </Button>
            )}
          </>
        );
      case 'success':
        return (
          <>
            {leftIcon ? (
              <Button success iconLeft={leftIcon} onClick={onClickAction}>
                {title}
              </Button>
            ) : (
              <Button success onClick={onClickAction}>
                {title}
              </Button>
            )}
          </>
        );
      default:
        return (
          <>
            {leftIcon ? (
              <Button primary iconLeft={leftIcon} onClick={onClickAction}>
                {title}
              </Button>
            ) : (
              <Button primary onClick={onClickAction}>
                {title}
              </Button>
            )}
          </>
        );
    }
  };

  return (
    <Box
      height="height-full"
      display="flex"
      direction="column"
      gap="sm"
      justify="center"
      align="center"
      marginBlock="auto"
      marginInline="auto"
    >
      <Empty />
      <Box width={isCustomWidth ? 'width-4-5' : 'width-auto'}>
        {children.map((item, index) => (
          <Text
            key={index}
            fontFamily="Poppins"
            fontSize="md"
            fontWeight="medium"
            align="center"
            textAlign="center"
          >
            {index > 1 ? null : item}
          </Text>
        ))}
      </Box>
      {showButton ? renderButton() : null}
    </Box>
  );
};

export default EmptyState;
