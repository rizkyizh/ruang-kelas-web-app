export function buildHeaders(
  headerEntries: [string, string][]
): Record<string, string> {
  const headers: Record<string, string> = {};

  headerEntries.forEach(([key, value]) => {
    if (key && value) {
      headers[key] = value;
    }
  });

  return headers;
}
