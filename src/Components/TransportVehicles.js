
function TransportVehicles(taxi, taxiPhoneNumber, VIPTaxi, VIPTaxiPhoneNumber) {
    const transportVehicle = {};
    transportVehicle.taxi = taxi;
    transportVehicle.taxiPhoneNumber = taxiPhoneNumber;
    transportVehicle.VIPTaxi = VIPTaxi;
    transportVehicle.VIPTaxiPhoneNumber = VIPTaxiPhoneNumber;
}

module.exports = TransportVehicles;