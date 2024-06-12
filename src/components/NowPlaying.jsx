import { useEffect, useState } from "react";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import getNowPlayingItem from "../apis/spotify";

export const NowPlaying = (props) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    getNowPlayingItem(
      props.client_id,
      props.client_secret,
      props.refresh_token,
    ).then((result) => {
      setResult(result);
      setLoading(false);
      setIsPlaying(result.isPlaying); // Assuming result has an `isPlaying` property
    });
  }, [props.client_id, props.client_secret, props.refresh_token]);

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
        <div className="my-2 flex h-full w-fit self-center truncate">
          <div className="flex self-center">
            <p className="mr-1 self-end text-xs">Listening to</p>
            <BiSolidBarChartAlt2 size={20} />
          </div>
          <div className="flex self-center">
            <img
              src={result.albumImageUrl}
              alt={`${result.title} album art`}
              className="mx-1 size-5 self-end rounded-md"
            />
            <div className="flex self-end text-xs font-bold">
              <a href={result.songUrl} target="_blank" className="font-bold">
                {result.title}
              </a>
              <p className="ml-1">• {result.artist}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
