export const AUTH_UPDATED_EVENT = 'authUpdated';

export const emitAuthUpdated = () => {
  const event = new CustomEvent(AUTH_UPDATED_EVENT);
  window.dispatchEvent(event);
};
