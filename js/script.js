"use strict";

var data = [
	{
		"question1": " Какого цвета бегемот?",
		"answer1": " Синий",
		"answer2": " Серый",
		"answer3": " Красный"
	},
	{
		"question2": " Кто покусал Винни-Пуха?",
		"answer4": " Собаки",
		"answer5": " Пчелы",
		"answer6": " Злые гопники"
	},
	{
		"question3": " Что растет на пальмах?",
		"answer7": " Грибы",
		"answer8": " Волосы",
		"answer9": " Бананы"
	}
];

var correct_answers = {
	answer1: 'Ans2',
	answer2: 'Ans5',
	answer3: 'Ans9',
};



localStorage.setItem('questionList', JSON.stringify(data));
var localText = localStorage.getItem('questionList');
localText = JSON.parse(localText);


$(function(){
	var $testList = $('#test').html();
	var $content = tmpl($testList, localText);
	$('body').append($content);
    $('body').on('click', 'input[name=send_btn]', function(){
    	var str = 'Тест пройден!';
        var $message = $('.message').html();
    	for (var ans in correct_answers) {
			if ($('input[name=' + ans + ']:checked').val() != correct_answers[ans]) {
				str = 'Тест не пройден!';
				break;
			}
		}
		$message = $('.message').text(str);
		$('.rezult').css('display', 'block');
		return false;
    });
    $('button[type="reset"]').on('click',function(){
    	$('.rezult').css('display', 'none');
    });
});


