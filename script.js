// main function
function bookingTicket(ticket, isIncrease) {
  const ticketInput = document.getElementById(ticket + "-input");
  const ticketCount = getInputValue(ticket);

  let ticketNewCount = ticketCount;
  if (isIncrease == true) {
    ticketNewCount = ticketCount + 1;
  }
  if (isIncrease == false && ticketCount > 0) {
    ticketNewCount = ticketCount - 1;
  }
  ticketInput.value = ticketNewCount;
  let ticketTotal = 0;
  if (ticket == "business") {
    ticketTotal = ticketNewCount * 150;
  }
  if (ticket == "economy") {
    ticketTotal = ticketNewCount * 100;
  }
  document.getElementById("subtotal").innerText = "$" + ticketTotal;

  calculateTicketTotal();
}

// calculate function
function calculateTicketTotal() {
  const businessCount = getInputValue("business");
  const economyCount = getInputValue("economy");

  const bookingTotal = businessCount * 150 + economyCount * 100;
  document.getElementById("subtotal").innerText = "$" + bookingTotal;

  const taxCharge = bookingTotal * 0.1;
  document.getElementById("tax-charge").innerText = "$" + taxCharge;

  const allTotal = bookingTotal + taxCharge;
  document.getElementById("allTotal").innerText = "$" + allTotal;
}
// function input value
function getInputValue(ticket) {
  const businessInput = document.getElementById(ticket + "-input");
  const businessCount = parseInt(businessInput.value);
  return businessCount;
}

// function confirmation alert

document.getElementById("confirm-alert").addEventListener("click", function () {
  alert("Thank You For Confirm Booking Ticket");
});
