export function getItem(key: string): string | null {
  const data = window.localStorage.getItem(key);
  return data ? JSON.stringify(data) : data;
}

export function setItem(key: string, data: string | [] | object) {
  const dat = JSON.stringify(data);
  window.localStorage.setItem(key, dat);
}
