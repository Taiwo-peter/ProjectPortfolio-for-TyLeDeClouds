# TyleDeClouds AWS Cloud Consulting Portfolio

A professional portfolio website showcasing TyleDeClouds AWS Cloud Consulting expertise, featuring comprehensive technical implementation details and cloud architecture solutions.

![TyleDeClouds Preview](images/Tyledeclouds%20website%20architecture_1746779351994.png)

## Contents

- [Quick Start](#quick-start)
- [Detailed Deployment Guide](#detailed-deployment-guide)
- [Viewing Locally](#viewing-locally)
- [Website Features](#website-features)
- [Customization](#customization)
- [Technologies Used](#technologies-used)
- [Support](#support)

## Quick Start

1. **Easy Deploy Script**: Run `bash deploy-to-github.sh` to quickly set up and push to GitHub Pages
2. **Manual Setup**: Follow the [Detailed Deployment Guide](#detailed-deployment-guide) below
3. **Test Locally**: Open `view-locally.html` for options to preview the site without deployment

## Detailed Deployment Guide

### 1. Create a new GitHub repository

Create a new repository on GitHub named `TyLeDeClouds.py` at: https://github.com/new

### 2. Clone the repository

```bash
git clone https://github.com/Taiwo-peter/TyLeDeClouds.py.git
cd TyLeDeClouds.py
```

### 3. Add files to the repository

Copy all files from this folder to your repository:
- index.html
- images/ directory with all AWS screenshots
- All other support files

### 4. Commit and push to GitHub

```bash
git add .
git commit -m "Initial TyleDeClouds website"
git push origin main
```

### 5. Enable GitHub Pages

1. Go to your GitHub repository
2. Click on "Settings"
3. In the left sidebar, click on "Pages"
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"

Your website will be available at: `https://taiwo-peter.github.io/TyLeDeClouds.py/`

## Viewing Locally

For local testing before deploying:

1. **Simple Method**: Open `index.html` directly in your browser
2. **Using a Server**: 
   - With Python: Run `python -m http.server` in this directory
   - With Node.js: Run `npx serve`
   - Visit `http://localhost:8000` in your browser

Or just open `view-locally.html` for more detailed instructions.

## Website Features

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Key Sections**:
  - AWS Cloud Solutions overview
  - Project screenshots from actual implementations
  - Detailed technical implementation examples
  - Contact information and availability
- **Case Studies**: Showcases real AWS projects including:
  - Serverless architectures
  - Load balancing configurations
  - IAM and VPC security setups
  - Email templating systems
  - Resource monitoring solutions

## Customization

To customize the website:

1. Edit `index.html` to update content, sections, or layout
2. Add or replace images in the `images/` directory
3. Update contact information and links as needed
4. Commit and push your changes to GitHub

## Technologies Used

- HTML5
- Tailwind CSS
- Font Awesome Icons
- Vanilla JavaScript for smooth scrolling

## Support

For questions or support, contact:
- Email: tyledeclouds@gmail.com
- GitHub: https://github.com/Taiwo-peter/TyLeDeClouds.py.git