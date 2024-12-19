import { Post } from '@/components/Post';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 max-w-5xl mx-auto'>
      <Post />
    </main>
  );
}
