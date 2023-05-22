

class Pojistenec {

    constructor(jazyk = "cs-CZ") {
        const zaznamyZeStorage = localStorage.getItem("zaznamy");
        this.zaznamy = zaznamyZeStorage ? JSON.parse(zaznamyZeStorage) : [];
        this.jazyk = jazyk;

        this.jmeno = document.getElementById("jmeno");
        this.prijmeni = document.getElementById("prijmeni");
        this.vek = document.getElementById("vek");
        this.telefon = document.getElementById("telefon");
        this.uloz = document.getElementById("uloz")
        this.vypisElement = document.getElementById("seznam-pojistencu");

        this.nastavUdalosti();
    }
    nastavUdalosti(){
        this.uloz.addEventListener("click", () => {


            const zaznam = new Zaznam(this.jmeno.value, this.prijmeni.value, this.vek.value, this.telefon.value);
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
            this.vypisElement.insertAdjacentHTML("beforeend",` <tr><td> ${zaznam.jmeno} </td> <td>  ${zaznam.prijmeni} </td> <td> ${zaznam.vek}</td> <td> ${zaznam.telefon} </td></tr>`);

            const smazatButton = document.createElement("button");
			smazatButton.onclick = () => {
				if (confirm("Opravdu si přejete odstranit pojištěnce?")) {
					this.zaznamy = this.zaznamy.filter(z => z !== zaznam); 
					this.ulozZaznamy();
					this.vypisZaznamy();
				}
			};
            smazatButton.innerText = "Smazat pojištěnce";
			this.vypisElement.appendChild(smazatButton);
			
        }
    }
    kontrolaCislisVeJmeneAPrijmeni(){

        
   
        if(this.jmeno.value.includes(0) || this.prijmeni.value.includes(0))
            alert(`Jméno ani příjmení nemůže obsahovat číslo. Napsal jsi Jméno: ${this.jmeno.value} Přijmení: ${this.prijmeni.value}`);

        else if(this.jmeno.value.includes(1) || this.prijmeni.value.includes(1))
            alert(`Jméno ani příjmení nemůže obsahovat číslo. Napsal jsi Jméno: ${this.jmeno.value} Přijmení: ${this.prijmeni.value}`);

        else if(this.jmeno.value.includes(2) || this.prijmeni.value.includes(2))
            alert(`Jméno ani příjmení nemůže obsahovat číslo. Napsal jsi Jméno: ${this.jmeno.value} Přijmení: ${this.prijmeni.value}`);

        else if(this.jmeno.value.includes(3) || this.prijmeni.value.includes(3))
            alert(`Jméno ani příjmení nemůže obsahovat číslo. Napsal jsi Jméno: ${this.jmeno.value} Přijmení: ${this.prijmeni.value}`);

        else if(this.jmeno.value.includes(4) || this.prijmeni.value.includes(4))
            alert(`Jméno ani příjmení nemůže obsahovat číslo. Napsal jsi Jméno: ${this.jmeno.value} Přijmení: ${this.prijmeni.value}`);

        else if(this.jmeno.value.includes(5) || this.prijmeni.value.includes(5))
            alert(`Jméno ani příjmení nemůže obsahovat číslo. Napsal jsi Jméno: ${this.jmeno.value} Přijmení: ${this.prijmeni.value}`);

        else if(this.jmeno.value.includes(6) || this.prijmeni.value.includes(6))
            alert(`Jméno ani příjmení nemůže obsahovat číslo. Napsal jsi Jméno: ${this.jmeno.value} Přijmení: ${this.prijmeni.value}`);

        else if(this.jmeno.value.includes(7) || this.prijmeni.value.includes(7))
            alert(`Jméno ani příjmení nemůže obsahovat číslo. Napsal jsi Jméno: ${this.jmeno.value} Přijmení: ${this.prijmeni.value}`);

        else if(this.jmeno.value.includes(8) || this.prijmeni.value.includes(8))
            alert(`Jméno ani příjmení nemůže obsahovat číslo. Napsal jsi Jméno: ${this.jmeno.value} Přijmení: ${this.prijmeni.value}`);

        else if(this.jmeno.value.includes(9) || this.prijmeni.value.includes(9))
            alert(`Jméno ani příjmení nemůže obsahovat číslo. Napsal jsi Jméno: ${this.jmeno.value} Přijmení: ${this.prijmeni.value}`);
        else
        this.kontrolaVseVyplneno();
    }

    kontrolaVseVyplneno(){

        if(this.jmeno.value == "" || this.prijmeni.value == "" || this.vek.value == "" || this.telefon.value == ""){
            alert("Pro uložení nového pojištěnce musí být vyplněno: jméno, příjmení, věk i telefonní číslo");
        }
        else   
        this.kontrolaCislaVTelaVek();
    }
    kontrolaCislaVTelaVek(){

        if(isNaN(this.vek.value))
            alert(`Věk musí být číslo. Napsal jsi: ${this.vek.value}`);

         else 
            this.kontrolaTelCisla();

    }
    kontrolaTelCisla(){
        if(isNaN(this.telefon.value))
            alert(`Telefonní číslo může obsahovat jen čísla. Napsal jsi: ${this.telefon.value}`);

        else
            this.ulozZaznamy();
        
    }
}
