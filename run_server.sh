#!/bin/bash
sheet_id="$(<sheet_id.txt)"
wget "https://docs.google.com/spreadsheets/d/${sheet_id}/export?format=csv&gid=0" -O server/data/db.csv
npm start --prefix ./server
