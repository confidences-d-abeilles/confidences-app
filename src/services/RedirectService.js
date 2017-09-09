
import React from 'react';
import { Redirect } from 'react-router-dom';

export function redirect(route) {
    return <Redirect to={route} />;
}
