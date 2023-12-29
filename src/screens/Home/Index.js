import { Text, View, StyleSheet, FlatList, StatusBar } from "react-native";
import { Avatar, Card, Icon, FAB } from 'react-native-paper';
const myPhoto = require('../../../assets/img/me.jpg')


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    desc: 'for food',
    type: 'income',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    desc: 'for food',
    type: 'income'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    desc: 'for food',
    type: 'expense'
  },
];

const Item = ({title, desc, type,}) => (
  <Card.Title
    titleStyle={{ fontWeight: '700', fontSize: 23 }}
    title={title}
    subtitle={desc}
    left={(props) => <Avatar.Icon {...props} icon={type === 'income' ? 'arrow-up-drop-circle' : 'arrow-down-drop-circle'} style={{ backgroundColor: type === 'income' ? 'green' : 'red', }} />}
  />

);

export default function Home() {
  return (
    <View style={styles.container}>
      <View
        style={styles.topSection}
      >
        <View>
          <View style={{ alignItems: 'baseline', flexDirection: 'row', gap: 2 }}>
            <Text style={styles.totalIncome}>500</Text>
            <Text style={{ fontSize: 18, color: 'gray' }}>Ks</Text>
          </View>
          <View style={{ marginTop: 3, flexDirection: 'row', gap: 8 }}>
            <Text style={{ color: 'purple'}}>Daily Limit</Text>
            <Text style={{ color: 'gray', fontWeight: '400'}}>3000 Ks</Text>
          </View>
        </View>
         <Avatar.Image size={50} source={myPhoto} />
      </View>
      <FlatList
        style={{ paddingTop: 30, }}
        data={DATA}
        renderItem={({item}) => <Item title={item.title} desc={item.desc} type={item.type} />}
        keyExtractor={item => item.id}
      />
       <FAB
        customSize={60}
        icon="plus"
        style={styles.addBtn}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: StatusBar.currentHeight + 40,
    paddingHorizontal: 20,
  },

  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalIncome: {
    fontWeight: "400",
    fontSize: 30,
  },
  addBtn: {
    position: 'absolute',
    marginBottom: 16,
    right: 0,
    bottom: 0,
    borderRadius: 50,
  },
  listContainer: {
    marginTop: 30,
  }
})