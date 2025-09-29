export const BACKEND_URL = 
    process.env.REACT_APP_TEST_MODE === "true"?
    "http://localhost:3126"
    :
    ""