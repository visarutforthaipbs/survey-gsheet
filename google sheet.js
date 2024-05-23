const scriptURL =
  "https://script.google.com/macros/s/AKfycbw_09GqRISpcfsuzm-DBR2uWkoisYsEoBSsuh_qHo0mlM7HyGTbWkTI5h0_6kQtAVLWiw/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
