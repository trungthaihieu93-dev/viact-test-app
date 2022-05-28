function set(key: string, value: any) {
  window?.localStorage.setItem(key, value);
}

function get(key: string) {
  const value = window?.localStorage.getItem(key);

  return value;
}

const storageFunctions = { set, get };

export default storageFunctions;
