import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor:'#6A5ACD',
        paddingBottom: 900,
        paddingTop: 60,
        

        
    },
    headBox: {
        width: '100%',
        height:180,
        padding:'90',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },

    H1:{
        fontSize:30,
        color:'white',

    },



    

    
    data:{
        fontSize:25,
        color:'white',
        textAlign:'center',
        marginTop:40
        


    },

    imgMorning: {
        flex:1,
        resizeMode: 'contain',
        width: 300,
        height: 700,
        paddingBottom:400,
        paddingTop:50,
        marginBottom:80,
        marginTop:-30
    },

    imgNyt: {
        resizeMode: 'contain',
        width: 300,
        height: 300
    }


})