import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ActorDetails from './pages/ActorDetails';

// --- DATA IS HERE (No External File) ---
const tamilActorsData = [
  {
    id: 1,
    name: "Rajinikanth",
    role: "Superstar",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Rajinikanth_at_2.0_press_meet.jpg",
    description: "Shivaji Rao Gaikwad, known professionally as Rajinikanth, is an Indian actor who works primarily in Tamil cinema. He is considered a cultural icon.",
    rating: "5.0",
    hits: "Baasha, Padayappa, Jailer"
  },
  {
    id: 2,
    name: "Vijay",
    role: "Thalapathy",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Vijay_at_the_Nadigar_Sangam_Protest.jpg",
    description: "Joseph Vijay Chandrasekhar is an Indian actor and playback singer who works in Tamil cinema. He is one of the highest paid actors in India.",
    rating: "4.9",
    hits: "Ghilli, Thuppakki, Leo"
  },
  {
    id: 3,
    name: "Ajith Kumar",
    role: "Thala / AK",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Ajith_Kumar_at_Mankatha_Audio_Launch.jpg",
    description: "Ajith Kumar is an Indian actor who works predominantly in Tamil cinema. He is also a motor car racer and participated in the MRF Racing series.",
    rating: "4.9",
    hits: "Mankatha, Vedalam, Thunivu"
  },
  {
    id: 4,
    name: "Dhanush",
    role: "Asuran",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Dhanush_at_The_Gray_Man_premiere.jpg",
    description: "Dhanush is an Indian actor, producer, director, lyricist and playback singer who predominantly works in Tamil cinema.",
    rating: "4.8",
    hits: "Asuran, VIP, Vada Chennai"
  },
  {
    id: 5,
    name: "Silambarasan TR",
    role: "Atman / STR",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Silambarasan_at_Vaanam_Audio_Launch.jpg",
    description: "Silambarasan Thesingu Rajendar, also known as Simbu, is an Indian actor, film director, and playback singer in Tamil cinema.",
    rating: "4.7",
    hits: "Vinnaithaandi Varuvaayaa, Maanaadu"
  },
  {
    id: 6,
    name: "Sivakarthikeyan",
    role: "Prince / SK",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Sivakarthikeyan_at_Remo_Success_Meet.jpg",
    description: "Sivakarthikeyan is an Indian actor, playback singer, film producer, and lyricist who works in Tamil cinema.",
    rating: "4.8",
    hits: "Doctor, Don, Maaveeran"
  },
  {
    id: 7,
    name: "Karthik",
    role: "Navarasa Nayagan",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Karthik_Muthuraman.jpg",
    description: "Karthik is an Indian actor, playback singer and politician who works mainly in Tamil cinema. He was a leading actor in the 80s and 90s.",
    rating: "4.6",
    hits: "Mouna Ragam, Agni Natchathiram"
  },
  {
    id: 8,
    name: "Nayanthara",
    role: "Lady Superstar",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Nayanthara.jpg",
    description: "Nayanthara is an Indian actress who primarily works in Tamil, Telugu, and Malayalam films. She is one of the highest paid actresses.",
    rating: "4.9",
    hits: "Aramm, Naanum Rowdy Dhaan, Jawan"
  },
  {
    id: 9,
    name: "Trisha",
    role: "Queen of South",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Trisha_Krishnan_at_PS1_teaser_launch.jpg",
    description: "Trisha Krishnan is an Indian actress who primarily works in Tamil and Telugu films. She rose to fame after winning Miss Chennai.",
    rating: "4.8",
    hits: "96, Ghilli, Ponniyin Selvan"
  },
  {
    id: 10,
    name: "Samantha",
    role: "Leading Actress",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Samantha_Ruth_Prabhu_at_Jaanu_promotions.jpg",
    description: "Samantha Ruth Prabhu is an Indian actress who works primarily in Telugu and Tamil films. She is a recipient of several awards.",
    rating: "4.8",
    hits: "Theri, Super Deluxe, Kaththi"
  },
  {
    id: 11,
    name: "Simran",
    role: "Evergreen",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Simran_Bagga.jpg",
    description: "Simran is an Indian actress who has predominantly appeared in Tamil, Telugu and Hindi films. She was the top heroine in the early 2000s.",
    rating: "4.7",
    hits: "Vaali, Priyamanavale"
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  // Store the data in state, or just pass the constant variable directly
  const actors = tamilActorsData;

  return (
    <Router>
      {/* Pass search state to Navbar */}
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <Routes>
        {/* Pass the Data and Search Term to Home */}
        <Route path="/" element={<Home actors={actors} searchTerm={searchTerm} />} />
        
        {/* Pass the Data to Details so it can find the right ID */}
        <Route path="/actor/:id" element={<ActorDetails actors={actors} />} />
      </Routes>
    </Router>
  );
}

export default App;