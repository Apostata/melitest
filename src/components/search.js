import React, { useCallback, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const Search = props =>{
    
    const { history } = props;
    const [inputState, setInputState ] = useState('');

    const onChange = useCallback(e =>{
        setInputState(e.target.value);
    });

    const search = ()=>{
        history.push(`/items?search=${inputState}`);
    }

    return (
        <Container>
            <form onSubmit={()=>search()}>
                <input type="text" placeholder="Nunca deixe de buscar" className="search-input" onChange={onChange} value={inputState}/>
                <Button type="submit" variant="contained" className="search-button">
                    <i className="fa fa-search"></i>
                </Button>
            </form>    
        </Container>
    );
}

export default withRouter(Search);