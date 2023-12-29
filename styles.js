// styles.js
import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
  // Container Styles
  onboardContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 40,
  },
  rowContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: '8px',
    alignItems: 'center',
  },
  // Text Font Styles
  text: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Nunito-Regular',
    textAlign: 'center'
  },
  header: {
    fontSize: 32,
    color: 'black',
    fontFamily: 'Nunito-Bold',
    textAlign: 'center'
  },


  // Link Styles
  link: {
    color: '#0094FF',
    textDecorationLine: 'underline',
    fontStyle: 'italic',
    fontFamily: 'Nunito-Regular',

  },

  // Button Styles
  buttonContainer: {
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db',
    flex: 1,
    flexWrap: 'wrap',
    flexGrow: 1,
    width: '100%',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Nunito-Regular',
    textAlign: 'center'
  },

  // Input Styles
  inputContainer: {
    width: '100%',
  },
  input: {
    fontSize: 16,
    height: 48,
    marginTop: 4,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    fontFamily: 'Nunito-Regular',
    flex: 1
  },
  label: {
    width: '100%',
    fontSize: 16,
    fontFamily: 'Nunito-Regular',

  },
  errorText: {
    width: '100%', 
    fontFamily: 'Nunito-Regular',
    color: 'red',
    textAlign: 'right',
  }
});





export default styles;
