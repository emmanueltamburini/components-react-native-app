import React, {useState} from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setData('Data from refreshing');
      setRefreshing(false);
    }, 3000);
  };

  return (
    <SafeAreaView style={currentStyles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressViewOffset={10}
            progressBackgroundColor="#5856D6"
            colors={['white', 'red', 'orange']}
            style={currentStyles.refreshControl}
            tintColor="white"
            title="Refreshing"
            titleColor="white"
          />
        }>
        <View style={styles.globalMargin}>
          <HeaderTitle title="PullToRefreshScreen" avoidTop />
          {data && <HeaderTitle title={data} />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const currentStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  refreshControl: {
    backgroundColor: '#5856D6',
  },
});
