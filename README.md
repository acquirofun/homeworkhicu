# HICU-222 IELTS Homework Hub - GitHub Integration

A secure web application for uploading and managing IELTS homework files directly to GitHub, organized by module (Listening, Reading, Writing, Speaking).

## Features

- ✅ **Password Protection**: Only authorized batch members can access (Security Code: `BanKsa@2026`)
- ✅ **Upload Key Protection**: Secret key required to upload files (Upload Key: `sanywillupload`)
- ✅ **Direct GitHub Upload**: Files are uploaded directly to your GitHub repository
- ✅ **Module Organization**: Files automatically organized into folders by IELTS module
- ✅ **Cross-Device Access**: Anyone with the password can view homework from any device
- ✅ **File Support**: Screenshots (PNG, JPG, JPEG), PDFs, and Word documents (DOCX)
- ✅ **Full-Screen Preview**: Click images to view in full resolution
- ✅ **Download Support**: Direct download links for PDFs and Word files
- ✅ **Pre-configured**: GitHub repository already set up - just start using!

## Quick Start

### For Anyone Who Wants to Upload Files

1. Open `index.html` in your browser
2. Enter the security code: `BanKsa@2026`
3. Click **Publish New Homework**
4. Enter the **secret upload key**: `sanywillupload`
5. Select module, add title/notes, upload files
6. Click **Upload to GitHub**

**Note**: GitHub settings are pre-configured - no setup needed!

### For Viewing Only (No Upload)

1. Open `index.html` in your browser
2. Enter the security code: `BanKsa@2026`
3. That's it! You can view all homeworks

**Note**: Anyone with the upload key can upload files. Viewers can only view and download.

## Repository Structure

Files are automatically organized in your GitHub repository:
```
homeworkhicu/
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

## GitHub Repository

- **Repository**: https://github.com/acquirofun/homeworkhicu
- **Status**: Public (accessible to all)
- **Owner**: acquirofun

## File Size Limits

- GitHub has a **100 MB limit per file**
- For files larger than 100 MB, you'll need to use Git LFS (Large File Storage)
- Most homework screenshots and documents are well under this limit

## Troubleshooting

### Upload Failed - "Error to fetch" or Network Error

**Common causes and solutions:**

1. **Check GitHub Repository**
   - Visit: https://github.com/acquirofun/homeworkhicu
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
- The repository must be public (it currently is)
- Share the `index.html` file with your batchmates
- They just need the password: `BanKsa@2026`

## Deployment

To deploy this application permanently for easy access:

1. Push `index.html` to your GitHub repository
2. Go to [Vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click **Add New > Project**
5. Import your repository
6. Click **Deploy**

You'll get a permanent URL like: `https://homeworkhicu.vercel.app`

## Access Levels

| Feature | With Upload Key | Without Upload Key |
|--------|----------------|-------------------|
| View homeworks | ✅ | ✅ |
| Download files | ✅ | ✅ |
| Upload homeworks | ✅ | ❌ |
| Delete homeworks | ✅ | ❌ |
| GitHub Setup | ❌ (Pre-configured) | ❌ (Pre-configured) |

**Security Codes:**
- **Access Password**: `BanKsa@2026` (to enter the portal)
- **Upload Key**: `sanywillupload` (to upload files)

**Pre-configured:**
- GitHub Repository: acquirofun/homeworkhicu
- GitHub PAT: Pre-configured with proper permissions
- No GitHub setup needed for anyone!

---

**Built for HICU-222 IELTS Batch**
