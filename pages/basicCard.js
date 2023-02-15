import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({companyName, headline, location, website}) {
  return (
    <Card sx={{ minWidth: 275, maxWidth:275 }}>
      <CardContent>
        <Link href={website} rel="noopener" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {website}
        </Link>
        <Typography variant="h5" component="div">
          {companyName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {location}
        </Typography>
        <Typography variant="body2">
          {headline}
        </Typography>   
      </CardContent>
    </Card>
  );
}