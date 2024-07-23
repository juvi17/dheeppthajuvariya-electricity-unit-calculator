function calculateFamily1() {
    let totalUnits = 0;
    let peakHours = parseFloat(document.getElementById('peakHours1').value) || 0;
    let nonPeakHours = parseFloat(document.getElementById('nonPeakHours1').value) || 0;

    const appliances = [
        'refrigerator1', 'television1', 'fan1', 'microwave1',
        'waterHeater1', 'kettle1', 'iron1', 'stove1', 'lights1', 'washing_machine1'
    ];

    for (let appliance of appliances) {
        let value = parseFloat(document.getElementById(appliance).value);
        if (!isNaN(value)) {
            totalUnits += value;
        }
    }

    totalUnits += peakHours + nonPeakHours;

    const totalUnitsPerMember = totalUnits / 4;

    // Display total units consumed in an alert box
    alert(`Family 1\nTotal Units Consumed: ${totalUnits.toFixed(2)} kWh\nTotal Units Per Member: ${totalUnitsPerMember.toFixed(2)} kWh`);
}

function calculateFamily2() {
    let totalUnits = 0;
    let peakHours = parseFloat(document.getElementById('peakHours2').value) || 0;
    let nonPeakHours = parseFloat(document.getElementById('nonPeakHours2').value) || 0;

    const appliances = [
        'refrigerator2', 'television2', 'fan2', 'microwave2',
        'waterHeater2', 'kettle2', 'iron2', 'stove2', 'lights2', 'washing_machine2'
    ];

    for (let appliance of appliances) {
        let value = parseFloat(document.getElementById(appliance).value);
        if (!isNaN(value)) {
            totalUnits += value;
        }
    }

    totalUnits += peakHours + nonPeakHours;

    const totalUnitsPerMember = totalUnits / 4;

    // Display total units consumed in an alert box
    alert(`Family 2\nTotal Units Consumed: ${totalUnits.toFixed(2)} kWh\nTotal Units Per Member: ${totalUnitsPerMember.toFixed(2)} kWh`);
}

