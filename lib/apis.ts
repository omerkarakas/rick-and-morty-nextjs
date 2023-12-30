import { apiCharacters, apiEpisodes } from "./constants";

export const fetchEpisode = async (id: string): Promise<Episode> => {
  const response = await fetch(apiEpisodes + id);
  const data = await response.json();
  return data;
};

export const fetchEpisodes = async (ids: string[]): Promise<Episode[]> => {
  const response = await fetch(apiEpisodes + ids);
  const data = await response.json();
  return data;
};

export const fetchAllEpisodes = async (): Promise<Episode[]> => {
  let episodes: Episode[] = [];
  let nextUrl = apiEpisodes;

  do {
    const response = await fetch(nextUrl);
    const data = await response.json();
    episodes.push(...data.results);
    nextUrl = data.info.next;
  } while (nextUrl);

  // add season field, Season 1, Season 2, Season 3 ...
  episodes.forEach((listItem) => {
    listItem["season"] = "Season " + Number(listItem.episode.slice(1, 3));
  });

  return episodes;
};

export const fetchCharacter = async (id: string): Promise<Character> => {
  const response = await fetch(apiCharacters + id);
  const data = await response.json();
  return data;
};
