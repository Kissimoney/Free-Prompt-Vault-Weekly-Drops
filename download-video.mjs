
import fs from 'fs';
import https from 'https';

const url = "https://videos.pexels.com/video-files/5453622/5453622-hd_1920_1080_30fps.mp4";
const file = fs.createWriteStream("public/vault-preview.mp4");

https.get(url, (response) => {
    if (response.statusCode === 302 || response.statusCode === 301) {
        https.get(response.headers.location, (redirectResponse) => {
            redirectResponse.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log("Download Completed after redirect");
            });
        });
    } else {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log("Download Completed");
        });
    }
}).on('error', (err) => {
    fs.unlink("public/vault-preview.mp4", () => { });
    console.error(err.message);
});
