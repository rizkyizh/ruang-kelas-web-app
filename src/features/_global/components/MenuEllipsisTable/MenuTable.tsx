import {
  Menu,
  Button,
  Icon,
  Text,
  MenuButton,
  MenuLists,
  IMenuProps,
  Box
} from '@hudoro/admin';
import { ReactNode, useState } from 'react';

interface IMenuEllipsisTableProps {
  position?: IMenuProps['position'];
  onClickDetail?: () => void;
  onClickUpdate?: () => void;
  onClickDelete?: () => void;
  isDetailAction?: boolean;
  isUpdateAction?: boolean;
  isDeleteAction?: boolean;
  titleActionCustom?: {
    detail?: string,
    update?: string,
    delete?: string
  }

}

interface IButtonMenuTableProps {
  children: ReactNode;
  onClick?: () => void;
}

export const ButtonMenuTable: React.FC<IButtonMenuTableProps> = ({
  children,
  onClick
}) => {
  const [hover, setHover] = useState<string>('');

  return (
    <Box
      fullWidth
      height="height-8"
      paddingRight="spacing-4"
      paddingLeft="spacing-3"
      display="flex"
      direction="row"
      align="center"
      gap="spacing-1"
      cursor="pointer"
      onClick={onClick}
      onMouseEnter={() => setHover('#E6E9FB')}
      borderRadius="rounded-base"
      onMouseLeave={() => setHover('')}
      style={{ backgroundColor: hover }}
    >
      {children}
    </Box>
  );
};

const MenuTable = ({
  position = 'bottom-right',
  onClickDetail,
  onClickUpdate,
  onClickDelete,
  isDetailAction = true,
  isUpdateAction = true,
  isDeleteAction = true,
  titleActionCustom
}: IMenuEllipsisTableProps) => {
  return (
    <Menu position={position}>
      <MenuButton>
        <Button size="xs" secondary>
          <Icon name="MenuHorizontal" size="sm" />
        </Button>
      </MenuButton>
      <MenuLists
        style={{
          gap: 0,
          zIndex: 10,
          width: '150px',
          paddingBlock: '8px',
          paddingInline: '8px'
        }}
      >
        {onClickDetail && isDetailAction ? (
          <ButtonMenuTable onClick={onClickDetail}>
            <Icon name="DocumentClean" size="md" />
            <Text fontWeight="medium" fontSize="sm" color={'text'}>
              {titleActionCustom?.detail ? titleActionCustom.detail : "Detail"}
            </Text>
          </ButtonMenuTable>
        ) : null}
        {onClickUpdate && isUpdateAction ? (
          <ButtonMenuTable onClick={onClickUpdate}>
            <Icon name="Edit1" size="md" />
            <Text fontWeight="medium" fontSize="sm" color={'text'}>
              {titleActionCustom?.update ? titleActionCustom.update : "Update"}
            </Text>
          </ButtonMenuTable>
        ) : null}
        {onClickDelete && isDeleteAction ? (
          <ButtonMenuTable onClick={onClickDelete}>
            <Icon
              name="Trash1"
              size="md"
              // color="var(--hsd-ui-utility-danger-default)"
              style={{ color: 'var(--hsd-ui-utility-danger-default)' }}
            />
            <Text
              fontWeight="medium"
              fontSize="sm"
              style={{ color: 'var(--hsd-ui-utility-danger-default)' }}
            >
              {titleActionCustom?.delete ? titleActionCustom.delete : "Delete"}
            </Text>
          </ButtonMenuTable>
        ) : null}
      </MenuLists>
    </Menu>
  );
};

export default MenuTable;
