import { notFound } from 'next/navigation';
import PostCard from '../[postID]/(components)/PostCard';

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

  // Alternatively simulate 404
  // notFound();

  return (
 <PostCard/>
  );
}
