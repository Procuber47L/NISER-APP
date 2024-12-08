#!/bin/bash

if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" || "$OSTYPE" == "win32" ]]; then

    ./backend/.venv/Scripts/activate.bat
    rm -rf ./backend/static/*
    cp -r ./assets/arc ./backend/static
    cd frontend
    npm run build
    cd ../backend
    python manage.py collectstatic --noinput

else
    source ./backend/.venv/bin/activate
    rm -rf ./backend/static/*
    cp -r ./assets/arc ./backend/static
    cd frontend
    npm run build
    cd ../backend
    python manage.py collectstatic --noinput
fi

echo "Build process completed"
