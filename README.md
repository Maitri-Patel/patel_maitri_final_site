# React Portfolio Dockerization

This repository contains a Dockerized version of a React portfolio web application.

## Instructions

To get the web application running at `localhost:5575`, follow these steps:

### 1. Clone the Repository

Clone this repository to your local machine using the following command:

bash
git clone <repository_ur>

### 2 run this commnad in terminal 
docker build -t portfolio-app .

### 3 start docker
docker run -d -p 5575:80 --name portfolio-container portfolio-app

Open a web browser and navigate to http://localhost:5575 to view the React portfolio web application.