import Image from "next/image";
import React from "react";
import { AiFillHeart } from "react-icons/ai";

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movieData = await res.json();
  return (
    <div className=" w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-5xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movieData.backdrop_path || movieData.poster_path
          }`}
          width={500}
          height={300}
          alt="movie image"
          className=" rounded-lg"
          // placeholder='blur'
          style={{ maxWidth: "100%", height: "100%" }}
        ></Image>
      </div>
      <div className="p-2">
        <h1 className=" text-lg mb-3">
          Movie:{movieData.title || movieData.name}
        </h1>
        <p className="mb-3 text-lg">
          <span className=" font-semibold mr-1">Overview : </span>
          {movieData.overview}
        </p>
        <p className="p-2">
          <span className=" font-semibold mr-1">Release Date : </span>
          {movieData.first_air_date || movieData.release_date}
        </p>

        <p className=" flex items-center p-2">
          <span className=" font-semibold mr-1">Rating : </span>
          <AiFillHeart className=" text-red-500 ml-3 mr-1" />
          {movieData.vote_count}{" "}
        </p>
      </div>
    </div>
  );
};

export default MoviePage;
