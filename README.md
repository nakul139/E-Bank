
### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- **Login Route**

  - When invalid credentials are provided and the **Login** button is clicked, then the error message received from the response should be displayed
  - When valid credentials are provided and the **Login** button is clicked, then the page should be navigated to the Home Route
  - When an unauthenticated user tries to access the Home Route, then the page should be navigated to Login Route
  - When an authenticated user tries to access the Home Route, then the page should be navigated to the Home Route

- **Home Route**

  - When an _authenticated_ user tries to access the Login Route, then the page should be navigated to the Home Route
  - When the **Logout** button is clicked, then the page should be navigated to the Login Route

- **Not Found Route**
  - When a random path is provided in the URL, then the page should be navigated to the Not Found Route

</details>

<details>

<summary>API Requests & Responses</summary>
<br/>

**loginApiUrl**

#### API: `https://apis.ccbp.in/ebank/login`

#### Method: `POST`

#### Request:

```json
{
  "user_id": 142420,
  "pin": 231225
}
```

#### Description:

Returns a response based on the credentials provided

#### Sample Success Response:

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjE0MjQyMCIsInJvbGUiOiJQUklNRV9VU0VSIiwiaWF0IjoxNjM0MDk4NzYyfQ.ZUCC2J2zBjRhLVa1EI_4EnkZ-M-7hoVZoZFAu8GTmEQ"
}
```

#### Sample Failure Response:

```json
{
  "status_code": 401,
  "error_msg": "Invalid user ID"
}
```

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- Home Route should consist of `/` in the URL path
- Login Route should consist of `/ebank/login` in the URL path
- No need to use the `BrowserRouter` in `App.js` as we have already included in `index.js`

- User credentials

  ```text
   User ID: 142420
   PIN: 231225

  ```

> - All components you implement should go in the `src/components` directory
