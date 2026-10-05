# Backend Microservices

Five REST API microservices built with Node.js and Express as part of the freeCodeCamp Back End Development and APIs certification.

| Service            | What it does                                          |
| ------------------ | ----------------------------------------------------- |
| `timestamp`        | Converts dates to Unix and UTC timestamps             |
| `header-parser`    | Returns the client's IP address, language and browser |
| `url-shortener`    | Creates short URLs and redirects to the originals     |
| `exercise-tracker` | Logs users' exercises with date filtering             |
| `file-upload`      | Accepts a file upload and returns its metadata        |

**Stack:** Node.js, Express.js, MongoDB, Multer

## Run a service

    cd <service-folder>
    npm install
    npm start
