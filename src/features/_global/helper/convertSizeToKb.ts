export default function convertSize(size: string) {
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
