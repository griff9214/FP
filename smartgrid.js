const smartgrid = require('smart-grid');

const settings = {
    filename: '__smartgrid',
    outputStyle: 'sass',
    columns: 12,
    offset: '30px',
    oldSizeStyle: false,
    container: {
        maxWidth: '1170px',
        fields: '0px'
    },
    breakPoints: {
        lg: {
            width: "1200px",
            fields: "20px"
        },
        md: {
            width: "992px",
            fields: "20px"
        },
        sm: {
            width: "720px",
            fields: "10px"
        },
        xs: {
            width: "576px",
            fields: "5px"
        },
        xxs: {
            width: "380px",
            fields: "5px"
        }
    },
    oldSizeStyle: false,
    properties: [
        'justify-content'
    ]
};

smartgrid('./app/sass', settings);