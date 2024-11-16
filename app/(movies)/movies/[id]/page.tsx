//////////////////////////////////////////////////
// ✅ 4-4. Dynamic Metadata

import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

interface IParams {
  params: { id: string };
}

// 🔶 이 함수는 fetching 을 할 수 있게 해주는 함수
// 이 함수는 동적인 제목을 갖고 있는 페이지를 위해 존재함
// 이 페이지는 id 값에 따라 동적이기 때문에 페이지 이름, 제목이 바뀌어야함
// movie fetch
export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos </h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
