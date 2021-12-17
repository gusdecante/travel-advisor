import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

export default function PlaceDetails({ place }) {
  return (
    <Card elevation={8}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      ></CardMedia>
      <CardContent></CardContent>
    </Card>
  );
}
