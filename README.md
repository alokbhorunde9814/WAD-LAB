https://chatgpt.com/share/68142cab-0624-800b-aa16-e4a53bf98c3d
# WAD LAB Assignments

This repository contains all Web Application Development (WAD) lab assignments, organized by assignment number and part. Each folder contains the code and resources for a specific assignment. Below is a detailed description of each assignment and its contents.

## Folder Structure

- `1A and 1B/` - Assignments 1A and 1B (see PDF for details)
- `2A/` - Assignment 2A (see PDF for details)
- `2B/` - Assignment 2B (see PDF for details)
- `3A/` - Assignment 3A: Static File Server with Express.js
- `3B/` - Assignment 3B: User Signup/Login API with Express.js and MongoDB
- `4A/` - Assignment 4A: Simple Art Gallery Website (HTML/CSS/JS)
- `4B/` - Assignment 4B (see PDF for details)

---

## Assignment Details

### 1A and 1B
- See `ASSIGNMENT 1A&1B.pdf` for full details and requirements.

### 2A
- See `WAD 2-A ASSIGNMENT.pdf` for full details and requirements.

### 2B
- See `ASSIGNMENT 2B.pdf` for full details and requirements.

### 3A: Static File Server
- **Location:** `3A/`
- **Description:**
  - Implements a simple static file server using Express.js.
  - Serves files from the `public/` directory.
  - To run: `node server.js` and visit `http://localhost:3000`.

### 3B: User Signup/Login API
- **Location:** `3B/`
- **Description:**
  - REST API for user registration and login using Express.js and MongoDB.
  - Endpoints:
    - `POST /signup` - Register a new user
    - `POST /login` - Login with username and password
    - `GET /user/:username` - Get user details
  - See `user.js` and `db.js` for implementation.

### 4A: Simple Art Gallery Website
- **Location:** `4A/`
- **Description:**
  - A minimal, responsive art gallery website called **Alok Arts**.
  - Features a home page with a product gallery, login and registration forms.
  - Uses only HTML and CSS for simplicity.
  - Product images are included in the gallery (see image files in `4A/`).
  - Pages:
    - `index.html` - Home page with product gallery
    - `login.html` - Login form
    - `register.html` - Registration form
    - `login_register.html` - (Legacy) Combined login/register page
  - To view: Open `index.html` in your browser.

### 4B
- See PDF for details (folder is present but may be empty).

---

## How to Run

- For static HTML assignments (like 4A):
  - Open the main HTML file (e.g., `index.html`) in your browser.
- For Node.js assignments (3A, 3B):
  - Install dependencies: `npm install`
  - Run the server: `node server.js` or `node user.js`

---

## Notes
- All assignment PDFs are included for reference.
- Images for the art gallery are located in `4A/` and referenced in `index.html`.
- For any issues, please refer to the assignment PDFs or contact the repository owner. 
