import React, {useState, useEffect} from 'react';
import {Container, Row, Button, Col} from 'react-bootstrap';
import "./Projects.css";
import image from "./image.png";
import image2 from "./home.png";
import byppoPic from "./byppoPic.png";
import mixmasalaimage from "./mixmasalaImage.png";
import mixmasalaimage2 from "./mixmasalaimage2.png";
import gif1 from "./gif1.gif";
import gif2 from "./gif2.gif";
import portfolioApp from "./../Projects/portfoliowebapp.png";
import PCard from "./../Contact Me/PCard.js";
import Card from "./../../components/Card/Card.js";
import gatorRaider from "./gatorRaider.png";
import VRExp from "./VRExp.png";
import transferAuditor from "./TransferAuditor.png";
import Robocode from "./Robocode.png";
import puzzle from "./15Puzzle.png"
import Footer from "./../../components/Footer/Footer.js";
import emoteit from "./emoteIt.png";
const Projects = (props) => {
    return (
        <div className="bg-dark fullWebpage">
            <div class="row bg-info no-gutters">
                <div class="col-sm-12">
                    <div class="card-body">
                        <h5 class="text-center">My Projects</h5>
                    </div>
                </div>
            </div>
            <Container fluid>
            <Row fluid className="text-center">
                <PCard
                image={byppoPic}
                title="Byppo Technologies Webapp"
                desc="A web app for Byppo Technologies LLC in Gainesville, FL.
                BYPPO aspires to be the all-inclusive platform for discovering new local eats. They partner with the best local restaurants in town to provide our users with a seamless food ordering experience.
                I handled the development of this webapp using Angular 8."/>
                <Container fluid className="text-center mt-n4 mb-4">
                <Button onClick={event => window.open("https://app.byppo.com")}>View this website</Button>
                </Container>
                
            </Row>

            <Row fluid className="bg-danger text-center">
                <PCard
                image={image2}
                title="Attractions Salon"
                desc="A web app for the Attractions Salon in Gainesville, FL.
                It aims for users to be able to find the salon, make an account, see the services offered, make payments, and make appointments in an easy to use fashion.
                I handled the backend of the web app using firebase database and fire storage and also implemented the Admin Dashboard which allows the admin to make changes to the website like add/delete services, change images and handle appointments made by customers."/>
                <Container fluid className="text-center mt-n4 mb-4">
                <Button onClick={event => window.open("https://attractionssalon.herokuapp.com")}>View this website</Button>
                </Container>
                
            </Row>

            <Row fluid className="text-center">
                <PCard
                image={emoteit}
                title="Emote-it"
                desc="A social media web-app/guessing game which updates real-time and where people can communicate with each other only with emojis. 
                People can post whatever they want using emojis and other users will take turns guessing what the emoji means and try to answer it. Users get points for guessing the right answer and if someone else likes their answers. 
                The person who posts the emojis also gets extra points if people cannot answer his post correctly. We also plan to introduce a chat option where people can chat with mostly emojis and a few words"/>
                <Container fluid className="text-center mt-n4 mb-4">
                <Button onClick={event => window.open("http://www.emoteit.me/")}>View this website</Button>
                </Container>
                
            </Row>

            <Row fluid className="bg-info">
            <PCard
                image={portfolioApp}
                title="Portfolio webapp"
                desc="An application for computer science students to build their own website in a quick and easy way using a pre-loaded template. 
                The users can edit all of the information on the website and upload their own images to make sure that the website looks like their personal portfolio website. 
                The users also get an opportunity to choose between a single page or a multi-page portfolio website.
                Used reactjs for the frontend and firebase for the backend to authenticate users and to store all of their information which is then reflected on the website."/>
                 {/* <Button  onClick={event =>  window.location.href='/home'}>View this website</Button> */}
                 <Container fluid className="text-center mt-n4 mb-4">
                <Button onClick={event => window.open("https://portfolioappproject.herokuapp.com")}>View this website</Button>
                </Container>
            </Row>

            <Row fluid className="project5">
            <PCard
                image={transferAuditor}
                title="Transfer-Auditor"
                desc="Currently Collaborating with three friends in building a web app which would help transfer students track their current university courses and see how they can be transferred to other universities depending on their choice of majors. 
                The app also shows the courses required and accepted by the transfer university thus helping the students take only the right courses. 
                We are working with .Net MVC for the frontend and have used SQL as the database. The website is deployed using azure. This project is currently in progress."/>
                <Container fluid className="text-center mt-n4 mb-4">
                <Button onClick={event => window.open("https://mytransferauditor.azurewebsites.net/")}>View this website</Button>
                </Container>
            </Row>

            <Row fluid className="coloe">
                <PCard
                // image={mixmasalaimage}
                image={mixmasalaimage2}
                title="Miks masala Website"
                desc="A website for Miks masala, a family-owned food delivery service in Orlando, FL. 
                Used HTML, CSS, JS as the front-end for dynamically creating HTML elements and updating pages.
                Made use of PHP and firebase as the backend to keep track of customers and their orders. 
                Used PHP to send emails with customer orders to the owner and allowed him to either accept/deny the orders."/>
            </Row>

            <Row fluid className="bg-dark">
            <PCard
                image={Robocode}
                title="Robocode"
                desc="Led a group of 4 students, monitored and tracked their progress as part of one of my classes to implement an algorithm in Java which controlled the movement of a software robot team which competed against the other teams. 
                Created 4 virtual robots each with unique strategies and defense techniques. The robots could change their tactics depending on the opponent robot's position and attacking mechanism.
                We used external libraries, and also worked with already existing code to modify/add code to improve the performance of the robots."/>
            </Row>

            <Row fluid className="project6">
            <PCard
                image={VRExp}
                title="VR-Life On Land"
                desc="Created a VR experience in Unity using C# that emphasizes how deforestation, constructing buildings and other human actions affect the lives of animals living there, and also affect our future. 
                Used various assets from Unity asset store and wrote complicated scripts in C# in order to build this project.
                Made use of Agile methodology to complete the project. "/>
            </Row>

            <Row fluid className="bg-danger">
            <PCard
                image={puzzle}
                title="15 Puzzle Game"
                desc="Created an immersive 15 puzzle game in Unity using C#. The game starts with a shuffled bunch of number blocks and the aim is to rearrange them to align them according to a particular order 
                that can be selected from the menu. Try to solve it in the shortest amount of time. Various difficulty levels ensure that the game can be played by kids and adults alike.
                Used assets from Unity asset store and wrote complicated scripts and algorithms in C# in order to build this project.
                Made use of Agile methodology to complete the project."/>
                <Container fluid className="text-center mt-n4 mb-4">
                <Button onClick={event => window.open("https://sohamkale.github.io/15Puzzle/")}>View this web game</Button>
                </Container>
            </Row>
            
            
            </Container>
           
            {/* <Container fluid className="bg-danger fullWebpage">
                <Row>
                    <Container className="containerDivison">
                        <div className="boxCenter text-white">
                            <img src={image2} class="img-fluid"/>
                            <h4>Mix Masala</h4>
                            <p>A website for Miks masala, a family-owned food delivery service in Orlando, FL. 
                Used HTML, CSS, JS as the front-end for dynamically creating HTML elements and updating pages.
                Made use of PHP and firebase as the backend to keep track of customers and their orders. 
                Used PHP to send emails with customer orders to the owner and allowed him to either accept/deny the orders.                                
                            </p>
                        </div>
                    </Container>
                   
                </Row>
               
            </Container> */}
         <Container fluid className="bg-white text-center">
            <Footer/>
         </Container>
    

        </div>

    );
}
export default Projects;