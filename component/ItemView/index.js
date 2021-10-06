import * as React from 'react';
import {View,Image,Text,Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./styles";

export default function Index ({navigation}){
    return(
        <View style={styles.indexContainer}>
            <View style={styles.ImageView}>
                <Image style={styles.TopRankingImgII}  source={require("../../assets/images/bike.png")}/>
            </View>

            <View style={styles.PriceView}>
                <Text style={styles.PriceViewText}>Rs.1000000</Text>
            </View>

            <View style={styles.ContactView}>
                <Icon style={styles.ContactViewIcon} name={'phone'} size={30}/>
                <Text style={styles.ContactViewNumber}>0715088885</Text>
            </View>

            <View style={styles.DetailsView}>
                <Text style={styles.DetailsViewText}>
                    Address : kandy
                </Text>
                <Text style={styles.DetailsViewText}>
                    Note : Call for more details
                </Text>
            </View>
        </View>
    );
};

