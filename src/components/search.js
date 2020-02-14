import React from 'react';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';

const Search = props =>{
    return (
        <Container>
            <input type="text" placeholder="Nunca deixe de buscar" className="search-input" />
            <Button variant="contained" className="search-button">
                <i className="fa fa-search"></i>
            </Button>
        </Container>
    );
}

export default Search;