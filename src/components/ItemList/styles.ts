import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#333333',
    backgroundColor: '#262626',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 64,
    width: '100%',
    gap: 5,
    marginBottom: 10
  },  
  textItem: {
    marginHorizontal: 5,      
    color: '#F2F2F2',
    fontSize: 14,
    flex: 1,
  },
  textItemFinished: {
    marginHorizontal: 5,      
    color: '#808080',
    fontSize: 14,
    flex: 1,
    textDecorationLine: 'line-through'
  },
  trash: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  }
})