import queryString from "query-string";
import CONFIGS from "./../configs";
export function loadUsers(options) {
  const defaultOptions = {
    page: 1,
    results: 10,
    baseUrl: CONFIGS.BASE_URL,
    seed: CONFIGS.RESULTS_ORDER,
  };
  const { baseUrl, ...realOptions } = { ...defaultOptions, ...options };
  return fetch(`${baseUrl}?${queryString.stringify(realOptions)}`).then(
    (response) => response.json()
  );
}
