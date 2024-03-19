import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  StyleSheet,
} from 'react-native';
import React, { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { CompleteChapterContext } from '../Context/CompleteChapterContext';

export default function ChapterSection({ chapterList,
  userEnrolledCourse }) {

    const {isChapterComplete,setIsChapterComplete}=
    useContext(CompleteChapterContext);


  const navigation = useNavigation();
  // console.log(userEnrolledCourse[0]?.completedChapter[0])
  const OnChapterPress = (chapter) => {
    if (userEnrolledCourse[0].length == 0) {
      ToastAndroid.show('Нажмите "Читать лекцию"!', ToastAndroid.LONG);
      return;
    } else {
      setIsChapterComplete(false);
      navigation.navigate('chapter-content', {
        content: chapter.content,
        chapterId: chapter.id,
        userCourseRecordId: userEnrolledCourse[0]?.id,
      });
    }
  };


  const checkIsChapterCompleted=(chapterId)=>{
    if(userEnrolledCourse[0]?.completedChapter?.length<=0)
    {
      return false;
    }
    const resp=userEnrolledCourse[0]?.completedChapter
    .find(item=>item.chapterId==chapterId)

    return resp;
  }

  return (
    <View style={{padding:10,
    backgroundColor:Colors.WHITE,marginTop:20,
    borderRadius:15,marginBottom:27}}>
        <Text style={{fontFamily:'montserrat-bold',
    fontSize:22}}>Главы</Text>
        {chapterList.map((item,index)=>(
            <TouchableOpacity 
            style={[checkIsChapterCompleted(item.id)
              ?styles.CompleteChapter
              :styles.inCompleteChapter]} 
            onPress={()=>OnChapterPress(item)}>
            <View style={{display:'flex',flexDirection:'row',
            alignItems:'center',gap:10}}>
             {checkIsChapterCompleted(item.id)?
             <Ionicons name="checkmark-circle" size={30} color={Colors.GREEN}/>
             :  <Text style={{fontFamily:'montserrat-regular',
            fontSize:27,color:Colors.GRAY}}>{index+1}</Text>}
                <Text style={{fontFamily:'montserrat-regular',
            fontSize:21,color:Colors.GRAY}}>{item.title}</Text>
            </View>
          {userEnrolledCourse.length==0?
            <Ionicons name="md-lock-closed" size={25} color={Colors.GRAY} />
            :
            <Ionicons name="play" size={25} color={checkIsChapterCompleted(item.id)?Colors.GREEN: Colors.GRAY} />
          }
            </TouchableOpacity>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
  inCompleteChapter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.GREY,
  },
  CompleteChapter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.GREEN,
    backgroundColor: Colors.LIGHT_GREEN,
  },
});
