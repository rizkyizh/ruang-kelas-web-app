const STYLE_PREFIX = 'hsd-admin';

const getVar = (key: string) => {
  return `var(--${STYLE_PREFIX}-${key})`;
};

export const cssVars = {
  base: {
    borderColor: getVar('base-border-color'),
    textColor: getVar('base-text-color'),
    iconColor: getVar('base-icon-color'),
    placeholderColor: getVar('base-placeholder-color')
  },
  document: {
    bgColor: getVar('document-bg-color')
  },
  sidebar: {
    bgColor: getVar('sidebar-bg-color'),
    borderColor: getVar('sidebar-border-color'),
    maxWidth: getVar('sidebar-max-width'),
    width: getVar('sidebar-width'),
    collapseWidth: getVar('sidebar-collapse-width')
  }
};
