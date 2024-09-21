var popup = document.querySelector(".sign-in-box");
var popoverlay = document.querySelector(".sign-in-box-overlay");
var container = document.querySelectorAll(".asgn-container");
let h4Text = 0
function signin(event) {
  var SelectedPro = document.getElementById("selectPro");
  // Get the clicked container
  var container = event.currentTarget;

  // Find the h4 element within the clicked container
  var h4Element = container.querySelector(".asgn-name h4");

  // Store the text content in a variable
  h4Text = h4Element ? h4Element.textContent : "No H4 found";
  SelectedPro.textContent = h4Text;

  // Log the text content to verify
  console.log("Selected H4 Text:", h4Text, SelectedPro);

  // Opening Overlay Sign Box
  popoverlay.style.display = "block";
  popup.style.display = "flex";
}
function closepop() {
  // Closing Overlay Sign Box
  popoverlay.style.display = "none";
  popup.style.display = "none";
}
// Prevent Reload While Clicking On Button
var closepopup = document.getElementById("sign-in-smt");
closepopup.addEventListener("click", function (event) {
  event.preventDefault();
});
// Sending Message To Telegram
function sendToTelegram() {
  var userSlcItm = h4Text
  var username = document.getElementById("username").value;
  var userdpt = document.getElementById("exampleFormControlSelect1").value;
  var useremail = document.getElementById("useremail").value;
  var useridea = document.getElementById("exampleFormControlTextarea1").value;
  var botToken = "7359901791:AAEzLXKxsy9tY8a0d_fY2SqzpD84umERL9I"; // Your bot token
  var chatId = "1424992949"; // Your chat ID
  var message = encodeURIComponent(
    `${"Slected Project: "+userSlcItm}
${"Name: "+username}
${"Department: "+userdpt}
${"Email: "+useremail}
${"Description: "+useridea}`
  );

  // Correctly format the telegram URL string using backticks
  var telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;

  // Use the fetch API to send the message
  fetch(telegramUrl)
    .then((response) => {
      if (response.ok) {
        console.log("Message sent to Telegram");
      } else {
        console.error("Error sending message:", response.statusText);
      }
    })
    .catch((error) => {
      console.error("Network error:", error);
    });
}
