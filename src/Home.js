import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from "./Card";

// EMEMANKA CHINEDU
// AIRBNB PROJECT





function Home() {
    return (
        <div className="home">

            {/*  <h1>Home Component</h1> */}
            <Banner />


            <div className="home__section">

                <Card
                src="https://images.unsplash.com/photo-1558308508-4e7a8fdff9c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                title="Online Experiences"
                description="Unique activites we can do together, led by a world of hosts." />
                <Card 
                src="https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep"/>
                <Card 
                src="https://images.unsplash.com/photo-1551524164-687a55dd1126?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2125&q=80"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family"/>

            </div>

            <div className="home__section">

                <Card 
                src="https://images.unsplash.com/photo-1509592149237-bc44977d96d0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2551&q=80"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="$130/night"
                />
                <Card 
                src="https://images.unsplash.com/photo-1561975023-4cf2c838810c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="$250/night"
                />
                <Card 
                src="https://images.unsplash.com/photo-1502745582385-1d28a39a7269?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="$70/night"/>
                
            </div>
            
        </div>
    )
}

export default Home
