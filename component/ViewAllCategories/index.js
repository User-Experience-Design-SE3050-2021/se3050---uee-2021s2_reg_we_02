import * as React from 'react';
import {View,Image,Text,Picker,ScrollView,TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./styles";

export default function Index ({navigation}){
    const profile =() =>{
        navigation.push('ItemView');
    }
    return(
        <View style={styles.indexContainer}>
            <View style={styles.filterCard}>
                <Text style={styles.filterCardText}>Filters</Text>
                <View style={styles.filterView}>
                    <View style={styles.filterViewProvince}>
                        <Text style={styles.filterViewProvinceText}>Select Province</Text>
                        <Picker
                            style={{ height: 50, width: 150,borderColor:'#000',borderWidth:1 }}
                        >
                            <Picker.Item label="Central" value="Central" />
                            <Picker.Item label="Eastern" value="Eastern" />
                            <Picker.Item label="North Central" value="North Central" />
                            <Picker.Item label="Northern" value="Northern" />
                            <Picker.Item label="North Western" value="North Western" />
                            <Picker.Item label="Sabaragamuwa" value="Sabaragamuwa" />
                            <Picker.Item label="Uva" value="Uva" />
                            <Picker.Item label="Western" value="Western" />
                        </Picker>
                    </View>

                    <View style={styles.filterViewDistrict}>
                        <Text style={styles.filterViewProvinceText}>Select District</Text>
                        <Picker
                            style={{ height: 50, width: 150,borderColor:'#000',borderWidth:1 }}
                        >
                            <Picker.Item label="Kandy" value="Kandy" />
                            <Picker.Item label="Matale" value="Matale" />
                            <Picker.Item label="NuwaraEliya" value="NuwaraEliya" />
                        </Picker>
                    </View>
                </View>
            </View>

            <View style={styles.body}>
                <ScrollView>
                    <TouchableHighlight  underlayColor={"COLOR"} >
                        <View style={styles.MainCatItem}>
                            <Image style={styles.TopRankingImg}  source={require("../../assets/images/bike.png")}/>
                            <Text style={styles.MainCatText}>Bikes</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight  underlayColor={"COLOR"}  >
                        <View style={styles.MainCatItem} >
                            <Image style={styles.TopRankingImg}  source={require("../../assets/images/house1.jpg")}/>
                            <Text style={styles.MainCatText}>Properties</Text>

                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight  underlayColor={"COLOR"} >
                        <View style={styles.MainCatItem}>
                            <Image style={styles.TopRankingImg}  source={require("../../assets/images/watch.jpg")}/>
                            <Text style={styles.MainCatText}>Watches</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight  underlayColor={"COLOR"} >
                        <View style={styles.MainCatItem}>
                            <Image style={styles.TopRankingImg}  source={require("../../assets/images/car1.jpg")}/>
                            <Text style={styles.MainCatText}>Cars</Text>
                        </View>
                    </TouchableHighlight>
                </ScrollView>
                <View>
                    <Text style={styles.Topic}>Recommended Bikes</Text>
                    <View style={styles.filterView}>
                        <TouchableHighlight  underlayColor={"COLOR"} onPress={profile} >
                            <View>
                                <Image style={styles.TopRankingImgII}  source={require("../../assets/images/bike3.png")}/>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight  underlayColor={"COLOR"} onPress={profile}>
                            <View>
                                <Image style={styles.TopRankingImgII}  source={require("../../assets/images/bike.png")}/>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.filterView}>
                        <TouchableHighlight  underlayColor={"COLOR"} onPress={profile} >
                            <View>
                                <Image style={styles.TopRankingImgII}  source={require("../../assets/images/bike6.jpg")}/>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight  underlayColor={"COLOR"} onPress={profile}>
                            <View>
                                <Image style={styles.TopRankingImgII}  source={require("../../assets/images/bike4.jpg")}/>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.filterView}>
                        <TouchableHighlight  underlayColor={"COLOR"} onPress={profile} >
                            <View>
                                <Image style={styles.TopRankingImgII}  source={require("../../assets/images/bike3.png")}/>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight  underlayColor={"COLOR"} onPress={profile}>
                            <View>
                                <Image style={styles.TopRankingImgII}  source={require("../../assets/images/bike4.jpg")}/>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.filterView}>
                        <TouchableHighlight  underlayColor={"COLOR"} onPress={profile} >
                            <View>
                                <Image style={styles.TopRankingImgII}  source={require("../../assets/images/bike6.jpg")}/>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight  underlayColor={"COLOR"} onPress={profile}>
                            <View>
                                <Image style={styles.TopRankingImgII}  source={require("../../assets/images/bike.png")}/>
                            </View>
                        </TouchableHighlight>
                    </View>

                </View>
            </View>

        </View>
    );
};

