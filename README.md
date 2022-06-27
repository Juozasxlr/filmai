1. First clone current repository, by running this command in terminal:
git clone https://github.com/Juozasxlr/filmai.git

2. Open terminal in the current folder and run:
npm install
(It will install all needed packages for the project)

3. We use json web server instead of database and we need to write this code to run it:
npx json-server --watch data/db.json --port 8000

4. Our local json server will run on this host:
http://localhost:8000/filmai

5. Open second terminal while json server is working and run this command:
npm start

6. This command will start web page at:
http://localhost:3000/
