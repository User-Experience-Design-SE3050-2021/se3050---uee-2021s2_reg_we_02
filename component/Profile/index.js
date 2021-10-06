import React from 'react';
import {View,Image,Text,TextInput,Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./styles";

export default function Index ({navigation}){
    const DashBoard =() =>{
        if(name != '' && email != '' & mobile != ''){
            navigation.push('DashBoard');
        }else{
            alert('Inpult Fields Can Not Be Emprty.!');
        }
        
    }
    const [name,nameChange] = React.useState('Maleesha Suraj');
    const [email,emailChange] = React.useState('malisha2019@gmail.com');
    const [mobile,mobileChange] = React.useState('+94756299785');
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
                    <TextInput style={styles.RowValuesText}
                        onChangeText={nameChange}
                        value={name}
                    />
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
                    <TextInput style={styles.RowValuesText}
                        onChangeText={emailChange}
                        value={email}
                    />
                    <Icon style={styles.RowValuesIcon} name={"edit"} size={20}/>
                </View>
            </View>

            <View style={styles.RowII}>
                <Text style={styles.RowValuesTopic}>Mobile</Text>
                <View style={styles.RowValues}>
                    <TextInput style={styles.RowValuesText}
                        onChangeText={mobileChange}
                        value={mobile}
                    />
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
                title="Log out"
                color="#024F85"
                size ={30}
            />
        </View>
    );
};

