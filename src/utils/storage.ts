function set(key: string, value: string) {
  window?.localStorage.setItem(key, value);
}

function get(key: string) {
  const value = window?.localStorage.getItem(key);

  return value;
}

const storageFunctions = { set, get };

export default storageFunctions;
