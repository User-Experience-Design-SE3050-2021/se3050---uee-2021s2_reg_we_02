import React, {Component} from 'react';
import styles from './styles';
import {Image, ScrollView, Text, TextInput, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function CategoryView({navigation}){
        const nextPage = () =>{
            navigation.push('NewAdvertisement1');

        }
        return (
            <View style={styles.container}>
                <View style={styles.container2}>
                    <View style={styles.searchRow}>
                        <Icon onPress={nextPage} name="bars" size={40} style={styles.barIcon}/>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Search"
                                placeholderTextColor="#003f5c"
                            />
                        </View>
                    </View>
                    <Text style={styles.Heading}>New Advertisement</Text>
                    <Text style={styles.subHeading}>Would you like to:</Text>
                    <Text style={styles.subHeading}>Sell an Item or Service</Text>
                    <View style={styles.container3}>
                        <Text style={styles.categoryHeading}>Select a Category...</Text>
                        <ScrollView>
                        <View>
                            <View style={styles.categoryRow}>
                                <View style={styles.categoryTitle}>
                                    <Icon onPress={nextPage} name="car" size={25} style={styles.barIcon}/>
                                    <Text style={styles.iconText}>Cars & Vehicles</Text>

                                </View>
                                <Icon name="arrow-circle-right" size={30} style={styles.arrowIcon}/>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: '#024F85',
                                    borderBottomWidth: 1,
                                    opacity: 0.3,
                                    marginLeft: 10,
                                    marginRight: 10
                                }}
                            />

                            <View style={styles.categoryRow}>
                                <View style={styles.categoryTitle}>
                                    <Icon onPress={nextPage} name="mobile" size={30} style={styles.barIcon}/>
                                    <Text style={styles.iconText}>Electronics</Text>
                                </View>
                                <Icon name="arrow-circle-right" size={30} style={styles.arrowIcon}/>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: '#024F85',
                                    borderBottomWidth: 1,
                                    opacity: 0.3,
                                    marginLeft: 10,
                                    marginRight: 10
                                }}
                            />
                            <View style={styles.categoryRow}>
                                <View style={styles.categoryTitle}>
                                    <Icon onPress={nextPage} name="home" size={30} style={styles.barIcon}/>
                                    <Text style={styles.iconText}>Property</Text>
                                </View>
                                <Icon name="arrow-circle-right" size={30} style={styles.arrowIcon}/>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: '#024F85',
                                    borderBottomWidth: 1,
                                    opacity: 0.3,
                                    marginLeft: 10,
                                    marginRight: 10
                                }}
                            />
                            <View style={styles.categoryRow}>
                                <View style={styles.categoryTitle}>
                                    <Icon onPress={nextPage} name="wrench" size={30} style={styles.barIcon}/>
                                    <Text style={styles.iconText}>Business Services & Industry</Text>
                                </View>
                                <Icon name="arrow-circle-right" size={30} style={styles.arrowIcon}/>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: '#024F85',
                                    borderBottomWidth: 1,
                                    opacity: 0.3,
                                    marginLeft: 10,
                                    marginRight: 10
                                }}
                            />
                            <View style={styles.categoryRow}>
                                <View style={styles.categoryTitle}>
                                    <Icon onPress={nextPage} name="child" size={30} style={styles.barIcon}/>
                                    <Text style={styles.iconText}>Hobby, Sport & Kids</Text>
                                </View>
                                <Icon name="arrow-circle-right" size={30} style={styles.arrowIcon}/>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: '#024F85',
                                    borderBottomWidth: 1,
                                    opacity: 0.3,
                                    marginLeft: 10,
                                    marginRight: 10
                                }}
                            />
                            <View style={styles.categoryRow}>
                                <View style={styles.categoryTitle}>
                                    <Icon onPress={nextPage} name="pagelines" size={30} style={styles.barIcon}/>
                                    <Text style={styles.iconText}>Home & Garden</Text>
                                </View>
                                <Icon name="arrow-circle-right" size={30} style={styles.arrowIcon}/>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: '#024F85',
                                    borderBottomWidth: 1,
                                    opacity: 0.3,
                                    marginLeft: 10,
                                    marginRight: 10
                                }}
                            />
                            <View style={styles.categoryRow}>
                                <View style={styles.categoryTitle}>
                                    <Icon onPress={nextPage} name="black-tie" size={30} style={styles.barIcon}/>
                                    <Text style={styles.iconText}>Fashion, Health & Beauty</Text>
                                </View>
                                <Icon name="arrow-circle-right" size={30} style={styles.arrowIcon}/>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: '#024F85',
                                    borderBottomWidth: 1,
                                    opacity: 0.3,
                                    marginLeft: 10,
                                    marginRight: 10
                                }}
                            />
                            <View style={styles.categoryRow}>
                                <View style={styles.categoryTitle}>
                                    <Icon onPress={nextPage} name="male" size={30} style={styles.barIcon}/>
                                    <Text style={styles.iconText}>Animals</Text>
                                </View>
                                <Icon name="arrow-circle-right" size={30} style={styles.arrowIcon}/>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: '#024F85',
                                    borderBottomWidth: 1,
                                    opacity: 0.3,
                                    marginLeft: 10,
                                    marginRight: 10
                                }}
                            />
                            <View style={styles.categoryRow}>
                                <View style={styles.categoryTitle}>
                                    <Icon onPress={nextPage} name="male" size={30} style={styles.barIcon}/>
                                    <Text style={styles.iconText}>Job Vacancies</Text>
                                </View>
                                <Icon name="arrow-circle-right" size={30} style={styles.arrowIcon}/>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: '#024F85',
                                    borderBottomWidth: 1,
                                    opacity: 0.3,
                                    marginLeft: 10,
                                    marginRight: 10
                                }}
                            />
                            <View
                                style={{
                                    borderBottomColor: '#024F85',
                                    borderBottomWidth: 1,
                                    opacity: 0.3,
                                    marginLeft: 10,
                                    marginRight: 10
                                }}
                            />
                            <View style={styles.categoryRow}>
                                <View style={styles.categoryTitle}>
                                    <Icon onPress={nextPage} name="book" size={30} style={styles.barIcon}/>
                                    <Text style={styles.iconText}>Education</Text>
                                </View>
                                <Icon name="arrow-circle-right" size={30} style={styles.arrowIcon}/>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: '#024F85',
                                    borderBottomWidth: 1,
                                    opacity: 0.3,
                                    marginLeft: 10,
                                    marginRight: 10
                                }}
                            />
                            <View style={styles.categoryRow}>
                                <View style={styles.categoryTitle}>
                                    <Icon onPress={nextPage} name="apple" size={30} style={styles.barIcon}/>
                                    <Text style={styles.iconText}>Food & Agriculture</Text>
                                </View>
                                <Icon name="arrow-circle-right" size={30} style={styles.arrowIcon}/>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: '#024F85',
                                    borderBottomWidth: 1,
                                    opacity: 0.3,
                                    marginLeft: 10,
                                    marginRight: 10
                                }}
                            />
                            </View>
                        </ScrollView>

                    </View>
                    <View style={styles.numberSlider}>
                        <Text style={styles.numberSliderOne}>1</Text>
                        <Text style={styles.numberSliderTwo}>2</Text>
                        <Text style={styles.numberSliderThree}>3</Text>
                    </View>
                    <View style={styles.bottomNavBar}>
                        <Icon name="home" size={40} style={styles.homeIcon}/>
                        <Icon name="plus-circle" size={40} style={styles.plusIcon}/>
                        <Icon name="user" size={40} style={styles.userIcon}/>
                    </View>


                </View>
            </View>
        );

}
