var bucketName = 'rabidzoo-pics';
var bucketRegion = 'us-east-2';
var IdentityPoolId = 'us-east-2:82137d07-c406-4391-870c-64ee2f480646' 
;

 AWS.config.update({
                region: bucketRegion,
                accessKeyId: 'AKIAJGOAXD2WUY6WQPBQ',
                secretAccessKey: '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',
                dirName: 'uploads'
            });

            var s3 = new AWS.S3(config);


function s3upload() {   var files = document.getElementById('fileUpload').files;   if (files) 
   {
     var file = files[0];
     var fileName = file.name;
     var filePath = 'uploads/' + fileName;
     var fileUrl = 'https://' + bucketRegion + '.amazonaws.com/rabidzoo-pics/' +  filePath;     s3.upload({        Key: filePath,
        Body: file,
        ACL: 'public-read'
        }, function(err, data) {
        if(err) {
        return "an error has occured.";
        }
        alert('Successfully Uploaded!');
        }).on('httpUploadProgress', function (progress) {
        var uploaded = parseInt((progress.loaded * 100) / progress.total);
        $("progress").attr('value', uploaded);      });
   }
};