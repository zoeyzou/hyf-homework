const baseURL = 'https://api.github.com';
const searchUsers = baseURL + '/search/users?q=';
const searchSingleUser = baseURL + '/users/';

export const searchGithubUsers = async (searchTerm: string) => {
  const searchURL = searchUsers + searchTerm;
  const result = await fetch(searchURL);
  return result.json();
};

export const searchGithubUser = async (userId: string) => {
  const searchURL = searchSingleUser + userId;
  const result = await fetch(searchURL);
  return result.json();
};

export const searchGithubUserDetail = async (userId: string, param: string) => {
  const searchURL = searchSingleUser + userId + '/' + param;
  const result = await fetch(searchURL);
  return result.json();
};
