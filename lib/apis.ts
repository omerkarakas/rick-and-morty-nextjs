import { apiCharacters, apiEpisodes } from "./constants";

export const fetchEpisode = async (id: string): Promise<Episode> => {
  const response = await fetch(apiEpisodes + id);
  const data = await response.json();
  return data;
};

export const fetchCharacter = async (id: string): Promise<Character> => {
  const response = await fetch(apiCharacters + id);
  const data = await response.json();
  return data;
};
