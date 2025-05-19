# Sale By You – INST377 Final Project

Sale By You is a web application designed to help users sell their homes by advertising them across multiple social media platforms. Users can submit basic home details and the site generates a listing in a table that can be posted to Pinterest, Twitter (X), and Bluesky simultaneously.

The target browser is the Chrome web browser.

See the [Developer Manual](#developer-manual) for more information.

## Developer Manual

### Environment Setup

1. Navigate to the `server/` directory:
   `cd server`
2. Install required packages:
   `npm install`
3. Set up an account with the [Ayrshare API](https://www.ayrshare.com/)
4. Link your desired social media accounts (Twitter/X, Pinterest, Bluesky) on Ayrshare
5. Paste in your API key

### Running the Application Locally

1. Navigate to the `server/` directory and run
   `node index.js`
2. Use liveserver to locally run frontend

### Running On Server

- The application is deployed using vercel
  https://inst-377-final-care.vercel.app/

## API Endpoints

- `GET /supabase/`  
  Returns all house listings stored in the Supabase `houses` table.

- `POST /supabase/add`  
  Adds a new house listing to the `houses` table

  **Sample Post Body:**

  ```json
  {
    "type": "House",
    "bedrooms": 3,
    "bathrooms": 2,
    "address": "123 Main St",
    "img_src": "https://example.com/image.jpg"
  }
  ```

### Known Issues

1. Ayrshare only allows for 20 posts to be created for free per month which limits the ability to test and use the application significantly

### Goals/Concept For Future Development

1. Allow user to login and only show them houses that they listed, should not be able to post other houses in the database
2. Seperate an admin side to review listing before allowing them to be posted to social media
