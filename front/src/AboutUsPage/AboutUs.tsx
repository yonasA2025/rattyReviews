import { NavBar } from "./../NavBar/NavBar";
//import TeamBox from "./TeamComponents/TeamBox";

// import prop data (JSON) or directly stgore JSON
// map over list of data and make component called profile which contains a picture and description 
import React from "react";

//import TeamMembers from "./../AboutUsPage/TeamComponents/TeamMembers";

interface TeamMember {
  name: string;
  year: string;
  concentration: string;
  hometown: string;
  favratty: string;
  picture: string;
}

const team: TeamMember[] = [
  {
    name: "Connor Flick",
    year: "2025",
    concentration: "Computer Science",
    hometown: "New York, NY",
    favratty: "Chicken Parmesan",
    picture: "john-doe.jpg",
  },
  {
    name: "Akshay Mehta",
    year: "2026",
    concentration: "Computer Science",
    hometown: "Los Angeles, CA",
    favratty: "Avocado Toast",
    picture: "jane-smith.jpg",
  },
  {
    name: "Yonas Amha",
    year: "2026",
    concentration: "Business",
    hometown: "Chicago, IL",
    favratty: "Deep Dish Pizza",
    picture: "bob-johnson.jpg",
  },
  {
    name: "Shouri Akarapu",
    year: "2024",
    concentration: "Apma-CS, Econ",
    hometown: "Norwalk, CT",
    favratty: "Buffalo Mac N Cheese",
    picture: "sarah-lee.jpg",
  },
];

function AboutUs() {
  return (
    <div id="About-Us">
      <NavBar />
      <h1>Meet Our Team</h1>
      {team.map((member) => (
        <div key={member.name}>
          <img src={member.picture} alt={member.name} />
          <h2>{member.name}</h2>
          <p>Year: {member.year}</p>
          <p>Concentration: {member.concentration}</p>
          <p>Hometown: {member.hometown}</p>
          <p>Favorite Ratty Meal: {member.favratty}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutUs;
