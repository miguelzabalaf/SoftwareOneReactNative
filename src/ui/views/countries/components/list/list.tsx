import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { Colors, Spacings, View } from 'react-native-ui-lib';
import { useFlatlist } from '../../../../controllers/useFlatlist';
import ListFooter from '../../../../components/listFooter';
import ListEmpty from '../../../../components/listEmpty';
import { Country } from '../../../../../domain/entities/country';
import CountryCard from '../../../../components/countryCard';
import { moderateScale } from 'react-native-size-matters';

interface ListProps {
  data: Array<Country>;
  onPress: ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => void;
  loading: boolean;
  hasError?: boolean;
  onTryAgain: () => void;
  ListHeaderComponent?: React.ComponentType<any> | React.ReactElement | null;
}

export function List(props: ListProps): JSX.Element {
  const { data, onPress, loading, hasError, onTryAgain, ListHeaderComponent } =
    props;
  const {
    // Constants
    initialNumToRender,
    maxToRenderPerBatch,
    showGotoTopButton,
    // States
    data: countriesData,
    allDataRendered,
    flatListRef,
    // Methods
    onEndReached,
    goToTop,
  } = useFlatlist<Country>({
    data,
    hasMoreThan15Items: true,
  });

  return (
    <FlatList
      style={{ flex: 1, paddingHorizontal: moderateScale(10) }}
      stickyHeaderIndices={[0]}
      ref={flatListRef}
      data={loading ? [] : countriesData}
      onRefresh={onTryAgain}
      refreshing={loading}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={onTryAgain}
          colors={[Colors.muted]}
          tintColor={Colors.muted}
        />
      }
      initialNumToRender={initialNumToRender}
      maxToRenderPerBatch={maxToRenderPerBatch}
      updateCellsBatchingPeriod={2000}
      onEndReachedThreshold={0.25}
      onEndReached={onEndReached}
      renderItem={({ item: country }) => (
        <CountryCard
          onPressGoToMap={() =>
            onPress({
              latitude: country.latlng[0],
              longitude: country.latlng[1],
            })
          }
          country={country}
        />
      )}
      ListHeaderComponent={ListHeaderComponent}
      ItemSeparatorComponent={() => <View height={Spacings.s3} />}
      keyExtractor={(_, idx) => idx.toString()}
      ListFooterComponent={
        data?.length > (initialNumToRender ?? 0)
          ? ListFooter({
              allDataRendered,
              goToTop,
              showGotoTopButton,
            })
          : null
      }
      ListEmptyComponent={ListEmpty({ loading, hasError, onTryAgain })}
    />
  );
}
