import { useCallback, useRef } from "react";

interface UseInfiniteScrollProps {
  isFetching: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
}

export const useInfiniteScroll = ({
  isFetching,
  hasMore,
  onLoadMore,
}: UseInfiniteScrollProps) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (isFetching) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          onLoadMore();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isFetching, hasMore, onLoadMore]
  );

  return lastElementRef;
};
