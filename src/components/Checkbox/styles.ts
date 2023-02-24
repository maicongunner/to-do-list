import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,    
    alignItems: 'center',
    justifyContent: 'center',    
    borderRadius: 12,
    borderWidth: 2,
    marginRight: 8,
  },
  isNotChecked: {        
    borderColor: '#4EA8DE',
  },
  isChecked: {
    borderColor: '#5E60CE',
    backgroundColor: '#5E60CE',
  },
  icon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  }
})