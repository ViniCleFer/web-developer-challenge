import { ReactNode, createContext, useState } from 'react';

import { PostValidationSchema } from '@/components/Form';

interface PostProviderProps {
  children: ReactNode;
}

type Post = PostValidationSchema & {
  id: string;
};

interface PostsContext {
  posts: Post[];
  addingPosts: (post: Post) => void;
  removingPosts: (postId: string) => void;
}

export const PostContext = createContext({} as PostsContext);

export function PostContextProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  function addingPosts(post: Post) {
    setPosts((prevPosts) => [...prevPosts, post]);
  }

  function removingPosts(postId: string) {
    setPosts((prevPosts) => [
      ...prevPosts.filter((post) => post.id !== postId),
    ]);
  }

  return (
    <PostContext.Provider
      value={{
        posts,
        addingPosts,
        removingPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
