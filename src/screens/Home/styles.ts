import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {    
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center'    
  },
  image: {
    marginTop: 80,
    marginBottom: 0,
  },
  form: {
    marginTop: 30,
    marginBottom: -50,
    width: '100%',
    flexDirection: 'row',
    padding: 24,
    zIndex: 2
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    height: 52,
    borderRadius: 6,
    color: '#fff',
    fontSize: 16,
    marginRight: 4,
    padding: 16
  },
  button: {
    height: 52,
    width: 52,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  containerList: {
    backgroundColor: '#1A1A1A',
    flex: 1,
    width: '100%',
    paddingTop: 50,
    paddingRight: 24,
    paddingLeft: 24
  }
})