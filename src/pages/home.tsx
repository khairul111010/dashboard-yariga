import { Box, Stack, Typography } from '@pankod/refine-mui'
import { PieChart, TotalRevenue, PropertyReferrals } from "components";
import React from 'react'

const home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart title="Properties for Sale"
        value={684}
        series={[75, 25]}
        colors={['#275be8','#c4e8ef']}
        />
        <PieChart title="Properties for Rent"
        value={550}
        series={[60, 40]}
        colors={['#275be8','#c4e8ef']}
        />
        <PieChart title="Total Customers"
        value={5684}
        series={[75, 25]}
        colors={['#275be8','#c4e8ef']}
        />
        <PieChart title="Total Cities"
        value={555}
        series={[75, 25]}
        colors={['#275be8','#c4e8ef']}
        />
      </Box>


      <Stack mt="25px" gap={4} width="100%" direction={{xs: 'column', lg: 'row'}}>
        <TotalRevenue/>
        <PropertyReferrals/>
      </Stack>

      
    </Box>
  )
}

export default home