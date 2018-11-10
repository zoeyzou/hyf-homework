const API_TOKEN = '5f65e03d92d386d3678f9d3f819b0cce1b1827e8';
const API_URL = `https://api.github.com/emojis?access_token=${API_TOKEN}`;

export type Emojis = {
  [name: string]: string | undefined;
};

export const getEmojis = async () => {
  const response = await fetch(API_URL);
  const emojis: Emojis = await response.json();
  return emojis;
};
