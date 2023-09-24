import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({searchParams}) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 100000 } }
  );

  // if (!res.ok) {
  //   console.log(Error)
  //   throw new Error("Failed to load movies");
  // }
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {/* <h1 className="text-center text-red-400 bg-red-500">
        hi
      </h1> */}
      <Results results={results} />
    </div>
  );
}
