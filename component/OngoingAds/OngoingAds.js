import React, {Component, useState} from 'react';
import styles from './styles';
import {Image, Picker, ScrollView, Text, TextInput, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
export default function OngoingAds({navigation}){
    const nextPage = () =>{
        navigation.push('UpdateAdvertisement');
    };
    const categoryPage = () =>{
        navigation.push('Category');
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
                <Text style={styles.Heading}>Ongoing Advertisements</Text>
                <ScrollView>
                    <View style={styles.container3}>
                        <View style={styles.adInputView}>
                            <View style={styles.categoryRow}>
                                <Image style={styles.image} source={require("../../assets/images/phone.jpeg")} />
                                <View style={styles.adDetails}>
                                    <Text>iPhone X</Text>
                                    <Text>Rs.150,000/-</Text>
                                    <Text>100</Text>
                                </View>
                                <View style={styles.adButtons}>
                                    <Icon onPress={nextPage} name="edit" size={30} style={styles.editIcon}/>
                                    <Icon name="trash" size={30} style={styles.deleteIcon}/>
                                </View>
                            </View>
                        </View>
                        <View style={styles.adInputView}>
                            <View style={styles.categoryRow}>
                                <Image style={styles.image2} source={require("../../assets/images/land.jpg")} />
                                <View style={styles.adDetailsImage2}>
                                    <Text>Land for Sale In Malabe</Text>
                                    <Text>Rs.8,000,000/-</Text>
                                    <Text>45</Text>
                                </View>
                                <View style={styles.adButtons}>
                                    <Icon name="edit" size={30} style={styles.editIconImage2}/>
                                    <Icon name="trash" size={30} style={styles.deleteIcon}/>
                                </View>
                            </View>
                        </View>
                        <View style={styles.adInputView}>
                            <View style={styles.categoryRow}>
                                <Image style={styles.image3} source={require("../../assets/images/car.jpg")} />
                                <View style={styles.adDetails}>
                                    <Text>Brand New Vehicle</Text>
                                    <Text>Rs.7,500,000/-</Text>
                                    <Text>50</Text>
                                </View>
                                <View style={styles.adButtons}>
                                    <Icon name="edit" size={30} style={styles.editIcon}/>
                                    <Icon name="trash" size={30} style={styles.deleteIcon}/>
                                </View>
                            </View>
                        </View>
                        <View style={styles.adInputView}>
                            <View style={styles.categoryRow}>
                                <Image style={styles.image} source={require("../../assets/images/watch_.jpg")} />
                                <View style={styles.adDetails}>
                                    <Text>Rolex Watch</Text>
                                    <Text>Rs.500,000/-</Text>
                                    <Text>10</Text>
                                </View>
                                <View style={styles.adButtons}>
                                    <Icon name="edit" size={30} style={styles.editIcon}/>
                                    <Icon name="trash" size={30} style={styles.deleteIcon}/>
                                </View>
                            </View>
                        </View>
                    </View>

                </ScrollView>
                <View style={styles.bottomNavBar}>
                    <Icon onPress={nextPage} name="home" size={40} style={styles.homeIcon}/>
                    <Icon onPress={categoryPage} name="plus-circle" size={40} style={styles.plusIcon}/>
                    <Icon name="user" size={40} style={styles.userIcon}/>
                </View>


            </View>
        </View>
    );

}
