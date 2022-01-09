import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { LocationOn, Phone } from "@material-ui/icons";

interface PlaceDetailsProps {
  place: {
    photo: {
      images: {
        large: {
          url: string;
        };
      };
    };
    name: string;
    num_reviews: string;
    rating: string;
    phone: string;
    address: string;
  };
  placeRef: any;
  selected: any;
}

export default function PlaceDetails({
  place,
  placeRef,
  selected,
}: PlaceDetailsProps) {
  if (selected) {
    placeRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
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
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} />
          <Typography>
            {place.num_reviews} review{parseInt(place.num_reviews) > 1 && "s"}
          </Typography>
        </Box>
        {place.address && (
          <Typography
            gutterBottom
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <LocationOn />
            {place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Phone />
            {place.phone}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
