// TODO: Ada error terkain encrypt decrypt lagi di benenrin ya semetara tanpa encrypt pakai btoa aja

// export async function encrypt<T>(
//   data: T,
//   key: string
// ): Promise<{ iv: string; encryptedData: string }> {
//   const encodedData = new TextEncoder().encode(JSON.stringify(data));
//
//   const iv = window.crypto.getRandomValues(new Uint8Array(16));
//   const ivString = Array.from(iv)
//     .map(byte => String.fromCharCode(byte))
//     .join('');
//
//   const importedKey = await window.crypto.subtle.importKey(
//     'raw',
//     new TextEncoder().encode(key), // Convert string key to Uint8Array
//     { name: 'AES-CBC' },
//     false,
//     ['encrypt']
//   );
//
//   const encryptedData = await window.crypto.subtle.encrypt(
//     {
//       name: 'AES-CBC',
//       iv: iv
//     },
//     importedKey,
//     encodedData
//   );
//
//   const encryptedDataArray = new Uint8Array(encryptedData);
//   const encryptedDataString = Array.from(encryptedDataArray)
//     .map(byte => String.fromCharCode(byte))
//     .join('');
//
//   return { iv: ivString, encryptedData: encryptedDataString };
// }
//
// export async function decrypt<T>(
//   encryptedDataString: string,
//   key: string,
//   ivString: string
// ): Promise<T> {
//   const iv = new Uint8Array(
//     Array.from(ivString).map(char => char.charCodeAt(0))
//   );
//
//   const importedKey = await window.crypto.subtle.importKey(
//     'raw',
//     new TextEncoder().encode(key), // Convert string key to Uint8Array
//     { name: 'AES-CBC' },
//     false,
//     ['decrypt']
//   );
//
//   const encryptedDataArray = new Uint8Array(
//     Array.from(encryptedDataString).map(char => char.charCodeAt(0))
//   );
//
//   const decryptedData = await window.crypto.subtle.decrypt(
//     {
//       name: 'AES-CBC',
//       iv: iv
//     },
//     importedKey,
//     encryptedDataArray
//   );
//
//   const decodedData = new TextDecoder().decode(decryptedData);
//   return JSON.parse(decodedData);
// }
//
// export function simpleEncrypt(data: string): string {
//   // Encode string menjadi base64
//   const encodedString = btoa(data);
//
//   // Ambil kode ASCII dari setiap karakter dalam base64 encoded string
//   let hash = '';
//   for (let i = 0; i < encodedString.length; i++) {
//     hash += encodedString.charCodeAt(i);
//   }
//
//   return hash;
// }
//
// export function simpleDecrypt(hash: string): string {
//   // Konversi hash kembali menjadi nilai integer
//   const parsedHash = parseInt(hash, 10);
//
//   // Membuat base64 encoded string dari hash
//   const encodedString = String.fromCharCode(parsedHash);
//
//   // Decode base64 encoded string
//   const decodedString = atob(encodedString);
//
//   return decodedString;
// }
//
// export async function generateRandomHash(): Promise<string> {
//   try {
//     let randomKey = '';
//     for (let i = 0; i < 16; i++) {
//       // Menghasilkan nilai acak antara 0 hingga 99
//       const randomNumber = Math.floor(Math.random() * 100);
//       // Mengonversi nilai acak menjadi string dengan 2 digit
//       const twoDigitString = randomNumber.toString().padStart(2, '0');
//       // Menggabungkan nilai string ke dalam randomKey
//       randomKey += twoDigitString;
//     }
//     return randomKey;
//   } catch (error) {
//     console.error('Error generating random key:', error);
//     throw error;
//   }
// }
