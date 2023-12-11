import { fetchCharacter } from "@/lib/apis";
import React from "react";

type Props = { params: { id: string } };

const page = async ({ params }: Props) => {
  console.log("params: " + params.id);
  const character: Character = await fetchCharacter(params.id);
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
      <div className="w-100">
        <div className="text-center mt-3 mb-1">
          <h2>Seen in Episodes</h2>
        </div>
        {/* <Episodes data={charactersEpisodes} /> */}
      </div>
    </main>
  );
};

export default page;
