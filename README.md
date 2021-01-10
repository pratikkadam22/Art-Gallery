# Art Gallery (Python, Django, React.js, PostgreSQL)

To design: an art gallery, with a basic model on the back end, routes for middleware (no need to go deep dive into rest infrastructure), and a single top level front-end component to show all attachments (images). 

- each piece of art is tied to an artist
- artist can own more than one piece of art
- each art piece will also have a buyer
- show front end with a list of art pieces and artist + buyer name
- assume art piece is just an image file

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
