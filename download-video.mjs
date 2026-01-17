
import fs from 'fs';
import https from 'https';
import { URL } from 'url';

const targetUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const destination = "public/vault-preview.mp4";

const download = (url, dest) => {
    const file = fs.createWriteStream(dest);

    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    };

    const get = (currentUrl) => {
        https.get(currentUrl, options, (response) => {
            // Handle Redirects
            if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 307) {
                console.log(`Redirecting to: ${response.headers.location}`);
                get(response.headers.location);
                return;
            }

            if (response.statusCode !== 200) {
                console.error(`Failed to download: ${response.statusCode}`);
                fs.unlink(dest, () => { });
                return;
            }

            response.pipe(file);

            file.on('finish', () => {
                file.close(() => {
                    const stats = fs.statSync(dest);
                    console.log(`Download Completed. File size: ${stats.size} bytes`);
                });
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            console.error(`Error: ${err.message}`);
        });
    };

    get(url);
};

download(targetUrl, destination);
