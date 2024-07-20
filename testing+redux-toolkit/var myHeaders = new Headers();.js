var myHeaders = new Headers();
myHeaders.append("X-Tenant-Identifier", "glidecash");
myHeaders.append("Cookie", "JSESSIONID=node0adxrpeemokno11xlhi5k8znwv0.node0");

var formdata = new FormData();
formdata.append("frontImage", fileInput.files[0], "/C:/Users/saiya/Downloads/img5.jpg");
formdata.append("backImage", fileInput.files[0], "/C:/Users/saiya/Downloads/img4.jpeg");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://api-qa.glidecash.com/transactions/v1/transactions/icl/image/33532", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));