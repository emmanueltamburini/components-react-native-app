import React from 'react';
import {View, StyleSheet, SectionList, Text} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ItemSeparator} from '../components/ItemSeparator';

interface Editorials {
  casa: string;
  data: string[];
}

const editorials: Editorials[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Wonder Woman',
      'The Flash',
      'Green Lantern',
      'Aquaman',
      'Martian Manhunter',
      'Batgirl',
      'Cyborg',
      'Nightwing',
      'Green Arrow',
      'Black Canary',
      'Red Hood',
      'Swamp Thing',
      'Hawkman',
      'Batwoman',
      'Blue Beetle',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Iron Man',
      'Spider-Man',
      'Captain America',
      'Hulk',
      'Thor',
      'Black Widow',
      'Hawkeye',
      'Ant-Man',
      'Wasp',
      'Doctor Strange',
      'Black Panther',
      'Captain Marvel',
      'Scarlet Witch',
      'Vision',
      'Quicksilver',
      'War Machine',
      'Falcon',
      'Winter Soldier',
      'Groot',
      'Rocket Raccoon',
      'Gamora',
      'Drax',
      'Star-Lord',
      'Mantis',
      'Nebula',
      'Daredevil',
      'Jessica Jones',
      'Luke Cage',
      'Iron Fist',
      'Punisher',
      'Ghost Rider',
      'Blade',
      'Cable',
      'Deadpool',
      'X-23',
      'Wolverine',
      'Storm',
      'Cyclops',
      'Jean Grey',
      'Beast',
      'Iceman',
      'Angel',
      'Nightcrawler',
      'Colossus',
      'Gambit',
      'Rogue',
      'Shadowcat',
      'Magik',
      'Namor',
      'She-Hulk',
      'Hercules',
      'Nova',
      'Adam Warlock',
      'Silver Surfer',
      'Galactus',
      'Thanos',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Naruto Uzumaki',
      'Sasuke Uchiha',
      'Goku',
      'Vegeta',
      'Monkey D. Luffy',
      'Ichigo Kurosaki',
      'Natsu Dragneel',
      'Edward Elric',
      'Eren Yeager',
      'Gon Freecss',
      'Saitama',
      'Light Yagami',
      'Lelouch Lamperouge',
      'Spike Spiegel',
      'Vash the Stampede',
      'Alucard',
      'Inuyasha',
    ],
  },
];

export const SectionListScreen = () => {
  const headerComponentFunction = () => <HeaderTitle title="Section List" />;
  const footerComponentFunction = () => (
    <View style={currentStyles.footer}>
      <HeaderTitle title={`Editorials total ${editorials.length}`} />
    </View>
  );
  const itemSeparatorFunction = () => <ItemSeparator />;

  return (
    <View style={currentStyles.container}>
      <SectionList
        stickySectionHeadersEnabled
        sections={editorials}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={headerComponentFunction}
        ListFooterComponent={footerComponentFunction}
        renderSectionHeader={({section}) => (
          <View style={currentStyles.sectionHeader}>
            <HeaderTitle title={section.casa} avoidTop avoidBottom />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <View style={currentStyles.sectionHeader}>
            <HeaderTitle
              title={`Editorials total ${section.data.length}`}
              avoidTop
              avoidBottom
            />
          </View>
        )}
        SectionSeparatorComponent={itemSeparatorFunction}
        ItemSeparatorComponent={itemSeparatorFunction}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const currentStyles = StyleSheet.create({
  container: {
    flex: 1,
    ...styles.globalMargin,
  },
  sectionHeader: {
    backgroundColor: 'white',
  },
  footer: {
    marginBottom: 70,
  },
});
