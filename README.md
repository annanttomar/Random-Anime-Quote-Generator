# Anime Quote Generator

Welcome to your Anime Quote Generator! This is a beautiful, interactive, and mobile-responsive web application designed to generate inspiring anime quotes with an animated background and optional background music.

## Features

*   **Dynamic Quotes**: Generates from 100 diverse anime quotes.
*   **Animated Video Background**: An immersive video background for a rich visual experience.
*   **Embedded Spotify Track**: Features a specific Spotify track for background music.
*   **Interactive Design**: Smooth animations, hover effects, and a responsive layout.
*   **Showcase Panel**: A brief introductory panel for social media sharing, appearing for 5 seconds on load.
*   **Fullscreen Option**: Toggle full-screen mode for an immersive viewing experience.

## Customization Guide

Here's how you can easily customize the content of your Anime Quote Generator:

### 1. Changing the Spotify Track (Music)

To change the background music to a different Spotify song:

1.  Go to **Spotify** (either the web player or the desktop app).
2.  Find the specific **song** you want to embed.
3.  Click the **three dots (...)** next to the song title (or right-click if on desktop).
4.  Navigate to **"Share"** and then select **"Embed song"**.
5.  A pop-up will appear with an `<iframe>` code. You need to copy the `src` URL from this code. It will look something like `https://open.spotify.com/embed/track/...`.
6.  Open your project's `index.html` file in a text editor.
7.  Locate the `<div class="spotify-player">` section (around line 65).
8.  Inside this `div`, find the `<iframe>` tag and replace the `src` attribute's value with the new URL you copied from Spotify.

    **Original:**
    ```html
    <iframe 
        src="https://open.spotify.com/embed/track/5e0b9LgOfi3aJSKXFcOWRe?utm_source=generator"
        <!-- ... other attributes ... -->
    ></iframe>
    ```

    **Change to (example):**
    ```html
    <iframe 
        src="YOUR_NEW_SPOTIFY_TRACK_EMBED_URL_HERE"
        <!-- ... other attributes ... -->
    ></iframe>
    ```

9.  Save the `index.html` file. Refresh your browser to see the new song playing.

### 2. Changing the Animated Video Background

To change the animated video playing in the background:

1.  Choose your desired background video. Ensure it's in **MP4 format** for broad compatibility.
2.  Place your MP4 video file into the `assets` folder within your project directory.
3.  Rename your video file to `background.mp4`. 
    *   **Important**: If you want to use a different filename (e.g., `my_new_background.mp4`), you'll need to update the `index.html` file accordingly. 
4.  Open your project's `index.html` file in a text editor.
5.  Locate the `<div class="video-background">` section (around line 15).
6.  Inside this `div`, find the `<source>` tag and ensure its `src` attribute points to your video file.

    **Original:**
    ```html
    <video autoplay muted loop id="myVideo">
        <source src="assets/background.mp4" type="video/mp4">
    </video>
    ```

    **If you renamed your file (example for `my_new_background.mp4`):**
    ```html
    <video autoplay muted loop id="myVideo">
        <source src="assets/my_new_background.mp4" type="video/mp4">
    </video>
    ```

7.  Save the `index.html` file. Refresh your browser to see the new video background.

## Running the Project

1.  Clone or download the project files to your local machine.
2.  Open the `index.html` file in your web browser (e.g., Chrome, Firefox, Edge).

Enjoy your Anime Quote Generator! 