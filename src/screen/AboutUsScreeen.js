import { View, Text } from 'react-native'
import React from 'react'

const AboutUsScreen = () => {
  return (
    <View>
      <Text style = { styles.tituloText }>
          INTEGRANTES
      </Text>
    </View>
  )
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
    marginBottom: 10,
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
    // marginStart: 35,
    marginTop: 30,
    borderRadius: 30,
    height: 70,
    width: 70,
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
    flex: 3,
    backgroundColor: '#F5F5F5'
  },

})

export default AboutUsScreen