import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    logo: {
        alignContent: "flex-start"
    },
    container2: {
        backgroundColor: "#F2E8E8",
        height: '65%',
        width: '100%',
        paddingBottom: 50

    },
    container3: {
        marginTop: '1%',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "#FFFFFF",
        height: '100%',
        borderTopEndRadius : 50,
        borderTopStartRadius : 50,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25

    },
    inputView: {
        backgroundColor: "#FFFFFF",
        borderRadius: 25,
        width: "70%",
        height: 45,
        marginBottom: 5,
        marginTop: 10,
        marginLeft: 40,
        marginRight: 20
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        width: "80%",
    },
    Heading: {
        fontSize:27,
        marginLeft: 75,
        color: "#024F85",
        fontWeight : "bold",
        marginBottom: 2,
        marginTop: 8
    },
    barIcon: {
        alignContent: "flex-start",
        marginBottom: 5,
        marginTop: 10,
        marginLeft: 20,
        color: '#F79605',

    },
    iconText: {
        alignContent: "flex-start",
        marginBottom: 5,
        marginTop: 10,
        marginLeft: 10,
        color: "#024F85",
        fontWeight : "bold"
    },
    searchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subHeading: {
        fontSize:15,
        marginLeft: 10,
        marginBottom: 5,
        fontWeight : "bold"
    },
    categoryHeading: {
        fontSize:20,
        marginLeft: 20,
        marginTop : 20,
        fontWeight : "bold",
        opacity: 0.5
    },
    categoryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    categoryTitle: {
        flexDirection: 'row'
    },
    arrowIcon: {
        marginRight: 20,
        marginTop: 20,
        color: "#024F85"
    },
    numberSlider: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: "center"
    },
    numberSliderOne: {
        marginLeft: '30%',
        backgroundColor: "#024F85",
        opacity: 0.6,
        fontSize: 25,
        borderRadius: 20,
        paddingRight: 10,
        paddingLeft: 10,
        borderWidth: 2
    },
    numberSliderTwo: {
        marginLeft: '7%',
        backgroundColor: "#FFFFFF",
        fontSize: 25,
        borderRadius: 20,
        paddingRight: 10,
        paddingLeft: 10,
        borderWidth: 2
    },
    numberSliderThree: {
        marginLeft: '5%',
        backgroundColor: "#FFFFFF",
        fontSize: 25,
        borderRadius: 20,
        paddingRight: 10,
        paddingLeft: 10,
        borderWidth: 2

    },
    bottomNavBar: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#F2E8E8",
        paddingBottom: 20,
        paddingTop: 10
    },
    homeIcon: {
        marginLeft: 40,
        color: "#024F85"
    },
    plusIcon: {
        marginLeft: 110,
        color: '#F79605'
    },
    userIcon: {
        marginLeft: 100,
        color: "#024F85"
    }


});

export default styles;