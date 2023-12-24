import BasicTable from "@/components/BasicTable";
import EpisodeRow from "@/components/EpisodeRow";
import { fetchCharacter, fetchEpisodes } from "@/lib/apis";
import { Table } from "@mui/joy";
import Link from "next/link";
import React from "react";

type Props = { params: { id: string } };

const CharacterPage = async ({ params }: Props) => {
  const character: Character = await fetchCharacter(params.id);
  const episodeIds = character.episode.map((episode) =>
    episode.substring(episode.lastIndexOf("/") + 1)
  );
  const episodes: Episode[] = await fetchEpisodes(episodeIds);
  return (
    <main className="p-2 flex flex-col justify-center items-center w-96">
      <div className="text-center mt-3 mb-2">
        <h1>{character.name}</h1>
      </div>
      {/* <div className="details"> */}
      <div className="flex justify-center items-center">
        Gender: <strong>{character.gender}</strong>
      </div>
      <div className="flex justify-center items-center">
        Location: <strong>{character?.location?.name}</strong>
      </div>
      <div className="flex justify-center items-center">
        Origin :<strong>{character?.origin?.name}</strong>
      </div>
      <div className="flex justify-center items-center">
        Species :<strong>{character.species}</strong>
      </div>
      {/* </div> */}
      <div className="flex justify-center my-4 mx-auto">
        <img
          className="w-[300px] h-[300px] border-solid border-2 border-cyan-700"
          src={character.image}
          alt={character.name}
        />
      </div>
      <div className="w-full">
        <div className="text-center mt-3 mb-1">
          <h2>Seen in Episodes</h2>
        </div>
        <Table aria-label="basic table" className="w-full">
          <thead>
            <tr>
              <th style={{ width: "40%" }} key={1}>
                Name
              </th>
              <th style={{ width: "20%" }} key={1}>
                Air date
              </th>
              <th style={{ width: "20%" }} key={1}>
                Episode
              </th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((episode, index) => {
              return <EpisodeRow index={index} episode={episode} />;
            })}
          </tbody>
        </Table>
      </div>
    </main>
  );
};

export default CharacterPage;
