let dis1;
let dis2;
let dis3;
let dis4;
let dis5;

function ajaxSend() {
    $.ajax({
        url: './php/response.php',
        type: 'POST',
        dataType: 'json',
        data: {
        },
        success: function(result) {
            $('#team-row').html('');
            $(result).each(function(index, item) {
                if(item.ch1 > 0 ) {
                    item.ch1 = 'disabled';
                }
                if(item.ch2 > 0 ) {
                    item.ch2 = 'disabled';
                }
                if(item.ch3 > 0 ) {
                    item.ch3 = 'disabled';
                }
                if(item.ch4 > 0 ) {
                    item.ch4 = 'disabled';
                }
                if(item.ch5 > 0 ) {
                    item.ch5 = 'disabled';
                }
                if(item.stage > 5) {
                    item.stage = "закончила все этапы";
                } else {
                    item.stage = `находится на ${item.stage} этапе`;
                }

            $('#team-row').append(`

            <div class="team-item" id="${item.id}">
            <h2 class="team-name">${item.team} команда ${item.stage}</h2>
            <div class="team-quest">
                <div class="team-quest_number">Задание №1</div>
                <div class="team-quest_text">
                    <input type="checkbox" class="checkbox-btn" id="ch1" id="dis1"${item.ch1}><span class="task">Рассчитать бюджет на следующий год</span>
                </div>
            </div>
            <div class="team-quest">
                <div class="team-quest_number">Задание №2</div>
                <div class="team-quest_text">
                    <input type="checkbox" id="ch2" id="dis1" ${item.ch2}><span class="task">Рассчитать бюджет на следующий год</span>
                </div>
            </div>
            <div class="team-quest">
                <div class="team-quest_number">Задание №3</div>
                <div class="team-quest_text">
                    <input type="checkbox" id="ch3" ${item.ch3}><span class="task">Рассчитать бюджет на следующий год</span>
                </div>
            </div>
            <div class="team-quest">
                <div class="team-quest_number">Задание №4</div>
                <div class="team-quest_text">
                    <input type="checkbox" id="ch4" ${item.ch4}><span class="task">Рассчитать бюджет на следующий год</span>
                </div>
            </div>
            <div class="team-quest">    
                <div class="team-quest_number">Задание №5</div>
                <div class="team-quest_text">
                    <input type="checkbox" id="ch5" ${item.ch5}><span class="task">Рассчитать бюджет на следующий год</span>
                </div>
            </div>
        </div>

            `);
})
        }
    });

    
}

setInterval(ajaxSend, 1000);

$('.team-row').click(function(e) {
    let target = e.target.closest('input');
    if(!target) return;
    let question = confirm("Вы действительно хотите перейти на следующий этап?");
    if(question == false) {
      target.checked = false;
      return;
    }
    let check = 'checked';
    let parent = target.parentNode;
    let parentTwo = parent.parentNode;
    let parentThree = parentTwo.parentNode;
    let id = parentThree.getAttribute('id');
    let ch = target.getAttribute('id');

    $.ajax({
        url: './php/update.php',
        type: 'POST',
        dataType: 'html',
        data: {
            check: check,
            id: id,
            ch: ch
        },
        success(data) {
            console.log(data);
        }
    })

    // $.ajax({
    //   url: './php/bad.php',
    //   type: 'POST',
    //   dataType: 'html',
    //   data: {
    //     check: check
    //   },
    //   success (data) {
    //     if(data) {
    //       document.location.href = `/game/`;
    //     }
    //   }
    // })
});

    