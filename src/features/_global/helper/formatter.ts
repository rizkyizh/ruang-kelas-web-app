export function createInitialFromUserName(name: string) {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();
}

export const formatDateToIndonesian = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  };

  // Use 'id-ID' locale for Indonesian language
  return date.toLocaleDateString('id-ID', options);
};

export const parseIndonesianDateToDate = (dateString: string): Date | null => {
  const monthNames: { [key: string]: number } = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    Mei: 4,
    Jun: 5,
    Jul: 6,
    Agu: 7,
    Sep: 8,
    Okt: 9,
    Nov: 10,
    Des: 11
  };

  const dateParts = dateString.split(' ');

  if (dateParts.length !== 3) {
    return null; // Return null if the format is incorrect
  }

  const day = parseInt(dateParts[0], 10);
  const month = monthNames[dateParts[1]];
  const year = parseInt(dateParts[2], 10);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return null; // Return null if parsing fails
  }

  return new Date(year, month, day);
};

export function convertSize(size: string) {
  const sizeLower = size.toLowerCase();
  const units = ['kb', 'mb', 'gb'];
  for (const unit of units) {
    if (sizeLower.endsWith(unit)) {
      return size;
    }
  }
  // Jika sudah dalam format angka, langsung konversi ke 'Kb'
  return `${Math.ceil(Number(size) / 1000)}Kb`;
}
