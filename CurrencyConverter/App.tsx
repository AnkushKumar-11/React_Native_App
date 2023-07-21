import React, {useState} from 'react';


import currencyByRupee  from './constant';
import CurrencyButton from './Components/CurrencyButton'

import Snackbar from 'react-native-snackbar';
import { FlatList, Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';


const App = (): JSX.Element => {

  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

  const buttonPressed = (targetValue: Currency) => {
    if(!inputValue){
      return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#EA7773',
        textColor: 'black'
      })
    }
      const inputAmount = parseFloat(inputValue)
      if(!isNaN(inputAmount)){
        const convertedValue = inputAmount * targetValue.value
        const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
        setResultValue(result)
        setTargetCurrency(targetValue.name)
      } else{
        return Snackbar.show({
          text: "Not a valid number to convert",
          backgroundColor: '#F4BE2C',
          textColor: 'white'
        })
      }
    }

  return (
    <>
    <StatusBar/>
    <View style = {styles.container}>
      <View style = {styles.topContainer}>
        <View style = {styles.rupeeContainer}>
          <Text style = {styles.rupee}>Rs.</Text>
          <TextInput style = {styles.inputAmountField}
          maxLength={14}
          value={inputValue}
          clearButtonMode='always'
          onChangeText={setInputValue}
          keyboardType='number-pad'
          placeholder='Enter Amount in Rupees'/>
        </View>
        {resultValue && (
          <Text style = {styles.resultTxt}>
            {resultValue}
          </Text>
        )}
      </View>
      <View style = {styles.bottomContainer}>
          <FlatList
          numColumns={3}
          data={currencyByRupee}
          keyExtractor={item => item.name}
          renderItem={({item}) =>(
            <Pressable
            style = {[styles.button,
              targetCurrency === item.name && styles.selected]}
              onPress={() => buttonPressed(item)}>
                <CurrencyButton {...item} />
              </Pressable>
          )}
          />
      </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9DB2BF',
  },
  inputAmountField: {
    marginTop: 20,
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  rupeeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rupee: {
    marginTop: 20,
    marginRight: 8,
    fontSize: 22,
    color: 'black',
    fontWeight: '800',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  bottomContainer: {flex: 3},
  button: {
    flex: 1,
    marginTop: 30,
    margin: 12,
    height: 90,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {backgroundColor: '#ffeaa7'},
});

export default App