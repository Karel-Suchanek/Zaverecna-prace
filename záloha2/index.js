class Zaznam {
    constructor(jmeno, prijmeni, narozeni, telefon){
        this.jmeno = jmeno;
        this.prijmeni = prijmeni,
        this.narozeni = narozeni;
        this.telefon = telefon;

    }
}

class Pojistenec {

    constructor(jazyk = "cs-CZ") {
        const zaznamyZeStorage = localStorage.getItem("zaznamy");
        this.zaznamy = zaznamyZeStorage ? JSON.parse(zaznamyZeStorage) : [];
        this.jazyk = jazyk;

        this.jmeno = document.getElementById("jmeno");
        this.prijmeni = document.getElementById("prijmeni");
        this.narozeni = document.getElementById("narozeni");
        this.telefon = document.getElementById("telefon");
        this.uloz = document.getElementById("uloz")
        this.vypisElement = document.getElementById("seznam-pojistencu");

        this.nastavUdalosti();
    }
    nastavUdalosti(){
        this.uloz.addEventListener("click", () => {


            const zaznam = new Zaznam(this.jmeno.value, this.prijmeni.value, this.narozeni.value, this.telefon.value);
            console.log(zaznam);
            this.zaznamy.push(zaznam);

         
           this.kontrolaCislisVeJmeneAPrijmeni();
           this.vypisZaznamy();

        });
    }

    ulozZaznamy() {
        localStorage.setItem("zaznamy", JSON.stringify(this.zaznamy));
    
    }

    vypisZaznamy() {
        this.vypisElement.innerHTML = "";
        for (let zaznam of this.zaznamy) {
            this.vypisElement.insertAdjacentHTML("beforeend",` <tr><td> ${zaznam.jmeno} </td> <td>  ${zaznam.prijmeni} </td> <td> ${zaznam.narozeni}</td> <td> ${zaznam.telefon} </td></tr>`);
        }
    }
    kontrolaCislisVeJmeneAPrijmeni(){
   
        if(this.jmeno.value.includes(0) || this.prijmeni.value.includes(0))
            alert("Jméno ani příjmení nemůže obsahovat číslo.");

        else if(this.jmeno.value.includes(1) || this.prijmeni.value.includes(1))
            alert("Jméno ani příjmení nemůže obsahovat číslo.");

        else if(this.jmeno.value.includes(2) || this.prijmeni.value.includes(2))
            alert("Jméno ani příjmení nemůže obsahovat číslo.");

        else if(this.jmeno.value.includes(3) || this.prijmeni.value.includes(3))
            alert("Jméno ani příjmení nemůže obsahovat číslo.");

        else if(this.jmeno.value.includes(4) || this.prijmeni.value.includes(4))
            alert("Jméno ani příjmení nemůže obsahovat číslo.");

        else if(this.jmeno.value.includes(5) || this.prijmeni.value.includes(5))
            alert("Jméno ani příjmení nemůže obsahovat číslo.");

        else if(this.jmeno.value.includes(6) || this.prijmeni.value.includes(6))
            alert("Jméno ani příjmení nemůže obsahovat číslo.");

        else if(this.jmeno.value.includes(7) || this.prijmeni.value.includes(7))
            alert("Jméno ani příjmení nemůže obsahovat číslo.");

        else if(this.jmeno.value.includes(8) || this.prijmeni.value.includes(8))
            alert("Jméno ani příjmení nemůže obsahovat číslo.");

        else if(this.jmeno.value.includes(9) || this.prijmeni.value.includes(9))
            alert("Jméno ani příjmení nemůže obsahovat číslo.");
        else
        this.ulozZaznamy();
    }

    
}




let pojistenec = new Pojistenec();
pojistenec.vypisZaznamy();