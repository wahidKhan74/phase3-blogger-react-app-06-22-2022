import React from 'react';

class Footer  extends React.Component {

    constructor() {
        super();
     }

    render() {
       return (
        <div>
            <footer>
                <p>Author: John Smith<br /> 
                    <a href="mailto:john@example.com">john@example.com</a>
                </p>
            </footer>
        </div> 
       )
    }
}

export default Footer;