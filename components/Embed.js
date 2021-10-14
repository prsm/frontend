import LiteYouTubeEmbed from 'react-lite-youtube-embed';

export default function Embed({ videoId }) {
  return (
    <div className="rounded overflow-hidden border border-custom">
      <LiteYouTubeEmbed id={videoId} adNetwork={true} poster="hqdefault" title="YouTube Embed" noCookie={true} />
    </div>
  );
}
