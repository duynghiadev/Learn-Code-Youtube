import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/system";
import React from "react";
import { locations as travelPlaces } from "../mocks/tabs";

const TravelLocations = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "40px" }}>
      <Grid2
        container
        spacing={{ xs: 2, md: 3 }}
        // columns={{ xs: 1, sm: 2, lg: 3 }}
      >
        {travelPlaces.map((place) => (
          <Grid2 xs={12} sm={6} lg={4} xl={3} key={place.id}>
            <Card sx={{ width: "100%" }}>
              <CardMedia
                sx={{ width: "100%", height: "200px" }}
                image={place.locationImages[0].url}
                title={place.location}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {place.location}
                </Typography>
                <Typography variant="body2">{place.days}</Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default TravelLocations;
