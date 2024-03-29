import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard(values) {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 3 }}>
      <CardMedia
        sx={{ height: 90, width: 120, marginLeft: 3 }}
        image={values.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {values.name}
        </Typography>
      </CardContent>
    </Card>
  );
}