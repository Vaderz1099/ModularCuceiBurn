import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraScreen from './src/screen/CameraScreen';
import MedicalScreen from './src/screen/MedicalScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UDG from '././assets/UDG.png'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <ScrollView>
      <Text style = { styles.tituloText }>
          Integrantes
      </Text>

      <View style = { styles.identificacionContainer }>
        <View style={styles.row}>
          <View style={[styles.box7, styles.box6]}>
            <Image
              source={UDG}
              style={styles.identImg}
            />
          </View> 
          <View style={[styles.box7]}>
            <Text style = { styles.identText }>
              Ortega García Carlos Antonio (215435208), INCO
            </Text>
            <Text style = { styles.identText }>
              Musich Flores Branco (215480319), INCO
            </Text>
            <Text style = { styles.identText }>
              Hernandez Victoria Andrés Daniel (218745011), INCO
            </Text>
          </View> 
        </View>
      </View>


      <Text style = { styles.tituloText }>
          Tutor
      </Text>

      <View style = { styles.identificacionContainer }>
        <View style={styles.row}>
          <View style={[styles.box7, styles.box6]}>
            <Image
              source={UDG}
              style={styles.identImg}
            />
          </View> 
          <View style={[styles.box7]}>
            <Text style = { styles.identText }>
            </Text>
            <Text style = { styles.identText }>
              Morales Castañeda Juan Bernardo
            </Text>
            <Text style = { styles.identText }>
            </Text>
          </View> 
        </View>
        <Text>

        </Text>
        <Text>

        </Text>
      </View>


    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "Inicio") {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === "Analisis") {
              iconName = focused ? 'camera' : 'camera-outline';

            } else if (rn === "Integrantes") {
              iconName = focused ? 'people' : 'people-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#7F2413",
          tabBarInactiveTintColor: "black",
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 10
          },
          tabBarStyle: [
            {
              "display": "flex"
            },
            null
          ]
        })}
        >

        <Tab.Screen name="Inicio" component={MedicalScreen} />
        <Tab.Screen name="Analisis" component={CameraScreen} />
        <Tab.Screen name="Integrantes" component={SettingsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  tiposContainer: {
    backgroundColor: '#7F2413',
    flexDirection: 'center',
    marginBottom: 10,
    padding: 10,
    width: "100%",
  },

  identificacionContainer: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'center',
    marginBottom: 30,
    padding: 10,
    width: "100%",
  },

  subTitleTextTipos: {
    marginStart: 15,
    color: '#FFFFFF',
    fontFamily: 'Raleway-SemiBold',
    textAlign: 'left',
    fontSize: 30,
  },

  subTitleTextIdent: {
    marginStart: 15,
    color: '#7F2413',
    fontFamily: 'Raleway-SemiBold',
    textAlign: 'left',
    fontSize: 30,
  },

  tituloText: {
    fontFamily: 'JosefinSans-Regular',
    color: '#901414',
    fontSize: 50,
    alignItems: 'flex-start',
  },

  tipoFuego: {
    // marginStart: 35,
    marginTop: 30,
    borderRadius: 30,
    height: 50,
    width: 50,
    alignSelf: 'center',
  },

  identImg: {
    marginTop: 70,
    borderRadius: 100,
    height: 120,
    width: 120,
    alignSelf: 'center',
  },

  textoFuego: {
    color: '#F39494',
    fontFamily: 'Raleway-SemiBold',
    textAlign: 'center',
    fontSize: 15,
    marginTop: 15,
  },

  identSub: {
    color: '#F39494',
    fontFamily: 'Raleway-SemiBold',
    textAlign: 'center',
    fontSize: 15,
    marginTop: 15,
  },

  identText: {
    color: '#000000',
    fontFamily: 'Raleway-SemiBold',
    textAlign: 'left',
    fontSize: 15,
    marginTop: 50,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  box: {
    flex: 1,
    height: 100,
    backgroundColor: '#7F2413',
  },
  box2: {
    backgroundColor: '#7F2413'
  },
  box3: {
    backgroundColor: '#7F2413'
  },
  box4: {
    backgroundColor: '#7F2413'
  },
  box5: {
    backgroundColor: '#7F2413'
  },

  box6: {
    flex: 1,
    height: 100,
    backgroundColor: '#F5F5F5',
  },
  box7: {
    marginStart: 30,
    flex: 3,
    backgroundColor: '#F5F5F5'
  },

})