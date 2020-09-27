import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    containerGeral: {
        width: '100%',
        height: '100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#00183C"
    },
    logo: {
        width: '20%',
        height: '20%'
    }, 
    containerInferior: {
        flexDirection: 'column',
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    estiloInput: {
        width: '60%',
        height: '20%',
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        paddingLeft: 10
    },
    buttonEntrar: {
        flexDirection: 'column',
        width: '40%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBC531',
        borderRadius: 10,
    }
})

export default styles
