import React from 'react'
import { Grid, Card, CardMedia, CardContent, Typography, Chip, Box } from '@mui/material';
import Sorting from '../../components/prodcomps/sorting/Sorting';
import Filter from '../../components/prodcomps/filterbar/Filter';
import SimilarProducts from '../../components/SimilarProducts/SimilarProducts';


const products = [
  {
    id: 1,
    name: 'Long Necklace',
    price: '₹26,000',
    originalPrice: '₹30,000',
    image: '/assets/prod1.png', // Replace with the actual path
    tag: 'New',
    order: 'Made to order',
  },
  {
    id: 2,
    name: 'Gold Earrings',
    price: '₹85,500',
    originalPrice: '₹95,000',
    image: '/assets/prod1.png', // Replace with the actual path
    tag: '10% OFF',
  },
  {
    id: 3,
    name: 'Necklace',
    price: '₹30,000',
    originalPrice: '₹40,000',
    image: '/assets/prod1.png', // Replace with the actual path
    tag: 'New',
  },
  {
    id: 4,
    name: 'Long Necklace',
    price: '₹26,000',
    originalPrice: '₹30,000',
    image: '/assets/prod1.png', // Replace with the actual path
    tag: 'New',
  },
  {
    id: 5,
    name: 'Gold Earrings',
    price: '₹85,500',
    originalPrice: '₹95,000',
    image: '/assets/prod1.png', // Replace with the actual path
    tag: '10% OFF',
  },
  {
    id: 6,
    name: 'Necklace',
    price: '₹30,000',
    originalPrice: '₹40,000',
    image: '/assets/prod1.png', // Replace with the actual path
    tag: 'New',
  },
  {
    id: 7,
    name: 'Long Necklace',
    price: '₹26,000',
    originalPrice: '₹30,000',
    image: '/assets/prod1.png', // Replace with the actual path
    tag: 'New',
  },
  {
    id: 8,
    name: 'Gold Earrings',
    price: '₹85,500',
    originalPrice: '₹95,000',
    image: '/assets/prod1.png', // Replace with the actual path
    tag: '10% OFF',
  },
  {
    id: 9,
    name: 'Necklace',
    price: '₹30,000',
    originalPrice: '₹40,000',
    image: '/assets/prod1.png', // Replace with the actual path
    tag: 'New',
  },
];

const Product = () => {
  return (
    <div>

      <Box sx={{ padding: '16px 8%', display: 'flex', justifyContent: 'space-between' }}>
        <Filter />
        <Sorting />
      </Box>

      <Box sx={{ padding: '16px 8%' }}>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id} >
              <Card sx={{ position: 'relative', borderRadius: '0px', }}>

                {/* Tag */}
                {product.tag && (
                  <Chip
                    label={product.tag}
                    sx={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      backgroundColor: product.tag === 'New' ? '#FEF5EB' : '#FEF5EB',
                      color: '#000',
                    }}
                  />
                )}
                {product.order && (
                  <Chip
                    label={product.order}
                    sx={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      backgroundColor: product.order === 'Made to order' ? '#fff' : '#fff',
                      color: '#000',
                      borderRadius: '0px',
                      height: '26px',
                      fontSize: '12px',
                    }}
                  />
                )}

                <Box sx={{ height: '320px', backgroundColor: '#000', padding: '70px', boxSizing: 'border-box' }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{ objectFit: 'contain', height: '100%', width: '100%' }}
                  />
                </Box>

                {/* Product Details */}
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {product.name}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: '8px' }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {product.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ textDecoration: 'line-through', color: 'gray' }}
                    >
                      {product.originalPrice}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      
    </div>
  )
}

export default Product