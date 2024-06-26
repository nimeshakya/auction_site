# Auction Site

## Introduction

A website for auction where users are either buyers or sellers. Buyers can bid on available auctions and sellers can add new items to sell.

## Installation

To run the project as a dev you can just run the Django server for backend and Vite server for React as frontend.

### Running Django server

1.  `cd auction_site` assuming you've cloned the repo without changing root directory name.
2.  Install all dependencies listed in `requirements.txt`:
```bash
pip install -r requirements.txt
```
3.  Create a database on local `pgAdmin` and set up environment variables for `settings.py` in the folder `backend/`.
4.  Run the server
```bash
python manage.py runserver
```

### Runnind Vite server

1.  Change directory to `forntend/`:
```bash
cd frontend
```
2.  Install the dependencies:
```bash
npm install
```
3.  Run the vite app:
```bash
npm run dev
```
