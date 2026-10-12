import { StyleSheet, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import PersonalInfo from './components/PersonalInfo';
import MovieBooking from './components/MovieBooking';
import { useState } from 'react';
export default function App() {
  const [balcony, setBalcony] = useState(false);
  return (
    <View style={styles.screencontainer}>
      <View style={styles.imgview}>
        <Image
          source={require('./assets/CinemaPic.jpg')}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <Swiper showsButtons={true}>
        <PersonalInfo screenstyle={styles.screen} />
        <MovieBooking/>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  screencontainer: {
    flex: 1,
    padding: '1%',
    backgroundColor: 'lightgrey',
  },
  imgview: {
    height: 200,            
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '8%',
  },
  img: {
    width: 250,
    height: 200,
  },
  screen: {
    flex: 1,
    alignItems: 'flex-start',   
    padding: '10%',
  },
});
