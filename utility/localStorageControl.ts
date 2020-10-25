export function getItem(key: string): string | null {
  const data = window.localStorage.getItem(key);
  return data ? JSON.stringify(data) : data;
}

export function setItem(
  key: string,
  data: string | [] | Record<string, any>
): void {
  const dat = JSON.stringify(data);
  window.localStorage.setItem(key, dat);
}
