import { API_KEY,API_BASE_URL } from "./config";

export function buildUrl({endpoint,queryParameters}) {
  const url = new URL(`${API_BASE_URL}${endpoint}`);
  url.searchParams.append('api_key', API_KEY);
  Object.entries(queryParameters)?.forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== '' ) {
      url.searchParams.append(key, value.toString());
    }
  });
  return url;
}