import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

import { checkImageURL } from '../../../../utils'

const PopularJobCard = () => {
  return (
    <TouchableOpacity style={styles.container(selectedJob, item)} onPress={() => handleCardPress(item)}>
        <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
            <Image source={{url: checkImageURL(item.employer_logo) 
            ? item.employer_logo 
          : 'https://images.unsplash.com/photo-1679678691010-894374986c54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'}} resizeMode='contain' style={styles.logoImage} />
        </TouchableOpacity>
        <Text style={style.companyName} numberOfLines={1}>{item.employer_name}</Text>


      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard