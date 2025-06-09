import { notFound } from 'next/navigation';

const postData = {
  title: '222222222title test',
  body: '333333333body',
  author: '5555555555author',
  // icon: '/favicon.ico' // optional if you want to include icon
};

export const metadata = {
  title: postData.title,
  description: postData.body,
  // icons: {
  //   icon: postData.icon, // Optional, only if defined
  // },
};

export default function PostDetails() {
  // Simulate error
  throw new Error('Something went wrong while loading the post');

  // Alternatively simulate 404
  // notFound();

  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
      <p>Author: {postData.author}</p>
    </div>
  );
}
