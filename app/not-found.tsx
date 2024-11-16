//////////////////////////////////////////////////
// ✅ 2-8. Metadata
// route groups을 사용하여 route들을 정리하는 방법
// metadata object

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not found',
};

export default function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
    </div>
  );
}
