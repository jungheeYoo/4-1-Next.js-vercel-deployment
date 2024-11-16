//////////////////////////////////////////////////
// ✅ 4-2. Movie Styles
// 컴포넌트 분리, useRouter 사용

import Movie from '../../components/movie';
import styles from '../../styles/home.module.css';
import { API_URL } from '../contants';

export const metadata = {
  title: 'Home',
};

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
  // return fetch(API_URL).then((Response) => Response.json());
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
