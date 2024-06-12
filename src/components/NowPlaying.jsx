import { useEffect, useState } from "react";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import getNowPlayingItem from "../apis/spotify";

export const NowPlaying = (props) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);

  const fetchNowPlaying = () => {
    getNowPlayingItem(props.client_id, props.client_secret, props.refresh_token)
      .then((result) => {
        setResult(result);
        setLoading(false);
        setIsPlaying(result.isPlaying);
      })
      .catch((error) => {
        console.error("Error fetching now playing item:", error);
      });
  };

  useEffect(() => {
    fetchNowPlaying();
  }, [props.client_id, props.client_secret, props.refresh_token]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchNowPlaying();
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex h-8 w-screen justify-center bg-emerald-950/60 text-slate-300 shadow backdrop-blur-md">
      {loading && (
        <p className="w-fit self-center text-center text-xs">Loading...</p>
      )}
      {!loading && !isPlaying && (
        <div className="my-2 flex w-fit self-center truncate">
          <div className="mx-1 self-center">
            <BiSolidBarChartAlt2 size={20} />
          </div>
          <p className="w-fit self-end text-xs">Currently Offline</p>
        </div>
      )}
      {!loading && isPlaying && (
        <div className="min-w-screen my-2 flex h-full items-center justify-center self-center truncate">
          <div className="flex self-center max-sm:hidden">
            <p className="mr-1 flex-shrink-0 self-end font-fkDisplay text-xs">
              Now Listening to
            </p>
          </div>
          <div className="flex self-center">
            <BiSolidBarChartAlt2 size={18} />
            <img
              src={result.albumImageUrl}
              alt={`${result.title} album art`}
              className="mx-1 size-5 self-end rounded-md"
            />
            <div className="flex self-center overflow-x-scroll text-xs font-bold">
              <a
                href={result.songUrl}
                target="_blank"
                className="font-medium max-md:w-40"
              >
                {result.title} • {result.artist}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
