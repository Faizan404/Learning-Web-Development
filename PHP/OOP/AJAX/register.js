document
  .getElementById("registrationForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    // try {
    const response = await fetch("register.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `username=${encodeURIComponent(
        username
      )}&email=${encodeURIComponent(email)}`,
    });

    if (!response.ok) throw new Error("Network response was not ok");
    
    const responseData = await response.text();
    alert(responseData); // Show response message
    // } catch (error) {
    //     console.error('There was a problem with the fetch operation:', error);
    // }
  });
