#!/bin/bash

# Activate the virtual environment
source ./backend/.venv/bin/activate

# Remove the existing static files directory
rm -rf ./backend/static/*

# Copy assets to the static directory
cp -r ./assets/arc ./backend/static

# Navigate to the frontend directory
cd frontend

# Build the frontend assets
npm run build

# Navigate back to the backend directory
cd ../backend

# Collect static files for the Django project
python manage.py collectstatic --noinput

# Print a completion message
echo "Build process completed"