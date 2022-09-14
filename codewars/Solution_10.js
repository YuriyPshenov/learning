function cockroachSpeed(s) {
    const secInHour = 3600;
    const cmInKm = 100000;
    return Math.floor( (s*cmInKm) / secInHour );
}