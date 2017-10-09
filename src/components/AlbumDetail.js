import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import PropTypes from 'prop-types';

import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const AlbumDetail = ({ details }) =>{
   let { thumbnail_image, title, artist, image, url } = details;
 
   let { 
         thumbnailStyles,
         headerTextStyle, 
         thumbnailContainerStyles,
         albumTitle, 
         imageStyle,
        } = styles;

   return(
       <Card>

           <CardItem>
               <View style={thumbnailContainerStyles}>
                   <Image
                     style={thumbnailStyles}
                     source={{ uri:thumbnail_image}}
                     />
               </View>
                <View style={headerTextStyle}>
                    <Text style={albumTitle}>{title}</Text>
                    <Text>{artist}</Text>
               </View>
           </CardItem>

           <CardItem>
                <Image 
                    source ={{ uri:image}}
                    style = {imageStyle}
                />
           </CardItem>

           <CardItem>
               <Button onPress ={()=> Linking.openURL(url) }>
                      Buy Now
               </Button>    
           </CardItem>

       </Card>
   );
}

const styles = {
  headerTextStyle:{
    justifyContent:'space-around',
    flexDirection:'column',
  },
  thumbnailStyles:{
      width:50,
      height:50,
  },
  thumbnailContainerStyles:{
      justifyContent:'center',
      alignItems:'center',
      marginLeft:10,
      marginRight:10,
  },
  albumTitle:{
      fontSize: 20,
  },
  imageStyle:{
      height:300,
      flex:1,
      width:null,
  },
}

AlbumDetail.propTypes ={
   details: PropTypes.object.isRequired,
}

export default AlbumDetail;