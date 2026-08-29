const { execSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');
const path = require('path');
const fs = require('fs');

const input = path.join(__dirname, '..', 'public', 'images', 'gallery', 'drone-telemetry-demo-video.mp4');
const tempOutput = path.join(__dirname, '..', 'public', 'images', 'gallery', 'drone-telemetry-demo-video-compressed.mp4');

console.log('Starting compression with ffmpeg:', ffmpeg);
const cmd = `"${ffmpeg}" -y -i "${input}" -vcodec libx264 -crf 28 -preset fast -vf "scale='min(1280,iw)':-2" -acodec aac -b:a 128k -movflags +faststart "${tempOutput}"`;

console.log('Running command...');
execSync(cmd, { stdio: 'inherit' });

const origSize = fs.statSync(input).size;
const newSize = fs.statSync(tempOutput).size;

console.log('Original size:', (origSize / (1024 * 1024)).toFixed(2), 'MB');
console.log('Compressed size:', (newSize / (1024 * 1024)).toFixed(2), 'MB');

if (newSize < 24 * 1024 * 1024 && newSize > 0) {
  fs.copyFileSync(tempOutput, input);
  fs.unlinkSync(tempOutput);
  console.log('Successfully replaced original with web-compressed version!');
}
