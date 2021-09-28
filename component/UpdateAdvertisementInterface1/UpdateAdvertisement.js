import React, {Component, useState} from 'react';
import styles from './styles';
import {Button, Image, Picker, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function UpdateAdvertisement({navigation}){
    const nextPage = () =>{
        navigation.push('UpdateAdvertisement2');
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
    const [selectedValue, setSelectedValue] = useState("Colombo");
    const [selectedValueCondition, setSelectedValueCondition] = useState("choose");
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
                <Text style={styles.Heading}>Edit Advertisement</Text>
                <Image style={styles.image} source={require("../../assets/images/phone.jpeg")} />
                <TouchableOpacity onPress={nextPage} style={styles.changePhotoBtn}>
                    <Text  style={styles.changePhotoText}>Change Photo</Text>
                </TouchableOpacity>
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
                                <Picker.Item label="Used" value="used" />
                                <Picker.Item label="Brand New" value="new" />
                            </Picker>}
                        </View>
                        <View style={styles.inputTitle}>
                            <TextInput
                                style={styles.adInput}
                                placeholder="iPhone X"
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
                                style={styles.adInput}
                                placeholder="Original Apple iPhone X
Factory Unlocked
02 Months Hardware & Software Warranty"
                                placeholderTextColor="#003f5c"
                            />
                        </View>
                        <View style={styles.inputTitle}>
                            <TextInput
                                style={styles.adInput}
                                placeholder="Rs.150,000"
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
                    <Text onPress={nextPage} style={styles.numberSliderTwo}>2</Text>

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
