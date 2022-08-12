let info = document.getElementById('datafetch');
info.addEventListener('click',infoHandler)


function infoHandler(){
    console.log("You have clicked the button");

    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //Open the Object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09', true);

    //what to do when response is ready
    xhr.onload = function(){
        try{
            let obj = JSON.parse(this.responseText);
            //console.log(obj);
            // Populate
            document.getElementById("datadisplay").innerHTML = obj.map(pep => `
            <div class="card">
                
                <div class="card-box">
                    <h4>Info</h4>
                    <span class="subnest">Id</span> : ${pep.id} &nbsp
                    <span class="subnest">Name</span> : ${pep.name} &nbsp
                    <span class="subnest">Username</span> : ${pep.username} &nbsp
                    <span class="subnest">Email</span> : ${pep.email}
                </div>
                <div class="card-box">
                    <h4>Address</h4>
                    <span class="subnest">Street</span> : ${pep.address.street} &nbsp
                    <span class="subnest">Suite</span> : ${pep.address.suite} &nbsp
                    <span class="subnest">City</span> : ${pep.address.city} &nbsp
                    <span class="subnest">Zipcode</span> : ${pep.address.zipcode} &nbsp
                    <span class="subnest">Geo</span> : lat:${pep.address.geo.lat} &nbsp lng:${pep.address.geo.lng}
                </div>
                <div class="card-box">
                    <span class="subnest">Phone</span> : ${pep.phone}
                </div>
                <div class="card-box">
                    <span class="subnest">Website</span> : ${pep.website}
                </div>
                <div class="card-box">
                    <h4>Company</h4>
                    <span class="subnest">Name</span> : ${pep.company.name} &nbsp
                    <span class="subnest">catchPhrase</span> : ${pep.company.catchPhrase} &nbsp
                    <span class="subnest">Bs</span> : ${pep.company.bs}
                </div>
            
            </div> 
            `).join('');
        }catch (e){
            console.warn("Could not load pep Info :(");
        }
    }
    xhr.send();
}