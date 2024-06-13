import { PodcastCard } from "@/components/PodcastCard";
import { Heading } from "@/components/heading";
import { podcastData } from "@/constant";

type HomeProps = {};

function Home(props: HomeProps) {
  const {} = props;

  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <Heading title="Trending Podcast" />
        <div className="podcast_grid">
          {podcastData.map((podcast) => (
            <PodcastCard podcast={podcast} key={podcast.id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
