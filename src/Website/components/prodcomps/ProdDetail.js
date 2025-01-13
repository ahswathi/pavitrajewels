import { Box, Button, CardMedia, Chip, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'
import { StarIcon, Wishlist } from '../../../Svg'


const prodimage = [
    {
        id: 1,
        image: '/assets/prodimg1.png',
    },
    {
        id: 2,
        image: '/assets/prodimg1.png',
    },
    {
        id: 3,
        image: '/assets/prodimg1.png',
    },
    {
        id: 4,
        image: '/assets/prodimg1.png',
    },
    {
        id: 5,
        image: '/assets/prodimg1.png',
    },
    {
        id: 6,
        image: '/assets/prodimg1.png',
    }
]


const ProdDetail = () => {
  return (
    <>
        <Box display="flex" alignItems="flex-start" justifyContent="center" gap={6} >
                <Box sx={{
                    flex: '0 0 54%',
                    boxSizing: 'border-box',
                }}
                >
                    {/* Image grid */}
                    <Grid container spacing={2}>
                        {prodimage.map((prod) => (
                            <Grid item xs={6} sm={6} md={6} >
                                <CardMedia
                                    component="img"
                                    image={prod.image}
                                    sx={{ objectFit: 'contain', height: '100%', width: '100%' }}
                                />
                            </Grid>
                        ))}
                    </Grid>

                    {/* Video */}
                    <Box sx={{
                        position: 'relative',
                        width: '100%',
                        height: '340px',
                        overflow: 'hidden',
                        backgroundColor: '#000',
                        marginTop: '16px',
                    }}
                    >
                        <Box
                            component="video"
                            src="/assets/video.webm"
                            autoPlay
                            loop
                            muted
                            playsInline
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </Box>
                </Box>


                <Box sx={{ flex: '0 0 46%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Chip
                            label="Made to order"
                            sx={{
                                backgroundColor: '#fff',
                                color: '#000',
                                borderRadius: '0px',
                                height: '26px',
                                fontSize: '12px',
                                border: '1px solid #00000033',
                                background: '#fff'
                            }}
                        />
                        <Wishlist />
                    </Box>

                    <Typography mt={2}
                        sx={{
                            fontSize: '36px',
                            color: '#000',
                            fontWeight: 500,
                            lineHeight: '38px',

                        }}
                    >
                        Ribbon Twist Gold Neklace
                        <Typography mt={1}
                            sx={{
                                fontSize: '16px',
                                color: '#000',
                                fontWeight: 500,
                                lineHeight: '',

                            }}>
                            ProductID
                        </Typography>
                    </Typography>


                    <Typography mt={2} sx={{ fontSize: '24px', color: '#000', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '10px' }}>
                        ₹27,200
                        <Typography
                            sx={{ fontSize: '20px', color: '#00000099', fontWeight: 500, textDecoration: 'line-through', }}>
                            ₹35,000
                        </Typography>
                    </Typography>


                    <Box mt={1} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, gap: '6px' }}>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                <StarIcon />
                            </Box>
                        ))}
                        <Typography sx={{ fontSize: '16px', color: '#00000099', fontWeight: 500, }}>
                            3.5
                        </Typography>
                    </Box>

                    <RadioGroup>
                        <FormControlLabel
                            value="full"
                            control={<Radio sx={{ padding: '6px', "&.Mui-checked": { color: "#ff5722", }, }} />}
                            label="Full Payment"
                        />
                        <FormControlLabel
                            value="advance"
                            control={<Radio sx={{ padding: '6px', "&.Mui-checked": { color: "#ff5722", }, }} />}
                            label={
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    Advance payment (50%){' '}
                                    <Typography sx={{
                                        backgroundColor: '#fff',
                                        color: '#000',
                                        borderRadius: '0px',
                                        fontSize: '12px',
                                        border: '1px solid #00000033',
                                        background: '#fff',
                                        textAlign: 'center',
                                        padding: '4px 6px'
                                    }}>
                                        ₹10,000
                                    </Typography>
                                </Box>
                            }
                        />
                    </RadioGroup>

                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            padding: 1.5,
                            fontWeight: 'bold',
                            textTransform: 'none',
                            borderRadius: 2,
                            width: '100%',
                            marginTop: '20px'
                        }}
                    >
                        Place Order
                    </Button>
                    <Typography
                        variant="body2"
                        sx={{
                            marginTop: 2,
                            fontStyle: 'italic',
                            color: 'gray',
                            fontSize: '12px',
                        }}
                    >
                        Note: Advance payment required. Balance due to be paid before Shipping.
                    </Typography>
                </Box>


            </Box>
    </>
  )
}

export default ProdDetail