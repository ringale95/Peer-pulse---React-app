// Import necessary modules
import express from 'express';
import crypto from 'crypto';
import { exec } from 'child_process';

// Create a router instance
const router = express.Router();

// Middleware to validate the secret
const validateSecret = (req, res, next) => {
    const signature = req.headers['x-hub-signature'];
    const secret = process.env.WEBHOOK_SECRET || 'your_secret'; // Use an environment variable for the secret
    const hmac = crypto.createHmac('sha1', secret);
    const digest = 'sha1=' + hmac.update(JSON.stringify(req.body)).digest('hex');

    if (signature === digest) {
        return next();
    } else {
        return res.status(403).send('Request body was not signed or verification failed');
    }
};

// Handle the POST request to /redeploy
router.post('/', validateSecret, (req, res) => {
    exec('git pull && npm install && npm run build && pm2 restart ecosystem.config.js', (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
            return res.status(500).send('Deployment failed');
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        res.status(200).send('Deployment successful');
    });
});

export default router;
