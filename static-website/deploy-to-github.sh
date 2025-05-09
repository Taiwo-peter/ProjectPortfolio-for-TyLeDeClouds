#!/bin/bash

# Simple script to help deploy to GitHub Pages
# Usage: bash deploy-to-github.sh

echo "==== TyleDeClouds GitHub Pages Deployment Tool ===="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "Error: Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "Setting up a new Git repository..."
    git init
    
    echo "Enter your GitHub username:"
    read username
    
    echo "Enter your repository name (default: TyLeDeClouds.py):"
    read repo_name
    
    if [ -z "$repo_name" ]; then
        repo_name="TyLeDeClouds.py"
    fi
    
    git remote add origin "https://github.com/$username/$repo_name.git"
    echo "Remote repository set to: https://github.com/$username/$repo_name.git"
else
    echo "Using existing Git repository"
fi

# Add all files to git
echo ""
echo "Adding files to repository..."
git add .

# Commit changes
echo ""
echo "Enter a commit message (default: Update TyleDeClouds website):"
read commit_message

if [ -z "$commit_message" ]; then
    commit_message="Update TyleDeClouds website"
fi

git commit -m "$commit_message"

# Push to GitHub
echo ""
echo "Pushing to GitHub..."
git push -u origin main

echo ""
echo "==== Deployment Complete ===="
echo ""
echo "Your website should be available at: https://<your-username>.github.io/<repository-name>/"
echo ""
echo "If this is your first push, you'll need to enable GitHub Pages in your repository settings:"
echo "1. Go to your repository settings on GitHub"
echo "2. Scroll down to 'GitHub Pages'"
echo "3. Select 'main' branch as the source"
echo "4. Click Save"
echo ""
echo "Your site will be available in a few minutes!"

exit 0