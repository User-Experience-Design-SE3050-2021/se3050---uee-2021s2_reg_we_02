import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'pink',
        marginRight:10
    },
    indexContainer:{
        flex: 1,
        backgroundColor: '#fff',
        height: '100%',
    },
    filterCard:{
        backgroundColor: '#b5b5b5',
        marginTop:10,
        height: 125
    },
    filterCardText:{
        marginTop:8,
        marginLeft:8,
        fontSize:15,
        color:'#024F85',
        fontWeight: 'bold'
    },
    filterView:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    filterViewProvince:{
        marginTop:8,
        width:175,
        marginLeft:8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        backgroundColor:'#dbd7d7',
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        opacity:0.9
    },
    filterViewDistrict:{
        width:175,
        marginTop:8,
        marginRight:8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        backgroundColor:'#dbd7d7',
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,
        opacity:0.9
    },
    filterViewProvinceText:{
        paddingTop:7,
        paddingLeft:7,
        fontSize:15,
        color:'#024F85',
        fontWeight: 'bold'
    },
    body:{
        flexDirection:'row',
    },
    TopRankingImg:{
        margin:10,
        width:80,
        height:80
    },
    MainCatItem:{
        backgroundColor:'#fff',
        margin: 10,
        width:100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,
        borderRadius:10
    },
    TopRankingImgII:{
        backgroundColor:'#fff',
        margin:10,
        width:100,
        height:100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,
        borderRadius:10,
        borderWidth:0.5,
        borderColor:'#000'
    },
    Topic:{
        paddingTop:7,
        paddingLeft:7,
        fontSize:20,
        color:'#024F85',
        fontWeight: 'bold'
    },
    MainCatText:{
        fontSize:15,
        color:'#024F85',
        fontWeight: 'bold',
        paddingLeft:10,
        paddingBottom:5
    },
    catView:{
        backgroundColor:'#c1c1c1',
        borderRadius: 12,
        width:115,
        marginTop:7,
        marginRight: 7
    },
    catViewII:{
        flexDirection:'row',
        justifyContent: 'space-between',
        margin:5
    }

});

export default styles;