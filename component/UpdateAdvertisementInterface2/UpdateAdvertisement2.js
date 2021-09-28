import React, {Component, useState} from 'react';
import styles from './styles';
import {Image, Picker, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function UpdateAdvertisement2({navigation}){
    const nextPage = () =>{
        navigation.push('OngoingAds');

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
    const [selectedValue, setSelectedValue] = useState("choose");
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
                <Text style={styles.Heading}>Edit Advertisement</Text>
                <ScrollView>
                <Text style={styles.subHeading}>All fields marked with * are required</Text>
                <Text style={styles.subHeading}>Contact details:</Text>
                <View style={styles.container3}>
                        <View style={styles.inputTitle}>
                            <TextInput
                                style={styles.adInput}
                                placeholder="Kithmini De Silva"
                                placeholderTextColor="#003f5c"
                            />
                            <View
                                style={{
                                    borderBottomColor: 'black',
                                    borderBottomWidth: 1,
                                }}
                            />
                        </View>
                        <View style={styles.inputTitle}>
                            <TextInput
                                style={styles.adInput}
                                placeholder="+94 768754057"
                                placeholderTextColor="#003f5c"
                            />
                            <View
                                style={{
                                    borderBottomColor: 'black',
                                    borderBottomWidth: 1,
                                }}
                            />
                        </View>
                        <View style={styles.inputTitle}>
                            <TextInput
                                style={styles.adInput}
                                placeholder="desilvakithmini@gmail.com"
                                placeholderTextColor="#003f5c"
                            />
                            <View
                                style={{
                                    borderBottomColor: 'black',
                                    borderBottomWidth: 1,
                                }}
                            />
                        </View>
                        <TouchableOpacity onPress={nextPage} style={styles.postBtn}>
                            <Text  style={styles.postText}>Edit Ad</Text>
                        </TouchableOpacity>
                </View>
                    </ScrollView>
                <View style={styles.numberSlider}>
                    <Text style={styles.numberSliderOne}>1</Text>
                    <Text style={styles.numberSliderTwo}>2</Text>
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
