import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

//-- Data structure for each work example: img description, img src file, and the title of the work example.
//-- This is the data that changes for each work example.
//-- Will be a list of object literals
const myWork = [
    {
        'title': "Wedding",
        'href': "http://52.203.64.139",
        'desc': "Wedding website created in Wordpress. Site is hosted in AWS.",
        'image': {
            'desc': "Wedding website I created with Wordpress",
            'src': "images/kimmie-milo-wedding-portfolio.png"
        }
    },
    {
        'title': "Buy AC",
        'href': "http://www.buyac.com/",
        'desc': "This is filler text for Buy AC. I will change it later.",
        'image': {
            'desc': "Ecommerce site I created for an HVAC company",
            'src': "images/buy_ac_thumb_portfolio.png"
        }
    }
    // {
    //     'title': "Ecommerce",
    //     'href': "52.203.64.139",
    //     'desc': "This is filler text for Ecommerce. I will change it later.",
    //     'image': {
    //         'desc': "Mock ecommerce site I created",
    //         'src': "images/needs-n-likes-portfolio.png"
    //     }
    // }
    ,{
        'title': "NHCEF",
        'href': "http://nhcef.org/",
        'desc': "North Hall Community Education Foundation description",
        'image': {
            'desc': "North Hall Community Education Foundation image description",
            'src': "images/nhcef_logo.png"
        }
    },{
        'title': "PHP Blog",
        'href': "http://justin-cms.com",
        'desc': "Blogging website done in php",
        'image': {
            'desc': "Image of Justin PHP blog site",
            'src': "images/php_cms_image.png"
        }
        
    },{
        
        'title': "Consultants-Lab",
        'href': "https://consultants-lab.com/",
        'desc': "Description of Consultants-Lab website",
        'image': {
            'desc': "Image of Consultants-Lab image",
            'src': "images/medical_source_thumb.png"
        }

    }
]

//-- Goes in index.html div#id example-work; work is a props
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));





















