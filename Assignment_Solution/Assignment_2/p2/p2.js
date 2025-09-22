function calculateStarRating() {
    let hotelName = document.getElementById("hotelName").value.trim();
    if (!hotelName) {
        alert("Please enter the hotel name.");
        return;
    }

    let amenities = [
        document.getElementById("conferenceRoom").checked,
        document.getElementById("swimmingPool").checked,
        document.getElementById("gym").checked,
        document.getElementById("wifi").checked,
        document.getElementById("restaurant").checked,
        document.getElementById("creditCard").checked,
        document.getElementById("reception").checked
    ];

    let selectedAmenities = amenities.filter(a => a).length;

    let starRating;
    if (selectedAmenities >= 6) {
        starRating = "5-Star";
    } else if (selectedAmenities >= 4) {
        starRating = "4-Star";
    } else if (selectedAmenities >= 2) {
        starRating = "3-Star";
    } else {
        starRating = "2-Star";
    }

    alert(`Hotel: ${hotelName}\nStar Rating: ${starRating}`);
}
