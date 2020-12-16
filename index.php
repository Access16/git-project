<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-row">
                <div class="logo">
                    <div class="logo__img"><img src="img/logo.png" alt=""></div>
                </div>
                <div class="header-info">
                    <div class="header-info__top">
                        <p class="bold-text after-text">Первый</p>
                        <p class="header-paragraph"><span class="medium-text">Online-Чемпионат</span><br><span class="bold-text">Tyumen Case School</span></p>
                    </div>
                </div>
            </div>
            <div class="header-info__bottom">
                <ul class="hashtag">
                    <li><span>#tmncaseschool</span></li>
                    <li><span>#решаемкейсы</span></li>
                    <li><span>#tmncaseschool</span></li>
                    <li><span>#решаемкейсы</span></li>
                </ul>
            </div>
        </div>
    </header>
    <section class="team">
        <div class="container">
            <div class="team-row" id="team-row"></div>
        </div>
    </section>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="js/sendReq.js"></script>
</body>
</html>