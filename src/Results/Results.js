import './Results.css'
import React from "react";
import Card from '../Card/Card'

const places = [
  {
    name: "Improper City",
    address: "3201 Walnut Street",
    location: "Denver, Colorado",
    category: "Restaurants & Bars",
    zip_code: "80205",
    rating: "4",
    website: "https://www.impropercity.com/",
    description: "A spacious, artsy, large-scale taproom and coffee bar. Improper City features 36 taps, a full bar selection, specialty cocktails, and a menu that rotates seasonally. The huge patio is dog friendly, has a seasonal bar space, great wifi, community games, and hosts rotating food trucks. Not very shady on hot days.",
    src: "https://www.impropercity.com/wp-content/uploads/photo-gallery/venue-05.jpg?bwg=1677263338",
    alt: "outdoor patio with picnic tables, food trucks, people hanging out, and a couple of dogs"
  },
  {
    name: "Rayback Collective",
    address: "2775 Valmont Road",
    location: "Boulder, Colorado",
    category: "Restaurants & Bars",
    zip_code: "80304",
    rating: "5",
    website: "https://www.therayback.com/",
    description: "Brewery with large outdoor dog-friendly space, including lots of shaded options, and a large human-only indoors. Rotating food trucks and occasional events.",
    src: "https://images.squarespace-cdn.com/content/v1/620fd0a7ffeac17087b7efa7/032ce3d5-78f5-4f04-9e5f-7537b51aea84/Sean_ONeill_Rayback_3rdAnniversary-197.jpg?format=1500w",
    alt: "outdoor setting at night with food trucks and lots of people hanging out"
  },
  {
    name: "The Exchange",
    address: "200 N College Avenue",
    location: "Fort Collins, Colorado",
    category: "Attractions",
    zip_code: "80524",
    rating: "5",
    website: "https://www.theexchangefortcollins.com/",
    description: "Like a public backyard! The Exchange is a must-see destination in the heart of Old Town Fort Collins. The common consumption plaza is family-friendly and makes it easy for your group to sample a variety of food and drinks from the local businesses that surround it. With year-round events, specials, and entertainment, there's truly something for everyone. Check out the pet-friendly indoor mini-golf bar.",
    src: "https://www.theexchangefortcollins.com/wp-content/uploads/5x7-scaled.jpg",
    alt: "aerial view of an outdoor space with people"
  },
  {
    name: "Lory State Park",
    address: "708 Lodgepole Drive",
    location: "Bellvue, Colorado",
    category: "Outdoorsy",
    zip_code: "80512",
    rating: "4",
    website: "https://cpw.state.co.us/placestogo/parks/Lory",
    description: "Hit the trail at Lory State Park and enjoy mountain biking, hiking, picnicking, and horseback riding amid some fabulous foothills scenery just minutes from Fort Collins and adjacent to Horsetooth Reservoir. From rolling valleys to mountainous hillsides, Lory State Park's 26 miles of trails rarely exceed a 12 percent grade. Check map for pet-friendly trails.",
    src: "https://cpw.state.co.us/placestogo/parks/ParkPhotos/Lory01.jpg",
    alt: "a man and a woman hiking with a dog on a leash, with trees and a lake in the background"
  },
  {
    name: "Bishop Castle",
    address: "12705 CO-165",
    location: "Rye, Colorado",
    category: "Attractions",
    zip_code: "81069",
    rating: "3",
    website: "https://www.bishopcastle.org/",
    description: "Bishop Castle is a monumental statue in stone and iron, built over 60 years and counting by Jim Bishop. Three full stories of interior rooms complete with a Grand Ballroom, soaring towers and bridges with vistas of a hundred miles, and a Fire-Breathing Dragon make the Bishop Castle quite the unforgettable experience! Visitors are always welcome free of charge and are encouraged to explore the castle on their own as there are no guided tours. The Castle itself is always open. Please keep in mind the Castle is an open construction site - exercise the utmost caution while visiting.",
    src: "https://www.bishopcastle.org/wp-content/uploads/2016/12/Bishop-Castle-03-1024x1024.jpg",
    alt: "stone castle in the sunlight during a wedding"
  },
  {
    name: "Cherry Creek Dog Off-Leash Area",
    address: "S Entrance Road",
    location: "Aurora, Colorado",
    category: "Outdoorsy",
    zip_code: "80015",
    rating: "5",
    website: "https://cpw.state.co.us/placestogo/parks/CherryCreek/Pages/DogOff-LeashArea.aspx",
    description: "The Cherry Creek Dog Off-Leash Area (DOLA) is a 107 acre fenced area that has water access for canine enjoyment. Located within Cherry Creek State Park; park fees apply, plus extra $3.00 fee for DOLA access.",
    src: "https://cpw.state.co.us/placestogo/parks/CherryCreek/PublishingImages/Artax2.jpg",
    alt: "dog in the creek"
  },
  {
    name: "Beaver Ranch Disk Golf Course",
    address: "11369 S Foxton Road",
    location: "Conifer, Colorado",
    category: "Outdoorsy",
    zip_code: "80433",
    rating: "5",
    website: "https://beaverranchdgc.com/",
    description: "Renowned disc golf course in a mountain setting. Ranked the 11th best disc course on the planet! The course consists of 83 baskets split between two courses, plus an onsite, fully-stocked Pro Shop. Bring your dog for a fun-filled activity.",
    src: "https://cdn.shopify.com/s/files/1/0057/9564/3503/files/fullsizeoutput_23_1296x.jpeg?v=1613736563",
    alt: "disc golf tee in an outdoor, woodsy setting"
  },
  {
    name: "The Golden Mill",
    address: "1012 Ford Street",
    location: "Golden, Colorado",
    category: "Restaurants & Bars",
    zip_code: "80401",
    rating: "4",
    website: "https://thegoldenmill.com/",
    description: "An indoor/outdoor food hall located on the creek. Featuring the only self-pour tap wall in the area with tons of delicious beverage choices including beer, wine, ciders, sake, and house-made cocktails, plus a variety of food vendors. Dogs are welcome in the yard.",
    src: "https://thegoldenmill.com/media/k2/items/cache/e0a70f72bdae9885bfc32d7cd19a26a1_XL.jpg",
    alt: "outdoor patio with many picnic tables and umbrellas, in front of a building"
  },
  {
    name: "North Table Mountain Park",
    address: "4788 CO-93",
    location: "Golden, Colorado",
    category: "Outdoorsy",
    zip_code: "80403",
    rating: "3",
    website: "https://www.jeffco.us/1427/North-Table-Mountain-Park",
    description: "Free park where visitors enjoy panoramic views of the Front Range from the top of a mesa, 15-plus miles of trails and breath-taking rock climbing. Don't forget water - the park is very exposed to the sun. Plenty of parking at both trailheads.",
    src: "https://www.theoutdoorcorps.com/wp-content/uploads/2020/10/5-North-Table-Mountain-Park-Destination-Guide.jpg",
    alt: "dirt trail with sign for North Table Loop, leading through an open, grassy area and foothill mountains in the background"
  },
  {
    name: "Wild Flowers",
    address: "1201 Madison Street",
    location: "Denver, Colorado",
    category: "Businesses",
    zip_code: "80206",
    rating: "4",
    website: "http://www.wildflowershome.com/",
    description: "Locally-owned gift shop specializing in garden-themed accessories, plants, bath products, candles & other household products. Well-behaved dogs are allowed in the store.",
    src: "http://www.wildflowershome.com/wp-content/uploads/2018/01/10-Wild-Flowers-Denver-and-Stapelton-About-Wild-Flowers-Home-Garden-Gifts-1.jpg",
    alt: "gift shop with a variety of household items on display"
  }]


const Results = () => {
  return(places.map(place => {
    return (
      <div className='results-container'>
        <Card {...place} />
      </div>
    )
  }))

}

export default Results