# This is the python code for downloading the reactPortfolioBuild.zip folder 
# from the build bucket; extracting each individual file from zip; uploading 
# each individual file to portfolio bucket.

import json
import boto3
from io import BytesIO
import zipfile

def lambda_handler(event, context):
    
    
    sns = boto3.resource('sns')
    # SNS Topic is the deployment of react portfolio by email
    # A topic is a logical access point which acts as a communication channel
    topic = sns.Topic('arn:aws:sns:us-east-1:928335481473:deploy-react-portfolio-topic')

    location = {
        'bucketName': 'justin-sparks-react-portfolio-build',
        'objectKey': 'reactPortfolioBuild.zip'
    }

    try:
        # Getting the job object from the event object
        job = event.get('CodePipeline.job')
        # If the job isnt invoked by pipeline, there wont be a job.
        if job:
            # Looping through artifacts in inputArtifacts[] from event object in json file.
            # CodePipeline.job > data > inputArtifacts > name
            for artifact in job['data']['inputArtifacts']:
                if artifact['name'] == 'BuildArtifact':
                    # s3Location (in job event json file) lists the bucket name and artifact name (objectKey)
                    # for the input artifact from codepipeline s3 bucket
                    location = artifact['location']['s3Location']
            print('Building portfolio from ' + str(location))

        s3 = boto3.resource('s3')

        portfolio_bucket = s3.Bucket('justin-sparks-react-portfolio')
        build_bucket = s3.Bucket(location["bucketName"])

        # Downloading the zip file to memory, not folder structure 
        portfolio_zip = BytesIO()
        build_bucket.download_fileobj(location["objectKey"], portfolio_zip)

        # extracting the files from the zip folder
        with zipfile.ZipFile(portfolio_zip) as myzip:
            # must iterate through myzip.namelist() to get each file name in zip
            for nm in myzip.namelist():
                # opening each file in iteration
                obj = myzip.open(nm)
                # after individual file is opened, uploading it to portfolio bucket
                # upload_fileobj(the_object, the_file_name)
                portfolio_bucket.upload_fileobj(obj, nm)
                # setting each file in portfolio bucket to public-read
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

        # Publishing (sending) an email to subscription list (list of emails; only my email at the moment) that portfolio was deployed successfully
        topic.publish(Subject="Portfolio Deploy", Message="Portfolio was deployed successfully.")
        if job:
            # Use client, not resource. No resource for pipeline.
            codepipeline = boto3.client('codepipeline')
            # Lambda needs to tell codepipeline that it ran successfully.
            codepipeline.put_job_success_result(jobId=job['id'])
        return {
            'statusCode': 200,
            'body': json.dumps('The function ran properly. Everything works!')
        }
    except:
        topic.publish(Subject="Portfolio Deploy", Message="Portfolio deployment was not successful.")
        raise 
        return {
            'statusCode': 400,
            'body': json.dumps('The function did not run properly. Something went wrong.')
        }
