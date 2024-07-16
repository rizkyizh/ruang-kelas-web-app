import { APP_CONFIG } from '@core/configs/app';
// import { decrypt, encrypt, generateRandomHash } from '../crypto';

function createCombination(name: string) {
  return btoa(`${APP_CONFIG.storage.key}$${name}`);
}

function getNameFromKeys(name: string) {
  return Object.keys(localStorage).filter(key => {
    try {
      return atob(key).includes(name);
    } catch (err) {
      return key.includes(name);
    }
  })[0];
}

export const storage = {
  save: async <T>(name: string, data: T) => {
    try {
      // const key = await generateRandomHash();
      const combination = createCombination(name);

      // const en = await encrypt(data, key);
      // localStorage.setItem(combination, btoa(JSON.stringify({ ...en, key })));
      localStorage.setItem(combination, btoa(JSON.stringify(data)));
    } catch (err) {
      console.error('Something wrong when saving to storage', err);
      throw err;
    }
  },
  get: async <T>(name: string): Promise<T | null> => {
    try {
      const combination = getNameFromKeys(name);
      if (!combination) return null;

      const enString = localStorage.getItem(combination);

      if (!enString) return null;

      // const en = JSON.parse(atob(enString)) as {
      //   iv: string;
      //   encryptedData: string;
      //   key: string;
      // };
      //
      const en = JSON.parse(atob(enString)) as T;

      // const data = await decrypt<T>(en.encryptedData, en.key, en.iv);
      const data = en;

      return data;
    } catch (err) {
      console.error('Something wrong when get data from storage', err);
      throw err;
    }
  },
  delete: async (name: string): Promise<null> => {
    try {
      const combination = getNameFromKeys(name);

      if (combination) {
        localStorage.removeItem(combination);
      }

      return null;
    } catch (err) {
      console.error('Something wrong when delete data from storage', err);
      throw err;
    }
  }
};
