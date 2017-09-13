var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("price_usd").innerHTML = "$" + myObj[0].price_usd;
        document.getElementById("market_cap_usd").innerHTML = " $" + myObj[0].market_cap_usd;
        document.getElementById("price_btc").innerHTML = myObj[0].price_btc;
    }
};

function getUpdate() {
    xmlhttp.open("GET", "https://api.coinmarketcap.com/v1/ticker/decred/", true);
    xmlhttp.send();
}


window.setInterval(getUpdate, 2000)