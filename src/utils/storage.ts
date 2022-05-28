export function set<T>(key: string, value: T) {
  window?.localStorage.setItem(key, JSON.stringify(value));
}

export function get(key: string) {
  const value = window?.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }

  return null;
}
