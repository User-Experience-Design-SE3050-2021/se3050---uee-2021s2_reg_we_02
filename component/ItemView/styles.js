import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    indexContainer:{
        flex: 1,
        backgroundColor: '#F2E8E8',
        height: '100%',
    },
    ImageView:{
        backgroundColor: '#fff',
        margin:10,
        borderRadius:10
    },
    PriceView:{
        backgroundColor:'#F79605',
        margin:10,
        height: 40,
        borderTopStartRadius:20,
        borderBottomEndRadius:20
    },
    PriceViewText:{
        paddingLeft:20,
        fontSize:20,
        paddingTop:6,
        fontWeight:'bold'
    },
    ContactView:{
        backgroundColor:'red',
        flexDirection: 'row',
        margin:10,
        height: 40,
        borderTopStartRadius:20,
        borderBottomEndRadius:20

    },
    ContactViewIcon:{
        paddingTop: 5,
        paddingLeft: 20,
        color:'#fff'
    },
    ContactViewNumber:{
        fontSize: 20,
        paddingTop:5,
        paddingLeft:20,
        fontWeight: 'bold',
        color: '#fff'
    },
    DetailsView:{
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,
        margin:10,
        height:80,
        borderTopStartRadius:20,
        borderBottomEndRadius:20
    },
    DetailsViewText:{
        fontSize: 15,
        paddingLeft:20,
        paddingTop:10,
        fontWeight:'bold'
    }

});

export default styles;