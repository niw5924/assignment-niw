// 여기에 정답을 작성해주세요

const target1 = document.getElementById('target-1');
const target2List = document.querySelectorAll('.target-2');
const target3 = document.getElementById('target-3');
const target4 = document.getElementById('target-4');

// 1
target1.classList.remove('border');

// 2
target1.style.left = '250px';

// 3
target2List.forEach(el => {
  el.classList.remove('border');
  el.classList.add('blue');
});

// 4
target2List.forEach(el => {
  el.style.left = '50px';
  el.style.marginTop = '-15px';
});

// 5
target3.style.transition = 'opacity 0.4s';
target3.offsetHeight; // 강제 리플로우
target3.style.opacity = '0';

target3.addEventListener('transitionend', () => {
  target3.style.display = 'none';
  target4.classList.add('green');
});

// 아래 코드는 수정하지 않습니다

// 1
$("#target-1").removeClass("border");

// 2
$("#target-1").css("left", "250px");

// 3
$(".target-2").removeClass("border").addClass("blue");

// 4
$(".target-2").css({ left: 50, "margin-top": "-15px" });

// 5
$("#target-3").fadeOut(() => $("#target-4").addClass("green"));
