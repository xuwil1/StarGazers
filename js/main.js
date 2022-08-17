//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.getElementById('btn').addEventListener("click", getFetch);
//set today's date to max for input
datePicker.max= new Date().toISOString().split("T")[0];

function getFetch(){
    let date= document.querySelector('input').value;
    let url= `https://api.nasa.gov/planetary/apod?api_key=${config.API_KEY}&date=${date}`;
    document.querySelectorAll('.hide').forEach(ele=>
    ele.classList.remove('hide'));
    fetch(url)
    .then(res => res.json())
    .then ((data)=> {console.log(data)
        document.querySelector('h2').innerText= data.title
            document.querySelector('img').src=data.hdurl
            document.querySelector('h3').innerText= data.explanation})
    .catch(err=>{
        console.log(`error ${err}`)
    })
}

