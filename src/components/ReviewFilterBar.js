import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import FilterSelect from './FilterSelect'


export default function ReviewFilterBar() {
    return (
        <Box mb={3}>
                <Grid container m={1} columnSpacing={0.5}>
                    <Grid item xs={1}>
                        <Typography ml={1} mr={0} mt={1.5} variant='h4'>Filter:</Typography>
                    </Grid>
                    <Grid item xs={11}>
                        <FilterSelect></FilterSelect>
                    </Grid>
                </Grid>
        </Box>
    );
}