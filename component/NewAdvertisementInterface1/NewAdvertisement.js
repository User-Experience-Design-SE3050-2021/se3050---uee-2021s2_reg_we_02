import React, {Component, useState} from 'react';
import styles from './styles';
import {Image, Picker, ScrollView, Text, TextInput, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function NewAdvertisement({navigation}){
    const [selectedValue, setSelectedValue] = useState("choose");
    const [selectedValueCondition, setSelectedValueCondition] = useState("choose");
    const [Title, setTitle] = React.useState('');
    const [Description, setDescription] = React.useState('');
    const [Price, setPrice] = React.useState('');


    const nextPage = () =>{
        if(Title != '' && Description != ''){
            navigation.push('NewAdvertisement2');
        }else{
            alert('An entry is required or has an invalid value. Please correct and try again')
        }

    };
    const categoryPage = () =>{
        navigation.push('CategoryView');
    };
    const DashBoard =() =>{
        navigation.push('DashBoard');
    };
    const profile = () => {
        navigation.push('Profile')
    }


    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.searchRow}>
                    <Icon onPress={categoryPage} name="bars" size={40} style={styles.barIcon}/>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Search"
                            placeholderTextColor="#003f5c"
                        />
                    </View>
                </View>
                <Icon onPress={nextPage} name="arrow-circle-right" size={40} style={styles.nextPageIcon}/>
                <Text style={styles.Heading}>New Advertisement</Text>
                <Icon onPress={nextPage} name="camera" size={40} style={styles.cameraIcon}/>
                <ScrollView>
                <Text style={styles.subHeading}>All fields marked with * are required</Text>
                <Text style={styles.subHeading}>Fill in the details:</Text>
                <View style={styles.container3}>
                        <View style={styles.inputTitle}>
                            <Text>Location*</Text>
                        </View>
                        <View style={styles.adInputView}>
                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 50, width: 300 }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Choose" value="choose" />
                                <Picker.Item label="Colombo" value="Colombo" />
                                <Picker.Item label="Kandy" value="Kandy" />
                            </Picker>
                        </View>
                        <View style={styles.inputTitle}>
                            <Text>Condition*</Text>
                        </View>
                        <View style={styles.adInputView}>
                            {
                            <Picker
                                selectedValue={selectedValueCondition}
                                style={{ height: 50, width: 300 }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValueCondition(itemValue)}>
                                <Picker.Item label="Choose" value="choose" />
                                <Picker.Item label="Used" value="used" />
                                <Picker.Item label="Brand New" value="new" />
                            </Picker>}
                        </View>
                        <View style={styles.inputTitle}>
                            <TextInput
                                value={Title}
                                onChangeText={(Title) => setTitle(Title)}
                                style={styles.adInput}
                                placeholder="Title*"
                                placeholderTextColor="#003f5c"
                            />
                            <View
                                style={{
                                    borderBottomColor: 'black',
                                    borderBottomWidth: 1,
                                }}
                            />
                            <Text>Keep it short</Text>
                        </View>

                        <View style={styles.inputTitle}>
                            <Text>Description*</Text>
                        </View>

                        <View style={styles.descriptionView}>
                            <TextInput
                                value={Description}
                                onChangeText={(Description) => setDescription(Description)}
                                style={styles.adInput}
                                placeholder="Write a description"
                                placeholderTextColor="#003f5c"
                            />
                        </View>
                        <View style={styles.inputTitle}>
                            <TextInput
                                value={Price}
                                onChangeText={(Price) => setPrice(Price)}
                                style={styles.adInput}
                                placeholder="Price*"
                                placeholderTextColor="#003f5c"
                            />
                            <View
                                style={{
                                    borderBottomColor: 'black',
                                    borderBottomWidth: 1,
                                }}
                            />
                            <Text>Pick a good price</Text>
                        </View>
                        <View style={styles.inputTitle}>
                            <Text>Price is negotiable</Text>
                        </View>
                </View>
                    </ScrollView>

                    <View style={styles.numberSlider}>
                    <Text style={styles.numberSliderOne}>1</Text>
                    <Text style={styles.numberSliderTwo}>2</Text>
                    <Text onPress={nextPage} style={styles.numberSliderThree}>3</Text>

                </View>
                <View style={styles.bottomNavBar}>
                    <Icon onPress={DashBoard} name="home" size={40} style={styles.homeIcon}/>
                    <Icon onPress={categoryPage} name="plus-circle" size={40} style={styles.plusIcon}/>
                    <Icon onPress={profile} name="user" size={40} style={styles.userIcon}/>
                </View>


            </View>
        </View>
    );

}
