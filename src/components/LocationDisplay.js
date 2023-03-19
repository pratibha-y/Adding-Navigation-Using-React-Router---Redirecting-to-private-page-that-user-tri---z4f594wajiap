import React from 'react';
import { useLocation } from 'react-router-dom';

function LocationDisplay() {
	const { pathname } = useLocation();
	return <div data-testid="location-display">{pathname}</div>;
}

export default LocationDisplay;
