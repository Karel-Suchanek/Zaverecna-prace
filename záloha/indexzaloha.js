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
        this.uloz.addEventListener("click", (e) => {

            e.preventDefault();

            const zaznam = new Zaznam(this.jmeno.value, this.prijmeni.value, this.narozeni.value, this.telefon.value);
            console.log(zaznam);
            this.zaznamy.push(zaznam);

           this.ulozZaznamy();
           this.vypisZaznamy();

        });
    }

    ulozZaznamy() {
        localStorage.setItem("zaznamy", JSON.stringify(this.zaznamy));
    }

    vypisZaznamy() {
        this.vypisElement.innerHTML = "";
        for (let zaznam of this.zaznamy) {
            this.vypisElement.insertAdjacentHTML("beforeend",` ${zaznam.jmeno}, ${zaznam.prijmeni}, ${zaznam.narozeni}, ${zaznam.telefon}`);
        }
    }
}



let pojistenec = new Pojistenec();
pojistenec.vypisZaznamy();