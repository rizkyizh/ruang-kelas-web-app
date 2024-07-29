export function parseStatusValue(status: string | null) {
  try {
    // Coba parse sebagai JSON
    if (status === null) return null;
    const statusArray = JSON.parse(status);
    if (Array.isArray(statusArray) && statusArray.length > 0) {
      return statusArray[0].value;
    }
  } catch (e) {
    // Jika bukan JSON, kembalikan sebagai string biasa
    return status;
  }
}

interface FilterItem {
  label: string;
  value: string;
}

interface ParsedFilter {
  [key: string]: FilterItem[];
}

export function parseFilter(filter: string | null) {
  if (filter === null) return undefined;

  const decodedFilter = decodeURIComponent(filter);

  const filterObject: { [key: string]: string } = JSON.parse(decodedFilter);

  function parseNestedJsonStrings(obj: {
    [key: string]: string;
  }): ParsedFilter {
    const parsedObj: ParsedFilter = {};
    for (const key in obj) {
      try {
        parsedObj[key] = JSON.parse(obj[key]);
      } catch (e) {
        parsedObj[key] = [{ label: '', value: '' }];
      }
    }
    return parsedObj;
  }

  const parsedFilterObject: ParsedFilter = parseNestedJsonStrings(filterObject);

  return parsedFilterObject;
}
