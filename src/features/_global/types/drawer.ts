type action = 'CREATE' | 'UPDATE';

export interface ICreationDrawerAtomModel<T> {
  show: boolean;
  action: action;
  dataState: T;
}

export interface ISingleActionDrawerAtomModel<T> {
  show: boolean;
  dataState?: T;
}
