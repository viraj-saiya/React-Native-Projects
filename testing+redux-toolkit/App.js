
import { View, Text,TouchableOpacity,Image } from 'react-native';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { launchImageLibrary } from 'react-native-image-picker';
import UserAgent from 'react-native-user-agent';
import ImagePicker from 'react-native-image-crop-picker';
// import ImageResizer from 'react-native-image-resizer';
import ImageEditor from "@react-native-community/image-editor";
import RNPhotoManipulator from 'react-native-photo-manipulator'
import Orientation from 'react-native-orientation';
// 
import { Flash } from "./Flash";

const App = () => {

  useEffect(() => {
    // Orientation.lockToLandscapeLeft()
    Flash.hasFlash(

      () => {

          // Has flash

          console.log( 'CameraModal::componentDidMount:Flash Detected' );

          // this.setState( { hasFlash: true } );

      },

      () => {

          // Does not have flash

          console.log( 'CameraModal::componentDidMount:No Flash Detected' );

          // this.setState( { hasFlash: false } );

      }

  );
  
    return () => {
    }
  }, [])
  

  const [photoDetails,setphotoDetails]=useState([])

  const [imageUri,setImageUri]=useState(null)

  const createFormData = (photo) => {

    // console.log(photo[0]);

    // const data = new FormData();
    // data.append('file', photo[0]);

    // data.append('backImage', photo[0]);

    
  
    // data.append('file', {
    //   name: photo[0].fileName,
    //   type: photo[0].type,
    //   uri:  photo[0].uri
    // });

    // data.append('backImage', {
    //   name: photo[0].fileName,
    //   type: photo[0].type,
    //   uri: Platform.OS === 'ios' ? photo[0].uri.replace('file://', '') : photo[0].uri,
    // });
  
    // data.append('backImage', {
    //   name: photo[1].fileName,
    //   type: photo[1].type,
    //   uri: Platform.OS === 'ios' ? photo[1].uri.replace('file://', '') : photo[1].uri,
    // });

    // console.log({...data._parts});


    // return JSON.stringify(data);
  
};

  
  


  const apiCalling=async ()=>{

    // const formdata = new FormData();
    // dataForm.append('photo', {
    //   uri:  photoDetails[0].uri,
    //   name: photoDetails[0].fileName,
    //   type: "image/jpeg",
    // });

    // console.log({
    //   uri:  photoDetails[0].uri,
    //   name: photoDetails[0].fileName,
    //   type: "image/jpeg",
    // });

    // formdata.append('photo',photoDetails[0].fileName);
    // formdata.append('photo',photoDetails[0].uri,photoDetails[0].fileName);
    console.log('photo',photoDetails[0],photoDetails[0].fileName);

    // let xhr = new XMLHttpRequest();
    // // xhr.open('POST', 'http://192.168.56.1:3000/api/upload');
    // xhr.open('POST', 'https://api-qa.glidecash.com/transactions/v1/transactions/icl/image/33532');

    // const formdata = new FormData();

    // formdata.append('frontImage', {...photoDetails[0], name: photoDetails[0].fileName, type: photoDetails[0].type});
    // formdata.append('backImage', {...photoDetails[1], name: photoDetails[1].fileName, type: photoDetails[1].type});
    // console.log(xhr.response);
    // xhr.send(formdata);


    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        console.log('XHR',xhr.responseText);
    }
}
    xhr.open('POST', 'https://api-qa.glidecash.com/transactions/v1/transactions/icl/image/33532', true);
    const formdata = new FormData();

    formdata.append('frontImage', {...photoDetails[0], name: photoDetails[0].fileName, type: photoDetails[0].type});
    formdata.append('backImage', {...photoDetails[1], name: photoDetails[1].fileName, type: photoDetails[1].type});
    xhr.setRequestHeader('X-Tenant-Identifier', 'glidecash')
    xhr.setRequestHeader('Cookie', 'JSESSIONID=node0adxrpeemokno11xlhi5k8znwv0.node0')
      xhr.send(formdata);


    // axios({
    //   method: 'post',
    //   url: `http://192.168.56.1:3000/api/upload`,
    //   data:{...formdata._parts[0]}
    // }).then((response) => {
    //   console.log(response.data);  
    // });












//   var config = {
//     method: 'post',
//     url: "http://192.168.56.1:3000/api/upload",
//     headers: {
//         Accept: "application/json",
//         "Content-Type": "multipart/form-data,boundary=--------------------------467306981405485828942306",
//     },
//     data: JSON.stringify(...dataForm._parts)
// };

// await axios(config)
// .then((response) => {
//     console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//     console.log(error);
// });

    




//   await axios.post("http://192.168.56.1:3000/api/upload", dataForm, {
    //     headers: {

    
    //       "Content-Type": "multipart/form-data,",
    //       "Accept": "application/json",
    //     },
    //   })
    //     // // {
    //     // //   method:'post',
    //     // //   url:'http://192.168.56.1:3000/api/upload',
    //     // //   data: dataForm,
    //     // //   headers:{
    //     // //     // 'X-Tenant-Identifier': 'glidecash',
    //     // //     // 'Cookie': 'JSESSIONID=node0adxrpeemokno11xlhi5k8znwv0.node0',
    //     // //     'Content-Type': 'multipart/form-data,boundary=--------------------------467306981405485828942306'
    //     // //   },
    //     // }
    //   .then((response)=>{
    //       console.log(JSON.stringify(response.data));
    //     })
    //     .catch((e)=>{
    //       console.log('error',e)
    //     })  
        
    // }catch(e){
    //   console.log(e)
    // }
  }










  const getImage=()=>{
    const option={
      noData:true
    }

    launchImageLibrary(option,(response)=>{
    // console.log(response)
     const image=response.assets[0]

    //  width initialImage 2000
    // height initialImage 1500
     

    let cropRegion = {
       x: 200, 
       y: 100, 
       height: 1000, 
       width: 1200,
    };
    Image.getSize(image.uri, async (width, height) => {

      console.log('width Image',width,'height Image',height)

      
      RNPhotoManipulator.crop(image.uri, cropRegion).then(path => {
        console.log(`Result image path: ${path}`);
        setImageUri(path)
        
      });
    })
      
    // console.log('path',path)
    // setImageUri(path)




     setphotoDetails([...photoDetails,image]);

    });

  }

  
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      {/* <Text>API</Text> */}
      <TouchableOpacity onPress={getImage}style={{marginBottom:60,padding:10,backgroundColor:'#000',borderRadius:20,margin:30}}>
        <Text style={{fontSize:14,color:'#FFF'}}>
          Upload Image
        </Text>
      </TouchableOpacity>
      {/* <View style={{flexDirection:'row',width:200,height:200,justifyContent:'center',alignItems:'center',}}> */}
      <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>

        {(photoDetails.length>0 )?
          // <Image source={{uri:photoDetails[0].uri}} style={{ width: 300, height:300,margin:10,borderRadius:15 }}/>
          <Image source={{uri:imageUri}} style={{ width: 1500, height:300,margin:10,borderRadius:15 }}/>
          
          :null
          }
  
        {/* {
          (photoDetails.length>1)?

            <Image source={{uri:photoDetails[1].uri}} style={{ width: 500, height:500,borderRadius:15 }}/>
            
          :null
        } */}
        
      </View>

      {/* {(photoDetails.length>=0)&&
      <TouchableOpacity onPress={apiCalling}style={{padding:10,backgroundColor:'#000',borderRadius:20,margin:30}}>
        <Text style={{fontSize:14,color:'#FFF'}}>
         Submit Image
        </Text>
      </TouchableOpacity>
      } */}



    </View>
  );
};

export default App;





