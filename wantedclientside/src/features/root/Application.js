import React, { Component } from 'react'
import Helmet from 'react-helmet';

export default class Application extends Component {
    render ()
    {
        return (
            <div>
                <Helmet>
                    <meta name="description" content="" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta
                        name="keywords"
                        content="bussiness model,startap,success" />
                    <meta name="robots" content="index, follow" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="language" content="English" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="author" content="devs:Rahman Niftaliyev" />
                    <title>Wanted</title>
                </Helmet>
            </div>
        );
    }
}
