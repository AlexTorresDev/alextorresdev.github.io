export const YouTube = ({ videoId }) => {
    return (
      <iframe
          title={videoId}
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
    );
  };