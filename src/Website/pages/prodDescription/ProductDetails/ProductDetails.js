import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, Table, TableBody, TableCell, TableRow, Grid, Rating, Divider, Avatar } from "@mui/material";
import { styled } from '@mui/material/styles';

const TableCells = styled(TableCell)(({ theme }) => ({
    padding: '8px',
    fontSize: "12px",
    verticalAlign: 'top'
}));

const Typographys = styled(Typography)(({ theme }) => ({
    fontSize: "14px !important",
    "@media (max-width: 786px)": {
        fontSize: "13px !important",
    }
}));


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typographys>{children}</Typographys>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
}

const ProductDetails = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%", typography: "body1", }}>

            <Typography mt={3}
                sx={{
                    fontSize: '24px',
                    color: '#3C4242',
                    fontWeight: 500,
                    lineHeight: '38px',
                    marginBottom: '12px',
                }}
            >
                Product Details
            </Typography>

            <Box sx={{
                border: 'none',
            }}>
                <Tabs value={value} onChange={handleChange} aria-label="product details tabs"
                    sx={{
                        "& .MuiTabs-flexContainer": {
                            justifyContent: 'space-between'
                        },
                        "& .MuiTabs-indicator": {
                            backgroundColor: '#DA5516 !important',
                            paddingRight: '20px'
                        },
                        "& .Mui-selected": {
                            color: '#DA5516 !important',
                            borderBottom: "2px solid #DA5516",

                        },
                        "& .MuiTab-root": {
                            padding: '12px 0px',
                            marginRight: '12px',
                            fontSize: '16px',
                            color: '#3C4242',
                        }
                    }} >
                    <Tab label="Description" {...a11yProps(0)}
                        sx={{
                            "&.Mui-selected": {
                                color: '#DA5516', // Example: Change text color
                                borderBottom: "2px solid #DA5516", // Add a bottom border
                            },
                            "&.MuiTabs-indicator": {
                                backgroundColor: '#DA5516'
                            }
                        }} />
                    <Tab label="Price Split" {...a11yProps(1)} />
                    <Tab label="Reviews" {...a11yProps(2)} />
                </Tabs>
            </Box>

            {/* Tab Panels */}
            <Box sx={{
                "& .MuiBox-root": {
                    padding: '0px',
                },
            }}>
                <TabPanel value={value} index={0} sx={{
                    "& .MuiBox-root": {
                        padding: '0px',
                    },
                }}>
                    {/* Description Content */}
                    <Typographys sx={{ fontSize: "14px", color: "#807D7E", lineHeight: "24px", marginTop: '24px' }}>
                        Crafted in 22kt gold with natural polki diamonds and gemstones. Certified jewellery with lifetime buyback/exchange * (T&C) Crafted in 22kt gold with natural polki diamonds and gemstones. Certified jewellery with lifetime buyback/exchange * (T&C)
                    </Typographys>
                    {/* Product Details Table */}
                    <Table sx={{ mt: 2, background: '#F6F6F6', borderRadius: '12px', verticalAlign: 'top' }} aria-label="product details">
                        <TableBody>
                            <TableRow>
                                <TableCells>
                                    <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> Metal  </Typographys>
                                    <Typographys sx={{ fontSize: "14px", color: "#3C4242" }}> 24K Gold</Typographys>
                                </TableCells>
                                <TableCells>
                                    <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> Gemstones  </Typographys>
                                    <Typographys sx={{ fontSize: "14px", color: "#3C4242" }}> Russian Emerald</Typographys>
                                </TableCells>
                                <TableCells>
                                    <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> Diamond  </Typographys>
                                    <Typographys sx={{ fontSize: "14px", color: "#3C4242" }}> NA</Typographys>
                                </TableCells>
                            </TableRow>
                            <TableRow>
                                <TableCells sx={{ verticalAlign: 'top', borderBottom: "none" }}>
                                    <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> Gross weight  </Typographys>
                                    <Typographys sx={{ fontSize: "14px", color: "#3C4242" }}> 60 g</Typographys>
                                </TableCells>
                                <TableCells sx={{ verticalAlign: 'top', borderBottom: "none" }}>
                                    <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> Width  </Typographys>
                                    <Typographys sx={{ fontSize: "14px", color: "#3C4242" }}> NA</Typographys>
                                </TableCells>
                                <TableCells sx={{ verticalAlign: 'top', borderBottom: "none" }}>
                                    <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> Height  </Typographys>
                                    <Typographys sx={{ fontSize: "14px", color: "#3C4242" }}> 50cm</Typographys>
                                </TableCells>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TabPanel>

                <TabPanel value={value} index={1}>
                    {/* Price Split Content */}
                    <Typographys variant="body1">

                        <Table sx={{
                            mt: 2, background: '#F6F6F6', borderRadius: '12px', verticalAlign: 'top', boxShadow: '2px 2px 4px 0px #0000000D'
                        }} aria-label="product details">
                            <TableBody sx={{ padding: '12px', /* display: "inline-block" */ }}>
                                <TableRow>
                                    <TableCells sx={{ verticalAlign: 'top', }}>
                                        <Typographys sx={{ fontSize: "16px", color: "#3C4242" }}> Product </Typographys>
                                    </TableCells>
                                    <TableCells>
                                        <Typographys sx={{ fontSize: "16px", color: "#3C4242" }}> Rate</Typographys>
                                    </TableCells>
                                    <TableCells>
                                        <Typographys sx={{ fontSize: "16px", color: "#3C4242" }}> Weight</Typographys>
                                    </TableCells>
                                    <TableCells>
                                        <Typographys sx={{ fontSize: "16px", color: "#3C4242" }}> Discount</Typographys>
                                    </TableCells>
                                    <TableCells>
                                        <Typographys sx={{ fontSize: "16px", color: "#3C4242" }}> Value</Typographys>
                                    </TableCells>
                                </TableRow>
                                <TableRow>
                                    <TableCells>
                                        <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> 22 k Gold  </Typographys>
                                    </TableCells>
                                    <TableCells>
                                        <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> ₹ 7310/g  </Typographys>
                                    </TableCells>
                                    <TableCells>
                                        <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> 120g  </Typographys>
                                    </TableCells>
                                    <TableCells>
                                        <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> -  </Typographys>
                                    </TableCells>
                                    <TableCells>
                                        <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> ₹7,00,000   </Typographys>
                                    </TableCells>
                                </TableRow>
                                <TableRow>
                                    <TableCells>
                                        <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> Making   </Typographys>
                                    </TableCells>
                                    <TableCells>
                                        <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> 19%  </Typographys>
                                    </TableCells>
                                    <TableCells>
                                        <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> -  </Typographys>
                                    </TableCells>
                                    <TableCells>
                                        <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> -  </Typographys>
                                    </TableCells>
                                    <TableCells>
                                        <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> ₹1,73,000 </Typographys>
                                    </TableCells>
                                </TableRow>
                                <TableRow>
                                    <TableCells>
                                        <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> Uncut pearls </Typographys>
                                    </TableCells>
                                    <TableCells>
                                        <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> ₹92,500  </Typographys>
                                    </TableCells>
                                    <TableCells>
                                        <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> -  </Typographys>
                                    </TableCells>
                                    <TableCells>
                                        <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> -  </Typographys>
                                    </TableCells>
                                    <TableCells>
                                        <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> ₹92,500  </Typographys>
                                    </TableCells>
                                </TableRow>
                                <TableRow>
                                    <TableCells>
                                        <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> GST </Typographys>
                                    </TableCells>
                                    <TableCells>
                                        <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> 3%  </Typographys>
                                    </TableCells>
                                    <TableCells>
                                        <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}>  - </Typographys>
                                    </TableCells>
                                    <TableCells>
                                        <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> -  </Typographys>
                                    </TableCells>
                                    <TableCells>
                                        <Typographys mb={1} sx={{ fontSize: "14px", color: "#807D7E" }}> ₹30,000  </Typographys>
                                    </TableCells>
                                </TableRow>
                                <TableRow>
                                    <TableCells colSpan={5}>
                                        <Box
                                            display="flex"
                                            justifyContent="space-between"
                                        >
                                            <Typographys sx={{ fontSize: "20px", color: "#3C4242" }}>
                                                Total
                                            </Typographys>
                                            <Typographys sx={{ fontSize: "20px", color: "#3C4242" }}>
                                                ₹10,73,313
                                            </Typographys>
                                        </Box>
                                    </TableCells>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Typographys>
                </TabPanel>

                <TabPanel value={value} index={2}   >
                    {/* Reviews Content */}
                    <Box mt={2} sx={{ maxWidth: 500, mx: "auto", p: '20px !important', background: "#F6F6F6", borderRadius: 2 }}>
                        {/* Overall Rating Section */}
                        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                            <Box>
                                {[5, 4, 3, 2, 1].map((star) => (
                                    <Box key={star} display="flex" alignItems="center" mb={0.5}>
                                        <Typographys variant="body2" sx={{ width: 16 }}>
                                            {star}
                                        </Typographys>
                                        <Rating value={star} readOnly size="small" />
                                        <Box
                                            sx={{
                                                height: 6,
                                                background: "#FFA726",
                                                borderRadius: 1,
                                                flex: 1,
                                                ml: 1,
                                                maxWidth: `${star * 20}%`, // Adjust width dynamically
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Box>
                            <Box textAlign="right">
                                <Typographys variant="h3" sx={{ fontWeight: "bold" }}>
                                    4.0
                                </Typographys>
                                <Rating value={4} readOnly /> <br />
                                <Typographys variant="caption" color="textSecondary">
                                    52 Reviews
                                </Typographys>
                            </Box>
                        </Box>

                        <Divider sx={{ mb: 2 }} />

                        {/* Reviews Section */}
                        <Box>
                            {[1, 2].map((review, index) => (
                                <Box key={index} mb={2}>
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <Avatar
                                                src={`https://randomuser.me/api/portraits/women/${10 + index}.jpg`}
                                                alt="User"
                                                sx={{ width: 48, height: 48 }}
                                            />
                                        </Grid>
                                        <Grid item xs>
                                            <Typographys variant="body1" fontWeight="bold">
                                                {index === 0 ? "Courtney Henry" : "Cameron Williamson"}
                                            </Typographys>
                                            <Box display="flex" alignItems="center" mb={1}>
                                                <Rating value={4} readOnly size="small" />
                                                <Typographys variant="caption" sx={{ ml: 1 }}>
                                                    2 mins ago
                                                </Typographys>
                                            </Box>
                                            <Typographys variant="body2" color="textSecondary">
                                                Consequat velit qui adipisicing sunt do reprehenderit ad laborum tempor ullamco
                                                exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua.
                                            </Typographys>
                                        </Grid>
                                    </Grid>
                                    {index < 1 && <Divider sx={{ mt: 2 }} />}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </TabPanel>
            </Box>
        </Box>
    );
};

export default ProductDetails;
