import MovieCard from './MovieCard'

const MovieList = ({title, moviesData}) => {
  return (
    <div className='px-6'>
      <h1 className='text-xl md:text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
                {moviesData && moviesData.map((movie) => <MovieCard key={movie.id} poster_path={movie.poster_path}/>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList