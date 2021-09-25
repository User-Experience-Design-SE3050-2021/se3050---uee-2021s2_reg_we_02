import * as React from 'react'
import { View, Image, TextInput, Text, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

export default function Index({ navigation }) {
  const [text, onChangeText] = React.useState('')
  const profile = () => {
    navigation.push('Profile')
  }
  const AllCategoriesList = () => {
    navigation.push('AllCategoriesList')
  }
  const ItemView = () => {
    console.log('sfsd')
    navigation.push('ItemView')
  }
  const AddAdvertisement = () => {
    navigation.push('CategoryView')
  }
  const policies = () => {
    navigation.push('Policies')
    }
    
  const contactus = () => {
    navigation.push('contactus');
  }
  return (
    <View style={styles.indexContainer}>
      <ScrollView>
        <View style={styles.secondRow}>
          <Icon
            name="bars"
            size={40}
            style={styles.menuIcon}
            onPress={AllCategoriesList}
          />
          <TextInput
            style={styles.SearchInput}
            placeholder={'Search Items'}
            onPress={onChangeText}
          />
        </View>

        <View style={styles.secondRow}>
          <View style={styles.smallCard} >
            <Text style={styles.smallCardText} onPress={policies}>Safe & reliable Payments</Text>
          </View>
          <View style={styles.smallCard}>
            <Text style={styles.smallCardText} onPress={contactus}>24/7 Customer Service</Text>
          </View>
        </View>

        <View style={styles.newUserGift} onPress={profile}>
          <Icon name="gift" size={40} style={styles.giftIcon} />
          <Text style={styles.giftText}>New User Gifts</Text>
        </View>

        <View style={styles.TopRankingCard}>
          <View>
            <Text style={styles.TopRankingText}>Top Rankings</Text>
            <Image
              style={styles.TopRankingImg}
              source={require('../../assets/images/watch.jpg')}
            />
            <Text style={styles.Pursuits}>Sports & Outdoor Pursuits -</Text>
            <Text style={styles.followers}>20000+ followers</Text>
          </View>

          <View>
            <Text style={styles.viewMore}>View More ></Text>
            <Image
              style={styles.TopRankingImg}
              source={require('../../assets/images/bike.png')}
            />
            <Text style={styles.bikes}>Bikes -</Text>
            <Text style={styles.followers}>20000+ followers</Text>
          </View>
        </View>

        <View style={styles.FeaturedCategoryCard}>
          <Text style={styles.TopRankingText}>Featured Categories</Text>
          <ScrollView horizontal={true}>
            <View style={styles.FeaturedCategoryCardSubItm}>
              <Image
                style={styles.FeaturedCategoryImg}
                source={require('../../assets/images/watch.jpg')}
              />
              <Text style={styles.FeaturedCategoryCardSubItmText}>Watches</Text>
            </View>

            <View onPress={ItemView} style={styles.FeaturedCategoryCardSubItm}>
              <Image
                style={styles.FeaturedCategoryImg}
                source={require('../../assets/images/bike.png')}
              />
              <Text style={styles.FeaturedCategoryCardSubItmText}>
                Vehicles
              </Text>
            </View>

            <View style={styles.FeaturedCategoryCardSubItm}>
              <Image
                style={styles.FeaturedCategoryImg}
                source={require('../../assets/images/house1.jpg')}
              />
              <Text style={styles.FeaturedCategoryCardSubItmText}>
                Properties
              </Text>
            </View>
            <View style={styles.FeaturedCategoryCardSubItm}>
              <Image
                style={styles.FeaturedCategoryImg}
                source={require('../../assets/images/car1.jpg')}
              />
              <Text style={styles.FeaturedCategoryCardSubItmText}>Cars</Text>
            </View>
            <View style={styles.FeaturedCategoryCardSubItm}>
              <Image
                style={styles.FeaturedCategoryImg}
                source={require('../../assets/images/elec1.jpg')}
              />
              <Text style={styles.FeaturedCategoryCardSubItmText}>
                Electronic Devices
              </Text>
            </View>
            <View style={styles.FeaturedCategoryCardSubItm}>
              <Image
                style={styles.FeaturedCategoryImg}
                source={require('../../assets/images/cloth1.jpg')}
              />
              <Text style={styles.FeaturedCategoryCardSubItmText}>Cloths</Text>
            </View>
            <View style={styles.FeaturedCategoryCardSubItm}>
              <Image
                style={styles.FeaturedCategoryImg}
                source={require('../../assets/images/sport1.jpg')}
              />
              <Text style={styles.FeaturedCategoryCardSubItmText}>Sports</Text>
            </View>
          </ScrollView>
          <Text style={styles.viewMoreF}>View More ></Text>
        </View>
      </ScrollView>
      {/*footer*/}
      <View style={styles.Footer}>
        <Icon
          name="home"
          size={40}
          style={styles.footerIcon}
          onPress={profile}
        />
        <View style={styles.footerIconMiddleView}>
          <Icon
            name="plus"
            size={40}
            style={styles.footerIconMiddle}
            onPress={AddAdvertisement}
          />
        </View>
        <Icon
          name="user"
          size={40}
          style={styles.footerIcon}
          onPress={profile}
        />
      </View>
    </View>
  )
}
