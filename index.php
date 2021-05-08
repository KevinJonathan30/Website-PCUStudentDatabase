<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
    <link href="css/style.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="css/animate.min.css" />
    <link rel="stylesheet" href="css/preloader.css" type="text/css" media="screen, print" />
    <link rel="icon" type="image/png" href="img/favicon.png" />

    <title>Home - Student Database</title>
</head>

<body>
    <div id="preloader">
        <div id="status">&nbsp;</div>
    </div>
    <div id="snowflakeContainer">
        <span class="snowflake"></span>
    </div>

    <?php include 'include/navbar.php' ?>

    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3 mt-5">
                <h1 class="title text-center">John.petra.ac.id</h1>
                <div class="input-group mb-3">
                    <input type="text" id="search" class="form-control" placeholder="Name / NRP"
                        aria-label="Name or NRP" aria-describedby="input-search">
                    <button class="btn btn-outline-success" type="button" id="input-search"
                        onclick="searchQuery();">Search</button>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="btn-group mt-5" role="group" id="buttonExec" aria-label="Basic example">

                </div>
                <table class="table table-bordered border-secondary caption-top" id="dataTable">
                    <caption class="studentCount"></caption>
                    <thead></thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>

    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/gh/linways/table-to-excel@v1.0.4/dist/tableToExcel.js"></script>
    <script src="js/wow.min.js"></script>
    <script>
    new WOW().init();
    </script>
    <script src="js/preloader.min.js" defer></script>
    <script src="js/function.js"></script>
    <script src="js/snowflakes.js"></script>
</body>

</html>