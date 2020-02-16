import React, { useCallback, Fragment as F } from 'react';
import { Container, Grid } from '@material-ui/core';

const Breadcrumb = props => {
    const { categories } = props;
    const renderCategories = useCallback(categories => {
        return categories.map((categorie, idx)=>{
            let toRender = idx === 0 ? 
                (<span key={`cat-${idx}`}>{categorie}</span>):
                (<F key={`cat-${idx}`}>
                    <span>></span><span>{categorie}</span>
                </F>)
            
            return toRender;
        });
    });

    return(
        <Container className="breadcrumb">
            <Grid container justify="flex-start" alignItems="center" className="breadcrumb" >
                {renderCategories(categories)}
               
            </Grid>
        </Container>
    );
}

export default Breadcrumb;