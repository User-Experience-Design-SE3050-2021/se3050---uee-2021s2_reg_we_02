import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    indexContainer:{
        flex: 1,
        backgroundColor: '#F2E8E8',
        height: '100%',
    },
    Row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        height: 60,
        marginTop:10
    },
    RowII:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        height: 60,
        marginTop:10,
        marginBottom:10
    },
    RowValues:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    RowValuesTopic:{
        color:'#024F85',
        margin:10,
        fontWeight:'bold',
        fontSize:18
    },
    RowValuesText:{
        margin:10,
        fontWeight:'bold',
        fontSize:18,
        paddingRight:30
    },
    RowValuesIcon:{
        marginTop: 15,
        paddingRight: 10,
        color:'red'
    },
    ProfilePicture:{
        width:50,
        height:50,
        margin:2,
        borderRadius:20,
    },
    SampleRow:{
        margin:5
    }

});

export default styles;