# BuiTruongThanhVu_20-Nodejs
	Using nodejs expressjs to build movie-api service with Myql database
	
# Install
	Install package
		BuiTruongThanhVu_20-Nodejs/movieapi>npm install
		BuiTruongThanhVu_20-Nodejs/movieapi>npm install --global yarn
		BuiTruongThanhVu_20-Nodejs/movieapi>npm install mysql
		
	Database Mysql
		Create a Database name moviedb
		Create new query tab
		Open file script in path BuiTruongThanhVu_20-Nodejs/moviedb.sql
		Copy all scripts, paste in to query tab and excute it
		
	Update config to connect to database
		Go to file BuiTruongThanhVu_20-Nodejs/movieapi/src/config/config.json
		Change "username" and "password" as your database
		
	Install Postman
		Go to file script in path BuiTruongThanhVu_20-Nodejs/Movie.postman_collection.json
		Import Movie.postman_collection.json to Postman
		
# Run
	BuiTruongThanhVu_20-Nodejs/movieapi>yarn start        to start application
	
