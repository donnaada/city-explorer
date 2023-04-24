# Project Name: City Explorer

**Author**: Donna Ada  
**Version**: 1.4.0

## Overview

A web application built with React that takes in city as a user input and returns information on that sepecific city.

## Deployed Site

[Live Site Hosted on Netlify](https://city-explorer670.netlify.app/)
Site's Backend hosted on [Render](https://render.com/)

## Getting Started

1. Clone the Repository
2. Run `npm install` to install all the dependencies required
3. Create an account on LocationIQ and get a personal API Key
4. Create a copy of `.env.sample` and name it `.env`
5. Replace `<YOUR_LOCATIONIQ_API_KEY>` with the API from step 3.
6. Replace `<YOUR_LOCAL_HOST>` with your local host port number.

## Architecture

- HTML
- CSS
- React Bootstrap
- Axios

## Backend API

[City Explorers API Repository](https://github.com/donnaada/city-explorer-api)

## Change Log

04/24/2023 02:25pm - Application now able to store cached data. Weather data are stored for 1 day and Movie data are stored for 7 days. Movie and weather list now displays last updated data.

04/21/2023 7:29pm - Code refactored and weather and movie components created to follow better coding practices.

04/20/2023 3:35pm - Application now connected to MovieDB via backend API and will display Movie posters from MovieDB API containing the location entered by user. Backend hosted on Render

4/19/2023 12:18am - Application now connected to Weatherbit via backend API and will display weather from Weatherbit API.

4/18/2023 7:30pm - Application now able to display map of city entered by user on front end. App also deployed via Netlify.
