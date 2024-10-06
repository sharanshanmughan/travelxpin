

var flightList = ['', '', '', '']

const loadFlightsBtn = document.getElementById('load-flights-btn');
const loader = document.getElementById('loader');
const listMain = document.getElementById("list-main")
const flightItems = document.querySelector("#flight-items")
const flightResults = document.querySelector("#results")


$(document).ready(function () {

    var items = ['Roundtrip', 'Roundtrip spl fare', 'Multi City'];
    var detailiTabs = ['Fare Details', 'Baggage Details', 'Cancellation/Change Fees'];

    var flightList = ['', '', '', '']




    document.querySelector("#travelType").insertAdjacentHTML(
        "beforeend",
        items.reduce((acc, item) => acc += `
	<li><a href="#">${item}</a></li>
	`, "")
    );



    $('.travelTypeContainer> ul > li > a')
        .click(function (e) {
            $('.travelTypeContainer > ul> li > a')
                .removeClass('active');
            $(this).addClass('active');
        });


    flightList.forEach((flight, index) => {

        const flightDiv = document.createElement('div');
        flightDiv.classList.add('flight-item-container');


        flightDiv.innerHTML = `
            <div > 
					<div class=flight-item>
						<div class="flight-info">
							<img src="airline-logo.png" alt="Airline Logo">
							<div>
								<p><strong>Trivandrum (TRV)</strong> 22:20</p>
								<p><small>Mon, Sep 23, 2024</small></p>
							</div>
							<div>
								<p>13Hrs 35Mins</p>
								<p><small>1 Stop</small></p>
							</div>
							<div>
								<p><strong>Dubai (DXB)</strong> 10:25</p>
								<p><small>Tue, Sep 24, 2024</small></p>
							</div>
						</div>
						<div class="fare-options">
                            <label><input type="radio" name="fare${index}" value="₹16,993 Tactical" checked> ₹16,993 Tactical</label>
                            <label><input type="radio" name="fare${index}" value="₹18,001 SME"> ₹18,001 SME</label>
                            <label><input type="radio" name="fare${index}" value="₹18,316 Flexi"> ₹18,316 Flexi</label>
                            <label><input type="radio" name="fare${index}" value="₹18,517 SME"> ₹18,517 SME</label>
                        </div>
						
					</div>

				</div>
				<div class="flight-details">

					<p><strong>6 Seats left</strong></p>
					<p class="refundable">Refundable</p>
					<button class="select-btn" id="select-flight">Select</button>
					<button class="select-btn" id="view-details-btn">View Details</button>
				</div>
                <div class="details-container">
                    <ul id="detailsTab" class="detailsTab">
						<li><a href="#" class="tab active">Flight Details</a></li>
					</ul>
                    
                    
                    <div id="flightDetailTab">
                    
                        <div class="flight-segment">
                            <div class="flight-leg">
                                <img src="flight-icon.png" alt="Flight Icon">
                                <div class="flight-info-detail">
                                    <p><strong>Trivandrum, T-1</strong></p>
                                    <p>Sep 23, 2024, 22:20 PM</p>
                                </div>
                                <div class="flight-duration">
                                    <p>1hrs 35Mins</p>
                                    <p>O-DGIP</p>
                                </div>
                                <div class="flight-info-detail">
                                    <p><strong>Hyderabad</strong></p>
                                    <p>Sep 23, 2024, 23:55 PM</p>
                                </div>
                                <a href="#" class="fare-rule">Fare Rule</a>
                            </div>

                            <div class="layover">
                                <span>Layover Time: 8hrs 30Mins</span>
                            </div>

                            <div class="flight-leg">
                                <img src="flight-icon.png" alt="Flight Icon">
                                <div class="flight-info">
                                    <p><strong>Hyderabad</strong></p>
                                    <p>Sep 24, 2024, 06:25 AM</p>
                                </div>
                                <div class="flight-duration">
                                    <p>3hrs 30Mins</p>
                                    <p>R-RTTNT</p>
                                </div>
                                <div class="flight-info">
                                    <p><strong>Dubai, T-1</strong></p>
                                    <p>Sep 24, 2024, 10:25 AM</p>
                                </div>
                                <a href="#" class="fare-rule">Fare Rule</a>
                            </div>
                        </div>

                    
                    </div>

                    <div class="fare-details-content">
                        <table class="fare-details-table">
                            <thead>
                                <tr>
                                    <th>Pax Type</th>
                                    <th>Base Fare</th>
                                    <th>Tax</th>
                                    <th>Gross Fare</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ADULT</td>
                                    <td>₹13,090.00</td>
                                    <td>₹3,903.00 </td>
                                    <td>₹16,993.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div class="baggage-details-content">
                        <h3>Trivandrum to Dubai</h3>
                        <div class="baggage-info">
                            <p><strong>Adult</strong></p>
                            <p>Check-in Baggage: <strong>30KG</strong></p>
                            <p>Cabin Baggage: <strong>7KG</strong></p>
                        </div>
                    </div>


                    <div class="cancellation-fee-content">
                        <h3>Cancellation Fee</h3>
                        <table class="fee-table">
                            <thead>
                                <tr>
                                    <th>Days</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0 Days - 3 Days</td>
                                    <td>INR 5099</td>
                                </tr>
                                <tr>
                                    <td>4 Days - 365 Days</td>
                                    <td>INR 4999</td>
                                </tr>
                            </tbody>
                        </table>
                        <p class="note">
                            <strong>Note:</strong> The above Fare Rules are just for your guideline and are subject to changes by the Airline without prior notice. We will try to keep this section updated regularly. For detailed fare rules visit: 
                            <a href="https://www.goindigo.in/information/fees-and-charges.html">here</a>. The airline fee is indicative. Company does not guarantee the accuracy of this information. All fees mentioned are per passenger.
                        </p>
                    </div>

                    <div class="change-fee-content">
                        <h3>Change Fee</h3>
                        <table class="fee-table">
                            <thead>
                                <tr>
                                    <th>Days</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0 Days - 3 Days</td>
                                    <td>INR 3999</td>
                                </tr>
                                <tr>
                                    <td>4 Days - 365 Days</td>
                                    <td>INR 3250</td>
                                </tr>
                            </tbody>
                        </table>
                        <p class="note">
                            <strong>Note:</strong> The above Fare Rules are just for your guideline and are subject to changes by the Airline without prior notice. We will try to keep this section updated regularly. For detailed fare rules visit: 
                            <a href="https://www.goindigo.in/information/fees-and-charges.html">here</a>. The airline fee is indicative. Company does not guarantee the accuracy of this information. All fees mentioned are per passenger.
                        </p>
                    </div>


                </div>
            </div>
                
        `;
        document.getElementById('flight-items').appendChild(flightDiv);


       

        // Add additional list items to the current .detailsTab

        const currentDetailsTab = flightDiv.querySelector('.detailsTab');

        // Add additional list items to the current .detailsTab
        currentDetailsTab.insertAdjacentHTML(
            'beforeend',
            detailiTabs.reduce((acc, item) => acc += `<li><a class ="tab"href="#">${item}</a></li>`, "")
        );

        // Add event listeners to each tab in the current .detailsTab
        const tabLinks = currentDetailsTab.querySelectorAll('li a');

        const flightDetailTab = flightDiv.querySelector('#flightDetailTab');
        flightDetailTab.style.display = 'block';

        const fareDetailsContent = flightDiv.querySelector('.fare-details-content');
        fareDetailsContent.style.display = 'none';

        const baggageDetailsContent = flightDiv.querySelector('.baggage-details-content');
        baggageDetailsContent.style.display = 'none';

        const cancellationFeeContent = flightDiv.querySelector('.cancellation-fee-content');
        cancellationFeeContent.style.display = 'none';

        const changeFeeContent = flightDiv.querySelector('.change-fee-content');
        changeFeeContent.style.display = 'none';


        
        


        


        tabLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
    
                // Get the current clicked element (event.target)
                const clickedTab = event.target;
    
                // Remove active class from all tabs in the current detailsTab
                tabLinks.forEach(tab => tab.classList.remove('active'));
    
                // Add active class to the clicked tab
                clickedTab.classList.add('active');
    
                // Show/hide content based on the clicked tab
                if (clickedTab.textContent === 'Flight Details') {
                    flightDetailTab.style.display = 'block';
                    fareDetailsContent.style.display = 'none'
                    baggageDetailsContent.style.display = 'none'
                    cancellationFeeContent.style.display = 'none'
                    changeFeeContent.style.display = 'none'
                    // Hide other details sections if needed
                    // e.g., document.querySelector('.baggage-details-content').style.display = 'none';
                } else if (clickedTab.textContent === 'Fare Details') {
                    flightDetailTab.style.display = 'none'; // Hide flight details
                    fareDetailsContent.style.display = 'block'
                    baggageDetailsContent.style.display = 'none'
                    cancellationFeeContent.style.display = 'none'
                    changeFeeContent.style.display = 'none'
                    // Show baggage details content (you would need to implement this)
                    // e.g., document.querySelector('.baggage-details-content').style.display = 'block';
                }else if (clickedTab.textContent === 'Baggage Details') {
                    flightDetailTab.style.display = 'none'; // Hide flight details
                    fareDetailsContent.style.display = 'none'
                    baggageDetailsContent.style.display = 'block'
                    cancellationFeeContent.style.display = 'none'
                    changeFeeContent.style.display = 'none'
                    // Show baggage details content (you would need to implement this)
                    // e.g., document.querySelector('.baggage-details-content').style.display = 'block';
                } else if (clickedTab.textContent === 'Cancellation/Change Fees') {
                    flightDetailTab.style.display = 'none'; // Hide flight details
                    fareDetailsContent.style.display = 'none'
                    baggageDetailsContent.style.display = 'none'
                    cancellationFeeContent.style.display = 'block'
                    changeFeeContent.style.display = 'block'
                    // Show cancellation details content (you would need to implement this)
                    // e.g., document.querySelector('.cancellation-details-content').style.display = 'block';
                }
            });
        });

        const radioButtons = flightDiv.querySelectorAll(`input[name="fare${index}"]`);

        radioButtons.forEach(radio => {
            radio.addEventListener('change', (event) => {
                // Log or store selected fare option for each flight
                console.log(`Selected fare for flight ${index}: ${event.target.value}`);
            });
        });

        
        const viewDetailsButton = flightDiv.querySelector('#view-details-btn');
        const detailsContainer = flightDiv.querySelector('.details-container');
        const selectFlight = flightDiv.querySelector('#select-flight');
        detailsContainer.style.display = 'none'

        viewDetailsButton.addEventListener('click', () => {
            // Toggle the display of the details container
            const isHidden = detailsContainer.style.display === 'none';
            detailsContainer.style.display = isHidden ? 'block' : 'none';
            viewDetailsButton.textContent = isHidden ? 'Hide Details' : 'View Details';
        });

        selectFlight.addEventListener('click', () => {
            // Open a webpage in the same tab
            window.location.href = 'bookingConfirmation.html';
        });



    })






});



const airports = ["TRIVANDRUM - TRV", "DUBAI - DXB", "NEW YORK - JFK", "LONDON - LHR", "TOKYO - HND"];

function autocomplete(input, arr) {
    let currentFocus;
    input.addEventListener("input", function () {
        let list, item, i, val = this.value;
        closeAllLists();
        if (!val) return false;
        currentFocus = -1;
        list = document.createElement("DIV");
        list.setAttribute("id", this.id + "-autocomplete-list");
        list.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(list);
        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                item = document.createElement("DIV");
                item.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                item.innerHTML += arr[i].substr(val.length);
                item.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                item.addEventListener("click", function () {
                    input.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                list.appendChild(item);
            }
        }
    });

    input.addEventListener("keydown", function (e) {
        let list = document.getElementById(this.id + "-autocomplete-list");
        if (list) list = list.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(list);
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(list);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (list) list[currentFocus].click();
            }
        }
    });

    function addActive(list) {
        if (!list) return false;
        removeActive(list);
        if (currentFocus >= list.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = list.length - 1;
        list[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(list) {
        for (let i = 0; i < list.length; i++) {
            list[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        let items = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < items.length; i++) {
            if (elmnt != items[i] && elmnt != input) {
                items[i].parentNode.removeChild(items[i]);
            }
        }
    }

    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}


function showLoader() {
    loader.style.display = 'block';  // Show the loading text
    loadFlightsBtn.disabled = true;  // Disable the button
}

// Hide loader, enable button, and show the flight list
function hideLoaderAndShowFlights() {
    loader.style.display = 'none';       // Hide the loading text
    flightResults.style.display = 'block'
    flightItems.style.display = 'block';  // Show the flight list
    listMain.style.display = 'block'
    loadFlightsBtn.disabled = false;     // Enable the button
    renderFlights();                     // Render flight data
}

// Simulate an API call or data loading
loadFlightsBtn.addEventListener('click', () => {

    showLoader();  // Show loader when button is clicked
    setTimeout(() => {
        hideLoaderAndShowFlights(); // Show flights after 2 seconds
    }, 2000); // Simulate delay (e.g., waiting for an API)
});


autocomplete(document.getElementById("from"), airports);
autocomplete(document.getElementById("to"), airports);



/*const travelType = document.getElementById('travelType');
var li = travelType.querySelectorAll("li");

function loopThroughLi() {
    alert("fdf")
  for (i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function() {
      this.classList.add("active");
      alert("fdf")
    })

  }
}

loopThroughLi();*/