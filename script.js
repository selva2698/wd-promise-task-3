async function getdata(x){
    const apidata =await fetch(`https://api-thirukkural.vercel.app/api?num=${x}`,{method: "GET"});
    const data = await apidata.json();
    console.log(data);
    processdata(data);
}
function processdata(data){
    const container = document.getElementById("container");
    let kuraldiv = document.createElement("div");
    kuraldiv.classList.add("kuralclass");
    kuraldiv.innerHTML=
    `
        <div class="kuraldiv">
        <div>Thirukural:</div>
        <div>${data.line1}<br>${data.line2}</div>
        <div>In English: </div>
        <div>${data.eng}</div>
        </div>
   `;
   container.append(kuraldiv);
   let meaningdiv = document.createElement("div");
    meaningdiv.classList.add("meaningclass");
    meaningdiv.innerHTML=
    `
        <div class="meaningdiv">
        <div>Explanation In Tamil:</div>
        <div>${data.tam_exp}</div>
        <div>Explanation In English:</div>
        <div>${data.eng_exp}</div>
        </div>
    `;
    container.append(meaningdiv);
}
function search() {
    const x = document.getElementById("num").value;
    if (x == "") {
        alert("Enter a Number to Search");
    }
    else {
        getdata(x);
        console.log("got the data")
    }
}
search();