import { useEffect, useState } from "react";
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
    <div>
      {loading && <p>Loading...</p>}
      {!loading && !isPlaying && (
        <div>
          <span>Currently offline</span>
        </div>
      )}
      {!loading && isPlaying && (
        <div>
          <div>
            <span>Now playing</span>
          </div>
          <div>
            <img src={result.albumImageUrl} alt={`${result.title} album art`} />
            <a href={result.songUrl} target="_blank">
              {result.title}
            </a>
            <p>{result.artist}</p>
          </div>
        </div>
      )}
    </div>
  );
};
