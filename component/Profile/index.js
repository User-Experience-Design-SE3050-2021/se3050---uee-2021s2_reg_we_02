import * as React from 'react';
import {View,Image,Text,Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./styles";

export default function Index ({navigation}){
    const DashBoard =() =>{
        navigation.push('DashBoard');
    };
    const logout = () => {
        navigation.push('Login')
    }
    return(
        <View style={styles.indexContainer}>
            <View style={styles.Row}>
                <Text style={styles.RowValuesTopic}>Profile Picture</Text>
                <View style={styles.RowValues}>
                    <Image style={styles.ProfilePicture}  source={require("../../assets/images/profile.jpg")}/>
                </View>
            </View>

            <View style={styles.Row}>
                <Text style={styles.RowValuesTopic}>Name</Text>
                <View style={styles.RowValues}>
                    <Text style={styles.RowValuesText}>Maleesha Suraj</Text>
                    <Icon style={styles.RowValuesIcon} name={"edit"} size={20}/>
                </View>
            </View>

            <View style={styles.Row}>
                <Text style={styles.RowValuesTopic}>Member Center</Text>
                <View style={styles.RowValues}>
                    <Text style={styles.RowValuesText}>Silver Member</Text>
                    <Icon style={styles.RowValuesIcon} name={"edit"} size={20}/>
                </View>
            </View>

            <View style={styles.Row}>
                <Text style={styles.RowValuesTopic}>Email</Text>
                <View style={styles.RowValues}>
                    <Text style={styles.RowValuesText}>maleesha@gmail.com</Text>
                    <Icon style={styles.RowValuesIcon} name={"edit"} size={20}/>
                </View>
            </View>

            <View style={styles.RowII}>
                <Text style={styles.RowValuesTopic}>Mobile</Text>
                <View style={styles.RowValues}>
                    <Text style={styles.RowValuesText}>+94756299785</Text>
                    <Icon style={styles.RowValuesIcon} name={"edit"} size={20}/>
                </View>
            </View>

            <Button
                title="Save Changes"
                color="#F79605"
                size ={30}
                onPress={DashBoard}
            />
            <View style={styles.SampleRow}>

            </View>
            <Button
                onPress={logout}
                title="Log out"
                color="#024F85"
                size ={30}
            />
        </View>
    );
};

