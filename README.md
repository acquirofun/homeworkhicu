# HICU-222 IELTS Homework Hub - GitHub Integration

A secure web application for uploading and managing IELTS homework files directly to GitHub, organized by module (Listening, Reading, Writing, Speaking).

## Features

- ✅ **Password Protection**: Only authorized batch members can access
- ✅ **Upload Key Protection**: Secret key required to upload files
- ✅ **Direct GitHub Upload**: Files are uploaded directly to your GitHub repository
- ✅ **Module Organization**: Files automatically organized into folders by IELTS module
- ✅ **Cross-Device Access**: Anyone with the password can view homework from any device
- ✅ **File Support**: Screenshots (PNG, JPG, JPEG), PDFs, and Word documents (DOCX)
- ✅ **Full-Screen Preview**: Click images to view in full resolution
- ✅ **Download Support**: Direct download links for PDFs and Word files

## Quick Start

### Local Development

1. Copy `config.example.js` to `config.js`
2. Fill in your GitHub credentials in `config.js`
3. Open `index.html` in your browser
4. Enter the security code (contact admin for credentials)
5. Use the app normally

### Deployed Version (Vercel)

1. Visit the deployed URL
2. Enter the security code (contact admin for credentials)
3. Use the app normally
4. GitHub credentials are set via environment variables in Vercel

### For Anyone Who Wants to Upload Files

1. Open the app (local or deployed)
2. Enter the security code
3. Click **Publish New Homework**
4. Enter the secret upload key (contact admin for credentials)
5. Select module, add title/notes, upload files
6. Click **Upload to GitHub**

### For Viewing Only (No Upload)

1. Open the app (local or deployed)
2. Enter the security code
3. That's it! You can view all homeworks

**Note**: Anyone with the upload key can upload files. Viewers can only view and download.

## Repository Structure

Files are automatically organized in the GitHub repository:
```
repository/
├── listening/
│   └── timestamp-filename.png
├── reading/
│   └── timestamp-filename.pdf
├── writing/
│   └── timestamp-filename.docx
├── speaking/
│   └── timestamp-filename.png
└── homeworks.json (metadata)
```

## File Size Limits

- GitHub has a **100 MB limit per file**
- For files larger than 100 MB, you'll need to use Git LFS (Large File Storage)
- Most homework screenshots and documents are well under this limit

## Troubleshooting

### Upload Failed - "Error to fetch" or Network Error

**Common causes and solutions:**

1. **Check GitHub Repository**
   - Visit your GitHub repository
   - Make sure the repository exists and is accessible
   - It should be a public repository

2. **Check Internet Connection**
   - Ensure you have a stable internet connection
   - Try uploading a smaller file first

3. **File Size Limit**
   - GitHub has a 100 MB limit per file
   - Try compressing large files before uploading

4. **Repository Permissions**
   - Ensure the repository is not locked or archived
   - The PAT is pre-configured with proper permissions

### "Failed to upload [filename]" with specific error
- The error message will show the exact GitHub API error
- Common errors:
  - `404 Not Found`: Repository doesn't exist
  - `403 Forbidden`: PAT has expired or doesn't have permissions
  - `422 Unprocessable Entity`: File already exists or is too large

### PAT Expired?
If uploads stop working, the pre-configured PAT may have expired. Contact the admin to update it.

### Files not showing for others
- The repository must be public
- Share the `index.html` file with your batchmates
- They need the security code from the admin

## Deployment

### Deploy to Vercel with Environment Variables

1. **Push to GitHub**

2. **Go to Vercel**
   - Visit [Vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click **Add New > Project**

3. **Import Repository**
   - Find and import your repository
   - Click **Configure**

4. **Set Environment Variables**
   - Add these environment variables:
     - `GITHUB_USERNAME`: Your GitHub username
     - `GITHUB_REPO`: Your repository name
     - `GITHUB_PAT`: Your GitHub Personal Access Token
   - Click **Add** for each variable

5. **Configure Build Settings**
   - **Build Command**: `node build.js`
   - **Output Directory**: `./`
   - Click **Deploy**

6. **Access Your Site**
   - Wait for deployment (30-60 seconds)
   - Visit your deployed URL

### For Local Development

1. Copy `config.example.js` to `config.js`
2. Fill in your actual GitHub credentials in `config.js`
3. Open `index.html` in your browser
4. The app will use your local `config.js` file

**Note**: `config.js` is in `.gitignore` and will never be committed to GitHub, keeping your token secure!

## Access Levels

| Feature | With Upload Key | Without Upload Key |
|--------|----------------|-------------------|
| View homeworks | ✅ | ✅ |
| Download files | ✅ | ✅ |
| Upload homeworks | ✅ | ❌ |
| Delete homeworks | ✅ | ❌ |
| GitHub Setup | ❌ (Pre-configured) | ❌ (Pre-configured) |

**Security Codes:**
- **Access Password**: Contact admin for credentials (to enter the portal)
- **Upload Key**: Contact admin for credentials (to upload files)

**Pre-configured:**
- GitHub credentials are pre-configured by the admin
- No GitHub setup needed for users!

---

**Built for HICU-222 IELTS Batch**
