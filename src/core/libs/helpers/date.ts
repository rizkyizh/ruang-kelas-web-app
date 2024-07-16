export function diffSecond(targetDate: Date) {
  const currentDate = new Date();
  const targetDateTime = new Date(targetDate);
  const diffInSeconds = Math.floor(
    ((targetDateTime as unknown as number) -
      (currentDate as unknown as number)) /
      1000
  );

  return diffInSeconds;
}

export function formatTime(totalSeconds: number): string {
  const days: number = Math.floor(totalSeconds / (3600 * 24));
  const hours: number = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes: number = Math.floor((totalSeconds % 3600) / 60);
  const seconds: number = totalSeconds % 60;

  const padZero = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

  let formattedTime = '';
  if (days > 0) {
    formattedTime += `${days} ${days === 1 ? 'Day' : 'Days'}, `;
  }

  if (hours > 0) {
    formattedTime += `${padZero(hours)}:`;
  }

  formattedTime += `${padZero(minutes)}:${padZero(seconds)}`;

  return formattedTime;
}


export const formatDateToIndonesian = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  };

  // Use 'id-ID' locale for Indonesian language
  return date.toLocaleDateString('id-ID', options);
};


export const convertToDate = (timestamp?: number) => {
  if (timestamp === undefined) {
    return 'Tanggal tidak valid';
  }

  const bulanIndonesia: string[] = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
  ];

  const tanggal: Date = new Date(timestamp);
  const hari: number = tanggal.getDate();
  const bulan: string = bulanIndonesia[tanggal.getMonth()];
  const tahun: number = tanggal.getFullYear();

  return `${hari} ${bulan} ${tahun}`;
};

export function formatDateWithoutTime(isoDate: string): string {
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
  ];

  const date = new Date(isoDate);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day < 10 ? `0${day}` : day} ${months[monthIndex]} ${year}`;
}