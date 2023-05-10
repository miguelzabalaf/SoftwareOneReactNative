import { useRef, useState } from 'react';
import { FlatList } from 'react-native';

export interface FlatListProps<T> {
  data: Array<T>;
  hasMoreThan15Items?: boolean;
}

export function useFlatlist<T>(props: FlatListProps<T>) {
  // Props
  const { data, hasMoreThan15Items } = props;

  // Constants
  const initialNumToRender = hasMoreThan15Items ? 15 : undefined;
  const maxToRenderPerBatch = hasMoreThan15Items ? 15 : undefined;
  const updateCellsBatchingPeriod = hasMoreThan15Items ? 2000 : undefined;
  const onEndReachedThreshold = hasMoreThan15Items ? 0.25 : undefined;
  const showGotoTopButton = hasMoreThan15Items ? true : false;

  // States
  const [allDataRendered, setAllDataRendered] = useState(false);
  const flatListRef = useRef<FlatList<T>>(null);

  // Methods
  function onEndReached() {
    setAllDataRendered(true);
  }

  function goToTop() {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  }

  return {
    // Constants
    initialNumToRender,
    maxToRenderPerBatch,
    updateCellsBatchingPeriod,
    onEndReachedThreshold,
    // States
    data,
    flatListRef,
    allDataRendered,
    showGotoTopButton,
    // Methods
    goToTop,
    onEndReached,
  };
}
