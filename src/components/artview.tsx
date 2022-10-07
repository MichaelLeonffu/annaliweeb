// import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import ArtCard from "./artcard.tsx";

export default function ArtView() {
  const [artworks, setArtworks] = useState([]);

  // Get slug from above
  let { tag } = useParams();
  
  // This method fetches the records from the database.
  useEffect(() => {
      async function getArtworks() {
          const response = await fetch(`/api/artwork/`);
          // const response = await fetch(`http://localhost:5005/api/artwork/`);
  
          if (!response.ok) {
              const message = `An error occurred: ${response.statusText}`;
              window.alert(message);
              return;
          }
  
          const artworks = await response.json();
          setArtworks(artworks);
      }
  
      getArtworks();
  
      return;
  }, [artworks.length]);
  
//   // This method will delete a record
//   async function deleteRecord(id) {
//       await fetch(`http://localhost:5005/${id}`, {
//           method: "DELETE"
//       });
  
//       const newRecords = records.filter((el) => el._id !== id);
//       setRecords(newRecords);
//   }

  function showTag(){
    if (tag){
      return (
        <Paper
          elevation={24}
          sx={{
            backgroundColor: 'primary.light',
            borderRadius: '8px',
          }}
        >
          <Typography
            align="center"
            variant="h2"
            m={2}
          >
            #{tag}
          </Typography>
        </Paper>
      )
    }
  }
  
  // This following section will display the table with the records of individuals.
  return (
    <div>

      <Box>
        {showTag()}
        {/* <ImageList variant="masonry" cols={1} gap={2}> */}
          {artworks.map((artwork) => (
              <Container sx={{my: "1rem", width: "620px"}} key={artwork._id}>
                <ArtCard
                      artwork={artwork}
                  />
              </Container>
            
          ))}
        {/* </ImageList> */}
      </Box>
    </div>
  );
}
