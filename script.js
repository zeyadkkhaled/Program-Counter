let currentValue = document.getElementById("countLabel").value;


document.getElementById("decreasebtn").onclick = function() {
    currentValue--;
    document.getElementById("countLabel").textContent = currentValue;    

};


document.getElementById("resetbtn").onclick = function() {
    currentValue = 0;
    document.getElementById("countLabel").textContent = currentValue;    

};

document.getElementById("increasebtn").onclick = function() {
    currentValue++;
    document.getElementById("countLabel").textContent = currentValue;    

};