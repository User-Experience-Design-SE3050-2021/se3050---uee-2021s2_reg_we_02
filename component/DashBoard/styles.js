import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    indexContainer:{
        flex: 1,
        backgroundColor: '#F2E8E8',
        height: '100%',
    },
    headerView:{
        backgroundColor:'#024F85',
        height:'12%',
    },
    header:{
        fontSize:30,
        padding:'9%',
        fontWeight:'bold',
        color:'#fff',
    },
    logo:{
        width:'60%',
        marginTop:25,
        marginLeft:10,
    },
    secondRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menuIcon:{
        color: '#F79605',
        margin:10,
    },
    SearchInput:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%',
        borderRadius:20,fontSize:10
    },
    smallCard:{
        backgroundColor:'#fff',
        margin:10,
        width:'40%',
        height:80,
        borderRadius: 10
    },
    smallCardText:{
        margin:8,
        fontSize:20,
        color:'#024F85',
        fontWeight: 'bold'
    },
    newUserGift:{
        backgroundColor:'#024F85',
        height:50,
        margin:5,
        borderRadius: 10,
        alignItems:'center',
        flexDirection: 'row',
    },
    giftIcon:{
        color:'#fff',
        marginLeft: 90
    },
    giftText:{
        color:'#fff',
        marginLeft: 10,
        fontSize:20
    },
    TopRankingCard:{
        backgroundColor:'#fff',
        height:300,
        margin:8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Footer:{
        backgroundColor:'#fff',
        height:50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewMore:{
        fontWeight:'bold',
        fontSize:12,
        margin:5,
        paddingLeft:80
    },
    TopRankingText:{
        fontWeight:'bold',
        fontSize:17,
        margin:5
    },
    TopRankingImg:{
        margin:10,
        width:150,
        height:150
    },
    Pursuits:{
        margin:5,
        fontWeight:'bold'
    },
    followers:{
        margin:2,
        paddingLeft:30,
        color:'red'
    },
    bikes:{
        paddingLeft: 30,
        fontWeight:'bold'
    },
    FeaturedCategoryImg:{
        width:100,
        height:100,
        margin:5
    },
    FeaturedCategoryCard:{
        backgroundColor:'#fff',
        height:250,
        margin:8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,
    },
    FeaturedCategoryCardSub:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    FeaturedCategoryCardSubItm:{
        width:100,
        margin:5,
    },
    FeaturedCategoryCardSubItmText:{
        fontWeight:'bold',
        paddingLeft:25
    },
    viewMoreF:{
        textAlign:'right',
        paddingRight:10,
        fontWeight:'bold'
    },
    footerIcon:{
        color:'#024F85',
        margin:10
    },
    footerIconMiddle:{
        color:'#fff',
        margin:2,

    },
    footerIconMiddleView:{
        backgroundColor:'#F79605',
        margin:5,
        borderRadius:20,
    }


});

export default styles;