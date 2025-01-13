import React from 'react'
import ProdDetail from '../../components/prodcomps/ProdDetail'
import { Box } from '@mui/material'

const ProdDescription = () => {
    return (
        <>
            
        <Box display="flex" alignItems="flex-start" justifyContent="center" gap={6} mx={18} my={10}>
            <ProdDetail/>
        </Box>
        </>
    )
}

export default ProdDescription