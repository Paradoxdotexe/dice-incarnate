import { execSync } from 'child_process';

console.log('Building client...');
execSync('npm run build');

console.log('Uploading files to S3...');
execSync('aws s3 sync ./dist s3://diceincarnate.com');

console.log('Invalidating cloudfront cache...');
execSync('aws cloudfront create-invalidation --distribution-id E1ZKT2VA9J5JWS --paths "/*"');

console.log(`Client deployed to https://diceincarnate.com.`);
