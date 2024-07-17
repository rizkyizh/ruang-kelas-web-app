export default function getFileFormat(url?: string): string | null {
  if (!url) {
    throw new Error('URL tidak diberikan');
  }
  // Extract the last segment after the last '/' character
  const segments = url.split('/');
  const lastSegment = segments[segments.length - 1];

  // Extract the file extension after the last '.' character
  const extensionMatch = lastSegment.match(/\.(png|jpg|jpeg|gif|bmp|tiff)$/i);

  // Return the file format if matched, otherwise return null
  return extensionMatch ? extensionMatch[1].toUpperCase() : null;
}
