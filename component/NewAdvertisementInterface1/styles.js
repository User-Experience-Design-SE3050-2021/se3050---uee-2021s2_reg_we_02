import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#FFFFFF"
    },
    logo: {
        alignContent: "flex-start"
    },
    container2: {
        backgroundColor: "#FFFFFF",
        height: 740,
        width: '100%',
        paddingBottom: 50,


    },
    container3: {
        marginTop: '1%',
        backgroundColor: "#F2E8E8",
        paddingTop: 5,
        paddingBottom: 5,
        height: '74%',
        marginLeft: 20,
        marginRight: 20,
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
    inputTitle: {
        marginTop: 5,
        marginLeft: 36
    },
    adInputView: {
        backgroundColor: "#FFFFFF",
        borderRadius: 25,
        width: "80%",
        height: 45,
        marginBottom: 5,
        marginTop: 10,
        marginLeft: 30,
        marginRight: 10
    },
    descriptionView: {
        backgroundColor: "#FFFFFF",
        borderRadius: 25,
        width: "80%",
        height: 100,
        marginBottom: 5,
        marginTop: 10,
        marginLeft: 30,
        marginRight: 10
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        width: "80%",
    },
    adInput: {
        height: 50,
        flex: 1,
        padding: 10,
        width: "100%",

    },
    Heading: {
        fontSize:27,
        marginLeft: 75,
        color: "#024F85",
        fontWeight : "bold",
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
        backgroundColor: "#F2E8E8"
    },
    cameraIcon: {
        color: '#F79605',
        marginLeft: '45%'
    },
    nextPageIcon: {
        marginLeft: '90%'
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
        alignItems: "center",
        backgroundColor: '#FFFFFF',
        paddingTop: 10,
        paddingBottom: 10,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20
    },
    numberSliderOne: {
        marginLeft: '30%',
        backgroundColor: "#FFFFFF",
        fontSize: 25,
        borderRadius: 20,
        paddingRight: 10,
        paddingLeft: 10,
        borderWidth: 2,
    },
    numberSliderTwo: {
        marginLeft: '7%',
        backgroundColor: "#024F85",
        opacity: 0.6,
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