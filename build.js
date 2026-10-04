// Build script to inject environment variables into index.html
// Run this before deploying or as part of the build process

const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// Replace the config script with environment variables
const modifiedHtml = indexHtml.replace(
    /<script>\s*window\.GITHUB_CONFIG = \{[^}]+\};\s*<\/script>\s*<script src="config\.js"[^>]*><\/script>/,
    `<script>
        window.GITHUB_CONFIG = {
            username: '${process.env.GITHUB_USERNAME || 'acquirofun'}',
            repo: '${process.env.GITHUB_REPO || 'homeworkhicu'}',
            token: '${process.env.GITHUB_PAT || ''}'
        };
    </script>`
);

fs.writeFileSync(path.join(__dirname, 'index.html'), modifiedHtml);
console.log('Environment variables injected into index.html');
