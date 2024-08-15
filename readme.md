<!DOCTYPE html>
<html>
<head>
<title>Issue Tracker</title>
<style>
body {
    background-color: #808080; /* Your desired grey color */
    color: white;
    font-family: Arial, sans-serif;
}
</style>
</head>
<body>
<h1>Issue Tracker</h1>

<input type="text" id="Name (Required)" placeholder="Name/Reference">
<br>
<input type="text" id="Issue (required)" placeholder="Issues">
<br>
<input type="checkbox" id="agree" onclick="checkAgree()"> I agree to the <a href="#">terms</a>
<button id="post" disabled>Post</button>

<div id="issues"></div>

<script src="script.js"></script>
</body>
</html>
