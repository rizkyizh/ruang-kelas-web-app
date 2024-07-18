import {
  Menu,
  MenuBody,
  MenuButton,
  MenuLists,
  Box,
  Icon,
  Text,
  Pressable,
  IconName,
  useMediaQuery,
  Button
} from '@hudoro/admin';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { useHeaderState } from './hooks';
import { createInitialFromUserName } from '@features/_global/helper';
import { ButtonMenuTable } from '../MenuEllipsisTable/MenuTable';

// const BORDER_COLOR = "rgba(229, 231, 235, 1)";
const BORDER_COLOR = '#d0d6dd';
const BG_COLOR = 'rgba(255, 255, 255, 1)';

export interface HeaderUserData {
  name: string;
  email: string;
}

export interface HeaderButtonProps {
  icon: IconName;
  onClick?: () => void;
  render?: React.ReactNode;
  dot?: boolean;
}
interface HeaderMenusData {
  label: string;
  to?: string;
}
export interface HeaderProps {
  logo?: string;
  userData?: HeaderUserData;
  buttons?: HeaderButtonProps[];
  menus: HeaderMenusData[];
  onClickLogout?: () => void;
  onClickDashboard?: () => void;
  onClickLogin?: () => void;
}

export function Header({
  userData,
  onClickLogout,
  logo,
  buttons = [],
  menus = [],
  onClickDashboard,
  onClickLogin
}: HeaderProps) {
  const state = useHeaderState();
  // const sidebar = useSidebar();
  const navigate = useNavigate();
  const desktop = useMediaQuery('lg');
  const tablet = useMediaQuery('md');

  const initialName = createInitialFromUserName(userData?.name || '');

  const renderButtonList = () => {
    return (
      <Box direction="row" gap="md" align="center">
        {buttons.map((button, i) => {
          if (button.render) {
            return <React.Fragment key={i}>{button.render}</React.Fragment>;
          }

          return (
            <Pressable
              key={i}
              onClick={button.onClick}
              align="center"
              justify="center"
              display="flex"
              position="relative"
            >
              <Icon name={button.icon} size="lg" />
              {button.dot && (
                <Box
                  position="absolute"
                  top="top-0"
                  right="right-0"
                  width="width-2"
                  height="height-2"
                  borderRadius="rounded-full"
                  customBackgroundColor="red"
                />
              )}
            </Pressable>
          );
        })}
      </Box>
    );
  };

  const renderMenuList = () => {
    return (
      <Box direction="row" gap="md" align="center" show={'desktop'}>
        {menus.map((menu, i) => {
          return (
            <Pressable
              key={i}
              onClick={() => {
                if (menu.to) {
                  navigate(menu.to);
                }
              }}
              align="center"
              justify="center"
              display="flex"
              position="relative"
            >
              <Text fontWeight="semibold">{menu.label}</Text>
            </Pressable>
          );
        })}
      </Box>
    );
  };

  return (
    <Box
      top="top-0"
      left="left-0"
      right="right-0"
      height="height-16"
      paddingLeft={
        desktop ? 'spacing-48' : tablet ? 'spacing-24' : 'spacing-10'
      }
      paddingRight={
        desktop ? 'spacing-48' : tablet ? 'spacing-24' : 'spacing-10'
      }
      paddingBottom="sm"
      paddingTop="sm"
      position="fixed"
      borderStyle="border-solid"
      style={{
        zIndex: 1001,
        backgroundColor: BG_COLOR,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderColor: BORDER_COLOR
      }}
    >
      <Box
        direction="row"
        align="center"
        justify="space-between"
        gap="md"
        style={{ height: '100%' }}
      >
        <Box direction="row" align="center" gap="spacing-2">
          {/*  <Pressable cursor="pointer" onClick={sidebar.toggle}>
            <Icon name="MenuBurger" size="lg" />
          </Pressable>*/}
          <Link to="/">
            {logo && <img src={logo} alt="logo" width={140} />}
          </Link>
        </Box>
        <Box direction="row" align="center" gap="md">
          {renderMenuList()}
          {renderButtonList()}
          <Box
            paddingRight="spacing-0"
            paddingLeft="spacing-6"
            borderColor="gray-300"
            borderStyle="border-solid"
            style={{
              borderLeftWidth: '1.3px',
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0
            }}
          >
            <Box width="width-24">
              <Menu position="bottom-right">
                {initialName ? (
                  <MenuButton>
                    <Button primary onClick={state.toggleMobileLogout}>
                      <Text fontFamily="Poppins" color="gray-50" fontSize="sm">
                        Hello, {initialName}
                      </Text>
                    </Button>
                  </MenuButton>
                ) : (
                  <Button primary onClick={onClickLogin}>
                    <Text fontFamily="Poppins" color="gray-50" fontSize="sm">
                      Masuk
                    </Text>
                  </Button>
                )}

                {/*
                <MenuButton>
                  <Box
                    display="flex"
                    direction="row"
                    align="center"
                    gap="sm"
                    cursor="pointer"
                  >
                    <Box direction="row" align="center" gap="sm">
                      <Box
                        width="width-10"
                        height="height-10"
                        bg="blue-200"
                        // padding="sm"
                        borderRadius="rounded-full"
                        align="center"
                        justify="center"
                      >
                        <Text
                          fontWeight="bold"
                          textAlign="center"
                          fontSize="lg"
                          fontFamily="Poppins"
                        >
                          {initial || ''}
                        </Text>
                      </Box>
                      <Box display="flex" show={'desktop'} direction="column">
                        <Text fontSize="md" fontWeight="semibold">
                          {userData?.name || ''}
                        </Text>
                        <Text fontSize="md" color="gray-400">
                          {userData?.email || ''}
                        </Text>
                      </Box>
                    </Box>

                    <Icon name="ChevronDown" size="lg" />
                  </Box>
                </MenuButton>

            */}
                <Box show={'tablet'}>
                  <MenuLists style={{ marginTop: '1.2rem' }}>
                    <MenuBody>
                      <ButtonMenuTable onClick={onClickDashboard}>
                        <Icon name="DocumentClean" size="md" />
                        <Text fontWeight="medium" fontSize="sm" color={'text'}>
                          Dashboard
                        </Text>
                      </ButtonMenuTable>
                    </MenuBody>

                    <MenuBody>
                      <ButtonMenuTable onClick={onClickLogout}>
                        <Icon name="Logout" size="md" />
                        <Text color="red-600" fontWeight="bold" fontSize="sm">
                          Logout
                        </Text>
                      </ButtonMenuTable>
                    </MenuBody>
                  </MenuLists>
                </Box>

                <Box show={'desktop'}>
                  <MenuLists style={{ marginTop: '1.2rem' }}>
                    <MenuBody>
                      <ButtonMenuTable onClick={onClickDashboard}>
                        <Icon name="DocumentClean" size="md" />
                        <Text fontWeight="medium" fontSize="sm" color={'text'}>
                          Dashboard
                        </Text>
                      </ButtonMenuTable>
                    </MenuBody>

                    <MenuBody>
                      <ButtonMenuTable onClick={onClickLogout}>
                        <Icon name="Logout" size="md" />
                        <Text color="red-600" fontWeight="bold" fontSize="sm">
                          Logout
                        </Text>
                      </ButtonMenuTable>
                    </MenuBody>
                  </MenuLists>
                </Box>
              </Menu>
            </Box>
          </Box>
        </Box>
      </Box>
      {state.mobileLogout ? (
        <Box
          show={'mobile'}
          position="fixed"
          bottom="bottom-0"
          padding="lg"
          shadow="shadow-inner"
          left="left-0"
          right="right-0"
          height="height-56"
          borderTopLeftRadius="rounded-4xl"
          borderTopRightRadius="rounded-4xl"
          style={{ backgroundColor: 'white' }}
        >
          <Box
            paddingBottom="lg"
            paddingLeft="sm"
            style={{ borderBottom: '1px solid var(--hsd-ui-color-gray-200)' }}
            onClick={state.toggleMobileLogout}
            cursor="pointer"
          >
            <Text
              color="blue-600"
              fontSize="md"
              fontFamily="Poppins"
              fontWeight="medium"
            >
              Back
            </Text>
          </Box>
          <Box
            paddingTop="md"
            paddingLeft="sm"
            direction="row"
            gap="sm"
            cursor="pointer"
            onClick={onClickLogout}
          >
            <Icon name="Logout" size="md" />
            <Text color="red-600" fontWeight="bold" fontSize="sm">
              Logout
            </Text>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
}
