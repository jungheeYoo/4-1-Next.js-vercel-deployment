// //////////////////////////////////////////////////
// // ✅ 4-2. Movie Styles
// // 컴포넌트 분리, useRouter 사용 ~

// 'use client';

// import Link from 'next/link';
// import styles from '../styles/movie.module.css';
// import { useRouter } from 'next/navigation';

// interface IMovieProps {
//   title: string;
//   id: string;
//   poster_path: string;
// }

// export default function Movie({ title, id, poster_path }: IMovieProps) {
//   const router = useRouter();
//   const onClick = () => {
//     router.push(`/movies/${id}`);
//   };
//   return (
//     <div className={styles.movie}>
//       <img src={poster_path} alt={title} onClick={onClick} />
//       <Link href={`/movies/${id}`}>{title}</Link>
//     </div>
//   );
// }

//////////////////////////////////////////////////
// ✅ 4-5. Deployment
// API_URL 수정, prefetch

'use client';

import Link from 'next/link';
import styles from '../styles/movie.module.css';
import { useRouter } from 'next/navigation';

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </div>
  );
}
