const url = 'https://jsonplaceholder.typicode.com/users'

//StampaLog(url);
StampaUtenti(url);


function StampaLog(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}

function StampaUtenti(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const div = document.querySelector('#contenuto2');
            data.forEach(function(utente) {
                div.innerHTML += `
                <div class="col-md-3">                        
                    <div class="card" style=>
                        <div class="card-body"><h5><b>${utente.name}</b></h5>
                            <p>${utente.email}</p>
                            <p><b>Street:</b> ${utente.address.street}</p>
                            <p><b>Suite:</b> ${utente.address.suite}</p>
                            <p><b>City:</b> ${utente.address.city} ${utente.address.zipcode}</p>                                
                            <button type="button" class="btn btn-primary float-end btn-dark" data-bs-toggle="collapse" data-bs-target="#id${utente.id}">Dettagli</button>                                
                            <div id="id${utente.id}" class="collapse"><br><br>
                                <p><b>Company:</b> ${utente.company.name}</p>
                                <p><b>Phone:</b> ${utente.phone}</p>
                                <p><b>Website:</b> ${utente.website}</p>                                
                            </div>                                
                        </div>                                
                    </div><br>                            
                </div>`
            });
        });
}