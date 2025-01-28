import { useContext } from 'react';

import { PostContext } from '@/context/posts';

export const usePosts = () => {
  const { posts, addingPosts, removingPosts } = useContext(PostContext);

  return { posts, addingPosts, removingPosts };
};
