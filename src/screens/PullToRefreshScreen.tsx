import React, {useContext, useState} from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/ThemeContext';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const {theme} = useContext(ThemeContext);
  const {colors} = theme;

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
            progressBackgroundColor={colors.primary}
            colors={['white', 'red', 'orange']}
            style={currentStyles.refreshControl}
            tintColor={colors.text}
            title="Refreshing"
            titleColor={colors.text}
          />
        }>
        <View style={styles.globalMargin}>
          <HeaderTitle title="Pull To Refresh" avoidTop />
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
