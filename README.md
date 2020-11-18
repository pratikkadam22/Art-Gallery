# Art Gallery

To design: an art gallery, with a basic model on the back end, routes for middleware (no need to go deep dive into rest infrastructure), and a single top level front-end component to show all attachments (images). 

- each piece of art is tied to an artist
- artist can own more than one piece of art
- each art piece will also have a buyer
- show front end with a list of art pieces and artist + buyer name
- assume art piece is just an image file

# Instructions
- This project is shown as a template.  You can choose to use it or create your own framework.
- Feel free to use any tech stack that you are comfortable with.

## Things to note when using the template****

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
- PostgreSQL 12.3

## Getting Started

- Install Python 3.6.0 from [here](https://www.python.org/downloads/release/python-360/)
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
