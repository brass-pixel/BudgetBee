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
  rowContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: '8px',
    alignItems: 'center',
  },

  // Link Styles
  link: {
    color: '#0094FF',
    textDecorationLine: 'underline',
    fontStyle: 'italic'
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
    flexGrow: 1
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Nunito-Regular',
    textAlign: 'center'
  },

  // Input Styles
  input: {
    fontSize: 16,
    height: 48,
    marginTop: 4,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    width: '100%',
  },
  label: {
    width: '100%',
    fontSize: 14

  }
});





export default styles;
