# Unkn0wnCat.net
*Made using Gatsby and Cloudflare Workers*
![Update Site](https://github.com/Unkn0wnCat/Unkn0wnCat.net/workflows/Update%20Site/badge.svg)

This repository contains the code used to run the website Unkn0wnCat.net.

## Notes

You need to copy the file `.env.dist` to `.env` and fill in an YouTube API Key or set the `YOUTUBE_API_KEY` environment variable on your system for this site to work properly.

## Important Commands

### `npm run develop`

This starts an development server with hot reloading.

### `npm run deploy`

Builds the site and deploys it to Cloudflare Workers.

## Important Directories

### `/content`

Contains all dynamic texts used for the site.

### `/src`

Contains all the sites react-code.

### `/src/images`

Contains the sites images.
