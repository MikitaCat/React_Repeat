import { useMemo } from 'react';

//First User Hook for sorting posts array
export const useSortedPosts = (posts, sort) => {
  //Posts Sorting Algorithm
  const sortedPosts = useMemo(() => {
    console.log('Working on memoized function!');
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
  return sortedPosts;
};

//Second User Hook that return filtred and sorted posts array
export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);
  //Posts Finding Algorithm
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((el) => el.title.toLowerCase().includes(query.toLocaleLowerCase()));
  }, [query, sortedPosts]);
  return sortedAndSearchedPosts;
};
