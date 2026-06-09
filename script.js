const burger = document.getElementById("burger");
const navMenu = document.getElementById("navMenu");

if (burger && navMenu) {
    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        navMenu.classList.toggle("open");
        document.body.classList.toggle("menu-open");
    });
}


let totalReports = localStorage.getItem("totalReports");

if (!totalReports) {
    totalReports = 7667;
    localStorage.setItem("totalReports", totalReports);
}

const totalElement = document.getElementById("totalReports");

if (totalElement) {
    totalElement.textContent = totalReports;
}


const form = document.getElementById("complaintForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const category = document.getElementById("category").value;
        const description = document.getElementById("description").value;

        const laporan = {
            nama: name,
            kategori: category,
            deskripsi: description,
            tanggal: new Date().toLocaleString()
        };

        let dataLaporan =
            JSON.parse(localStorage.getItem("laporan")) || [];

        dataLaporan.push(laporan);

        localStorage.setItem(
            "laporan",
            JSON.stringify(dataLaporan)
        );

        let jumlah =
            parseInt(localStorage.getItem("totalReports"));

        jumlah++;

        localStorage.setItem(
            "totalReports",
            jumlah
        );

        const modal =
            document.getElementById("successModal");

        const closeBtn =
            document.getElementById("closeModal");

        modal.classList.add("show");

        closeBtn.addEventListener("click", () => {
            modal.classList.remove("show");
        });

        form.reset();
    });
}