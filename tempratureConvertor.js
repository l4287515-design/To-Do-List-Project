{
    function toFahrenheit() {
      let c = document.getElementById("c").value;
      document.getElementById("f").value = (c * 9/5) + 32;
    }
}

{
    function toCelcius() {
    let fa = document.getElementById("fa").value;
    document.getElementById("ca").value = (fa - 32) / 1.8;
    }
}