$(document).ready(function() {


$('#checkout-submit-button').on("click", function (e) {
	e.preventDefault();
	var quanVal = $("#quantity-input").val();
	$("#quan-form").hide('fast');
	$("#final-quantity-input").val(quanVal);
	$("#cc-form").show('fast');

})

$("#quantity-input").on("keyup", function (e) {
	updatePurchaseButton();
})

$("#button-down").on("click", function (e) {
	e.preventDefault();
	var quanVal = $("#quantity-input").val();
	var newQuanVal = parseInt(quanVal) - 1;
	if(quanVal <= 0) {
		return false;
	} else {
		$("#quantity-input").val("");
		$("#quantity-input").val(newQuanVal);
	}

	updatePurchaseButton();
})

$("#button-up").on("click", function (e) {
	e.preventDefault();
	var quanVal = $("#quantity-input").val();
	var newQuanVal = parseInt(quanVal) + 1;
	$("#quantity-input").val("");
	$("#quantity-input").val(newQuanVal);

	updatePurchaseButton();
})

$("#button-down-2").on("click", function (e) {
	e.preventDefault();
	var quanVal = $("#final-quantity-input").val();
	var newQuanVal = parseInt(quanVal) - 1;
	if(quanVal <= 0) {
		return false;
	} else {
		$("#final-quantity-input").val("");
		$("#final-quantity-input").val(newQuanVal);
	}

	updatePurchaseButton();
})

$("#button-up-2").on("click", function (e) {
	e.preventDefault();
	var quanVal = $("#final-quantity-input").val();
	var newQuanVal = parseInt(quanVal) + 1;
	$("#final-quantity-input").val("");
	$("#final-quantity-input").val(newQuanVal);

})

function updatePurchaseButton () {
	var quanVal = $("#quantity-input").val();
	if (quanVal == 1) {
		$("#checkout-submit-button").text("Purchase " + quanVal + " Bottle");	
	} else {
		$("#checkout-submit-button").text("Purchase " + quanVal + " Bottles");
	}
}



})
// End Doc Ready