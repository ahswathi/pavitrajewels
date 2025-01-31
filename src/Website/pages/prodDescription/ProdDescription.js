import React from 'react'
import { Box } from '@mui/material'
import SimilarProducts from '../../components/SimilarProducts/SimilarProducts'
import ProdDetail from './ProdDetail'
import RecentlyViewed from '../../components/RecentlyViewed/RecentlyViewed'

const ProdDescription = () => {
    return (
        <>

            <Box display="flex" alignItems="flex-start" justifyContent="center" gap={6} mx={18} my={10}
                sx={{
                    "@media (max-width: 786px)": {
                        margin: '40px 12px'
                    }
                }}>
                <ProdDetail />
            </Box>

            <SimilarProducts />
            <RecentlyViewed />

        </>
    )
}

export default ProdDescription