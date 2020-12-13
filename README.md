# Instructions for Running the Project:-
Before running the project, make sure you set up these things:-

- Python 3.6
- venv
- Node v14.4.0
- PostgreSQL 12.3

Once you're all set up, follow the instructions:-

- Setup postgres (DATABASES configuration like NAME, USER, PASSWORD in the `settings.py` file)
- Start the postgres server
- Activate `venv`
- In the main folder where requirements.txt exists, run `pip install -r requirements.txt`
    For users other than Windows(Mac or Linux), the above command may give an error on installing psycopg2
    To fix it, follow these steps:- 
        1) Remove `psycopg2==2.8.5` from `requirements.txt`,   
        2) Run `pip install psycopg2-binary`,   
        3) Then run, `pip install -r requirements.txt` to install rest of the packages
- In the frontend folder where package.json exists, run `npm install` followed by `npm run build`
- Go to the folder where `manage.py` is located
- Run `python manage.py makemigrations artwork` to create the migrations (generate SQL commands)
- Run `python manage.py migrate` to run the migrations (execute the SQL commands and apply changes)
- Finally to start the app, run `python manage.py runserver 0:5000` to run the backend Django server
- Go to `http://localhost:5000/` to visit the Art Gallery
- To add an Artwork to the gallery, use the section at the bottom of the page.
- To delete an Artwork from the gallery, just press the Delete button on the Artwork.

#### Documentation for the Django backend is included with the code and can also be viewed at `http://localhost:5000/admin/doc/`
#### Documentation for the React frontend is included with the code and can also be viewed in `/art_gallery/frontend/docs/` directory (open `index.html`)

# Art Gallery

To design: an art gallery, with a basic model on the back end, routes for middleware (no need to go deep dive into rest infrastructure), and a single top level front-end component to show all attachments (images). 

- each piece of art is tied to an artist
- artist can own more than one piece of art
- each art piece will also have a buyer
- show front end with a list of art pieces and artist + buyer name
- assume art piece is just an image file

# Instructions
- This project is shown as a template using postgreSQL, Python, Django, & ReactJS.  You can choose to use it or create your own framework.
- Feel free to use any tech stack that you are comfortable with.

## Things to note when using the template

Make sure to migrate database and build the frontend before attempting to run.

The backend (/artwork) and the frontend are two different Django projects.

All commands should be run with `python3.6`.

There are three required environment variables: 

- USER - User for the database

- ARTGALLERY_DB_PASS - The password to the postgresql user for the database

- SECRET_KEY - Django secret key (Convert it to a environment variable)- view the quick start guide here: https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

This template requires the following core dependencies:

- Python 3.6
- Node v14.4.0
- PostgreSQL 12.3 (NOTE: you can use any database of your liking such as MongoDB, MySQL, etc. with the template, it is just currently setup for postgres)

## Getting Started

- Install Python 3.6.0 from [here](https://www.python.org/downloads/release/python-360/)
- Setup virtual env from [here](https://docs.python.org/3/library/venv.html)
- Download node from [here](https://nodejs.org/download/release/v14.4.0/)
- Make sure to download some sort of package manager, for the following steps we will be using pip
- In the main folder where `requirements.txt` exists, run `pip install -r requirements.txt`
- In the frontend folder where package.json exists, run `npm install` followed by `npm run build`
- To setup postgres, view the documentation [here](https://www.postgresql.org/docs/12/index.html) for your specific OS setup
- Make sure to migrate database and build the frontend before attempting to run.
To start the application in dev mode, run `python3.6 manage.py runserver 0:5000`, then point your browser to http://127.0.0.1:5000/
The API can be accessed at http://127.0.0.1:5000/api/{endpoint}

## Submitting

- **Make sure to include thorough documentation**
- Add your entire project to a **PRIVATE** GitHub Repo, and add our username (cl-met-challenge) as a collaborator
- Make sure to include any necessary information on running the project
- Make sure to include anything that you were not able to get to work or still needs more work
- Email us to let us know that you have completed the project with a link to the repo

Thank you for your interest in Cirrus Logic!
