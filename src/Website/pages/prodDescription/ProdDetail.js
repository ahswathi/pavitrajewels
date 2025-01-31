import { Box, Button, CardMedia, Chip, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'
import { StarIcon, Wishlist } from '../../../Svg'
import ProductDetails from './ProductDetails/ProductDetails'


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
            <Box display="flex" alignItems="flex-start" justifyContent="center" gap={6}
                sx={{
                    "@media (max-width: 786px)": {
                        flexDirection: "column",
                        /*  margin: '-40px -20px', */
                        gap: '30px',
                    },
                    "@media (min-width: 786px) and (max-width: 1024px)": {
                        margin: '-40px -70px',
                    },
                }}
            >
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
                        "@media (max-width: 786px)": {
                            height: '200px',
                        }
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

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: "30px"
                    }}>
                        <Typography sx={{
                            color: '#000',
                            fontSize: '20px',
                            textAlign: 'center',
                            marginRight: '10px'
                        }}>
                            Quantity
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #9F9F9F',
                            borderRadius: '4px',
                            padding: '4px 6px',
                            gap: '12px',
                            color: '#1A1A1A',
                        }} >
                            <button style={{
                                border: 'none',
                                backgroundColor: 'transparent',
                                color: '#9F9F9F',
                                padding: '8px',
                                borderRadius: '4px',
                                backgroundColor: ' #F2F2F2',
                                width: '26px',
                                height: '26px',
                                textAlign: 'center',
                                alignItems: 'center',
                                display: 'flex',
                                color: '#1A1A1A',
                            }}

                            >
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.626927 0.888673L4.78026 5.04201L8.93359 0.888672" stroke="#080913" stroke-width="1.16667" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </button>
                            <span >1</span>
                            <button style={{
                                border: 'none',
                                backgroundColor: 'transparent',
                                color: '#9F9F9F',
                                padding: '8px',
                                borderRadius: '4px',
                                backgroundColor: ' #F2F2F2',
                                width: '26px',
                                height: '26px',
                                textAlign: 'center',
                                alignItems: 'center',
                                display: 'flex',
                                color: '#1A1A1A',
                            }}
                            >
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.626927 5.11133L4.78026 0.957995L8.93359 5.11133" stroke="#080913" stroke-width="1.16667" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </button>
                        </Box>
                    </Box >

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
                    <Box display="flex" alignItems="flex-start" justifyContent="center" gap={6} mt={2}>
                        <ProductDetails />
                    </Box>
                </Box >


            </Box >
        </>
    )
}

export default ProdDetail