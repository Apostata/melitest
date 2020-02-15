
export const renderView = (req, res, next) => {
    res.sendFile('index.html', {root : __dirname + '../../../public/'});
    
};

