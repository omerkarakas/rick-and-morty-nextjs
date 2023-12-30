import EpisodeRow from "@/components/EpisodeRow";
import Episodes from "@/components/Episodes";
import { fetchAllEpisodes } from "@/lib/apis";

export default async function Home() {
  const episodes: Episode[] = await fetchAllEpisodes();
  console.log("episodes: ", episodes);
  return (
    <div className="flex flex-row justify-center py-24 h-fit">
      <Episodes episodes={episodes} />
    </div>
  );
}
