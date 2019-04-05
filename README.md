Authentication Application
This app displays user registration, login authentication and admin access ability.

Getting Started Visit 
https://github.com/SpencerFaust/secure-submarine and clone the repository. Create a new folder and follow the Git instructions to set up your new repository.

Prerequisites Once you have a project folder linked to your repository go into your CLI and type 'npm install' which will install the following dependencies:

    "axios": "^0.17.1",
    "bcrypt": "^3.0.2",
    "body-parser": "^1.18.2",
    "cookie-session": "^2.0.0-beta.3",
    "express": "^4.16.3",
    "passport": "^0.4.0",
    "passport-local": "^1.0.0",
    "pg": "^7.4.1",
    "prop-types": "^15.6.1",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-redux": "^5.0.7",
    "react-router-dom": "^4.2.2",
    "react-scripts": "^2.0.3",
    "redux": "^3.7.2",
    "redux-logger": "^3.0.6",
    "redux-saga": "^0.16.0"

When deploying a server side database run the following SQL commands:
CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "clearance_level" INTEGER NOT NULL DEFAULT 0
);

INSERT INTO "person" ("username", "password", "clearance_level")
VALUES ('Admiral Greer', 'tuna', 18),
('Captain Borodin', 'shark', 10),
('Lieutenant Nguyen', 'fishy', 4),
('Lieutenant Ryan', 'tuna', 4);


CREATE TABLE "secret" (
    "id" SERIAL PRIMARY KEY,
    "content" VARCHAR (80) UNIQUE NOT NULL,
    "secrecy_level" INTEGER NOT NULL DEFAULT 0
);

INSERT INTO "secret" ("content", "secrecy_level")
VALUES ('Admirals Only: Captain Borodin is totally weird.', 13),
('Captains Or Above: Lieutenant Ryan is looking fly.', 6),
('Lieutenants Or Above: We are heading to the Bahamas.', 3);

Deployment When deploying on localhost:3000 type 'npm run client' and 'npm run server' in two seperate clients into the CLI.

Versioning 1.4.0

Author 
Spencer Faust

License 
This project is licensed under the MIT License

Acknowledgments 
A special thanks to Prime Digital Academy and my instructor Luke S.