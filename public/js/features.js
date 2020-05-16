var bucketName = 'rabidzoo-pics';
var bucketRegion = 'US East (Ohio) us-east-2';
var IdentityPoolId = 'us-east-2:82137d07-c406-4391-870c-64ee2f480646' 
;

 AWS.config.update({
                region: bucketRegion,
                credentials: new AWS.CognitoIdentityCredentials({
                    IdentityPoolId: IdentityPoolId
                })
            });

            var s3 = new AWS.S3({
                apiVersion: '2006-03-01',
                params: {Bucket: bucketName}
        });


function s3upload() {   var files = document.getElementById('fileUpload').files;   if (files) 
   {
     var file = files[0];
     var fileName = file.name;
     var filePath = 'my-first-bucket-path/' + fileName;
     var fileUrl = 'https://' + bucketRegion + '.amazonaws.com/my-    first-bucket/' +  filePath;     s3.upload({        Key: filePath,
        Body: file,
        ACL: 'public-read'
        }, function(err, data) {
        if(err) {
        reject('error');
        }
        alert('Successfully Uploaded!');
        }).on('httpUploadProgress', function (progress) {
        var uploaded = parseInt((progress.loaded * 100) / progress.total);
        $("progress").attr('value', uploaded);      });
   }
};