import { FetchDataArgs } from 'type/apollo-link-jwt';

export const fetchData = async ({ apiUrl, headers, body }: FetchDataArgs) => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      cache: 'no-cache',
      headers,
      body: JSON.stringify(body),
    });
    console.log('response: ', response);
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};
