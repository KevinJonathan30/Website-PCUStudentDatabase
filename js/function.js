var ajaxCall;

function refreshData(search) {
    if (ajaxCall != null) {
        ajaxCall.abort();
    }
    if (search != "") {
        search = search.trim();
        search = search.split(' ').join('+');
        ajaxUrl = "http://john.petra.ac.id/~justin/finger.php?s=" + search;
        ajaxcall = $.ajax({
            url: ajaxUrl,
            type: "get",
            dataType: "json",
            success: function (data) {
                var headerDiv = $("thead");
                headerDiv.html("<tr><th>#</th><th>NRP</th><th>Nama</th><th>Fakultas</th></tr>")
                var buttonDiv = $("#buttonExec")
                buttonDiv.html(
                    "<button type='button' class='btn btn-outline-primary' onclick='exportTableToXlsx();'>Excel</button><button type='button' class='btn btn-outline-primary' onclick='exportTableToCSV();'>CSV</button><button type='button' class='btn btn-outline-primary' onclick='exportTableToPDF();'>PDF</button>"
                )
                var dataDiv = $("tbody");
                var str = "";
                dataDiv.html("");
                for (var i = 0; i < data.hasil.length; i++) {
                    var d = data.hasil[i];
                    var res = d.unit.substring(1, 5);
                    var faculty = "No Data";
                    if (d.login.substring(0, 1) == "a") {
                        faculty = "Bahasa dan Sastra"
                    } else if (d.login.substring(0, 1) == "b") {
                        faculty = "Teknik Sipil dan Perencanaan"
                    } else if (d.login.substring(0, 1) == "c") {
                        faculty = "Teknologi Industri"
                    } else if (d.login.substring(0, 1) == "d") {
                        faculty = "Bisnis dan Ekonomi"
                    } else if (d.login.substring(0, 1) == "e") {
                        faculty = "Seni dan Desain"
                    } else if (d.login.substring(0, 1) == "f") {
                        faculty = "Ilmu Komunikasi"
                    } else if (d.login.substring(0, 1) == "g") {
                        faculty = "Keguruan dan Ilmu Pendidikan"
                    }
                    if (res == "home" && d.login.length == 9) {
                        str += "<tr>";
                        str += "<td>" + (i + 1) + "</td>"
                        str += "<td>" + d.login + "</td>";
                        str += "<td>" + d.nama + "</td>";
                        str += "<td>" + faculty + "</td>";
                        str += "</tr>";
                    }
                }
                dataDiv.html(str);
                $(".studentCount").html("Student count: " + data.hasil.length);
            }
        });
    } else {
        var headerDiv = $("thead");
        headerDiv.html("");
        var buttonDiv = $("#buttonExec")
        buttonDiv.html("")
        var dataDiv = $("tbody");
        dataDiv.html("");
        $(".studentCount").html("");
    }
}

function searchQuery() {
    var s = document.getElementById("search")
    refreshData(s.value);
}

var input = document.getElementById("search");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchQuery();
    }
});

function exportTableToXlsx() {
    let table = document.getElementsByTagName("table");
    TableToExcel.convert(table[0], {
        name: `Students.xlsx`,
        sheet: {
            name: 'Sheet1'
        }
    });
}

function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;
    csvFile = new Blob([csv], {
        type: "text/csv"
    });
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

function exportTableToCSV() {
    var csv = [];
    var rows = document.querySelectorAll("table tr");
    for (var i = 0; i < rows.length; i++) {
        var row = [],
            cols = rows[i].querySelectorAll("td, th");
        for (var j = 0; j < cols.length; j++)
            row.push(cols[j].innerText);
        csv.push(row.join(","));
    }
    downloadCSV(csv.join("\n"), "Students.csv");
}

function exportTableToPDF() {
    window.print();
}