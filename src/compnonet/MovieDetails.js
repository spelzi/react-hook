import React from "react";

const MovieDetails = (props) => {
  return (
    <div>
      <p>{props.description}</p>

      <a href="/">back to home</a>
    </div>
  );
};

export default MovieDetails;
