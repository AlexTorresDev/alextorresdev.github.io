export const YouTube = ({ videoId }) => {
  return (
    <iframe
      className="w-5/6 m-auto my-6 aspect-video bg-slate-400 p-1 rounded-sm shadow-md"
      title={videoId}
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  );
};