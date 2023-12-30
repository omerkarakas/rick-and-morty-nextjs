"use client";
import React, { useEffect, useState } from "react";
import EpisodeRow from "./EpisodeRow";
import Avatar from "@mui/joy/Avatar";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

type Props = { episodes: Episode[] };

const initialObject = { name: "omer", id: 1 };
const initialArray = [initialObject];
const initialSeason = "Season 1";
const initialSeasonArray = [initialSeason];

const Episodes = ({ episodes }: Props) => {
  const [selectedSeason, setSelectedSeason] = useState(initialSeason);
  const [currentEpisodeId, setCurrentEpisodeId] = useState(-1);
  const [selectedSeasonsEpisodes, setSelectedSeasonsEpisodes] =
    useState(episodes);
  const [seasons, setSeasons] = useState(initialSeasonArray);

  useEffect(() => {
    setSelectedSeasonsEpisodes(
      episodes.filter((episode) => episode.season === selectedSeason)
    );
  }, [selectedSeason]);

  useEffect(() => {
    setSeasons(Array.from(new Set(episodes.map((obj) => obj.season))));
  }, [episodes]);

  return (
    <main className="main-home">
      <div className="seasons-container">
        <FormControl className="flex flex-col justify-center items-center gap-5">
          <RadioGroup
            overlay
            name="season"
            orientation="horizontal"
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
            sx={{ gap: 2 }}
          >
            {seasons.map((season) => (
              <Sheet
                component="label"
                key={season}
                variant="outlined"
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: "sm",
                  borderRadius: "md",
                }}
              >
                <Radio
                  value={`${season}`}
                  variant="soft"
                  sx={{
                    mb: 2,
                  }}
                />
                {/* <Avatar alt={`person${num}`} src={`/static/images/avatar/${num}.jpg`} /> */}
                <Typography level="body-sm" sx={{ mt: 1 }}>
                  {season}
                </Typography>
              </Sheet>
            ))}
          </RadioGroup>
        </FormControl>
        {/*         
        <Radio.Group
          value={selectedSeason}
          onChange={(e) => setSelectedSeason(e.target.value)}
          optionType="button"
          buttonStyle="solid"
          color="red"
          type="primary"
        >
          {seasons.map((season, index) => {
            return (
              <Radio.Button value={season} key={index}>
                {season}
              </Radio.Button>
            );
          })}
        </Radio.Group> */}
      </div>
      <h1>Episodes</h1>
      <table>
        <tbody>
          {selectedSeasonsEpisodes &&
            selectedSeasonsEpisodes?.map((episode, index) => {
              return <EpisodeRow index={index} episode={episode} />;
            })}
        </tbody>
      </table>

      {/* <Episodes data={selectedSeasonsEpisodes} /> */}
    </main>
  );
};

export default Episodes;
