var app = angular.module("myapp1",[]);
app.controller("mainController", function($scope, $location, $rootScope, $http, $timeout, $window) {


	var fifty_option = 0;
	var peoplePollValue = 0;
	var i = 0;
	$scope.flag = 0;
	$scope.peopleFlag = 0;
	$scope.top_pos = 317;

	
        
        var aud = new Audio("audio/Intro2.mp3").play();
        
    

    $scope.urlParam = function(name){
    	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    	if (results==null) {
       		return null;
    	}
    	return decodeURI(results[1]) || 0;
	};

var myData = [
                {
                "Question":"1.How do I add scrolling text to my page?",
                "optionA":"strong",
                "optionB":"Marquee",
                "optionC":"blockquote",
                "optionD":"em",
                "answer":"2",
                "amount":"₹ 5,000",
                "fiftyFifty":["1","3"],
                "peoplePoll":[10,65,15,10]
                },
               {
                "Question":"2.Which tag defines the caption for a fieldset element?",
                "optionA":"optgroup",
                "optionB":"caption",
                "optionC":"legend",
                "optionD":"label",
                "answer":"3",
                "amount":"₹ 10,000",
                "fiftyFifty":["1","4"],
                "peoplePoll":[30,10,45,15]
                },

              {
                "Question":"3.Which HTML tag is used to define a internal style sheet?",
                "optionA":"<CSS>",
                "optionB":"<Script>",
                "optionC":"<style>",
                "optionD":"<link>",
                "answer":"3",
                "amount":"₹ 20,000",
                "fiftyFifty":["2","4"],
                "peoplePoll":[10,30,50,10]
                },

              {
                "Question":"4.Which is the correct CSS syntax?",
                "optionA":"body{color: black}",
                "optionB":"body: color=black",
                "optionC":"{body ;color: black}",
                "optionD":"{body: color=black(body}",
                "answer":"1",
                "amount":"₹ 40,000",
                "fiftyFifty":["2","3"],
                "peoplePoll":[40,25,5,30]
                },
                
              {
                "Question":"5.How do you write \"Hello World\" in an alertbox?",
                "optionA":"alertbox(\"hello world\")",
                "optionB":"alert(\"Hello World\")",
                "optionC":"alertbox=\"Hello World\"",
                "optionD":"msgbox(\"hello World\")",
                "answer":"2",
                "amount":"₹ 80,000",
                "fiftyFifty":["1","3"],
                "peoplePoll":[10,50,20,10]
                },

              {
                "Question":"6.How can you add an comment in a javascript?",
                "optionA":"//This is a comment",
                "optionB":"<!- - This is a comment-- >",
                "optionC":"This is a comment",
                "optionD":"/This is a comment",
                "answer":"1",
                "amount":"₹ 1,60,000",
                "fiftyFifty":["3","4"],
                "peoplePoll":[55,25,10,10]
                },

                {
                "Question":"7.What does CSS stands for?",
                "optionA":"Computer style sheet",
                "optionB":"Colorful style sheet",
                "optionC":"Creative style sheet",
                "optionD":"Cascading style sheet",
                "answer":"4",
                "amount":"₹ 3,20,000",
                "fiftyFifty":["1","2"],
                "peoplePoll":[10,20,30,40]
                },
              {
                "Question":"8.Which HTML attribute is used to define inline styles?",
                "optionA":"font",
                "optionB":"style",
                "optionC":"styles",
                "optionD":"class",
                "answer":"2",
                "amount":"₹ 6,40,000",
                "fiftyFifty":["1","4"],
                "peoplePoll":[5,45,30,20]
                },

              {
                "Question":"9.Which CSS property controls the text size?",
                "optionA":"font-size",
                "optionB":"text-style",
                "optionC":"font-style",
                "optionD":"text-size",
                "answer":"1",
                "amount":"₹ 12,50,000",
                "fiftyFifty":["3","4"],
                "peoplePoll":[50,30,10,10]
                },
                {
                "Question":"10.Which of the following is not new element of HTML5?",
                "optionA":"<article>",
                "optionB":"<aside>",
                "optionC":"<command>",
                "optionD":"<big>",
                "answer":"4",
                "amount":"₹ 25,00,000",
                "fiftyFifty":["1","2"],
                "peoplePoll":[15,5,30,50]
                }
        ];
	$scope.myData = myData;
	
	$scope.question = $scope.myData[0].Question;
	$scope.optA = myData[0].optionA;
	$scope.optB = myData[0].optionB;
	$scope.optC = myData[0].optionC;
	$scope.optD = myData[0].optionD;
	$scope.correctAnswer = myData[0].answer;
	$scope.money = myData[0].amount;
	$scope.moneyEarned = 0;
	


$scope.nextQuestion = function(){

	
	var aud = new Audio("audio/NextQ.mp3").play();
     i++;
	if(i<10) {
	$scope.question = myData[i].Question;
	$scope.optA = myData[i].optionA;
	$scope.optB = myData[i].optionB;
	$scope.optC = myData[i].optionC;
	$scope.optD = myData[i].optionD;
	$scope.correctAnswer = myData[i].answer;
	$scope.money = myData[i-1].amount;
	$scope.moneyEarned = $scope.money;

	$scope.optStyle1={"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle2={"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle3={"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle4={"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.showingNext = {"display":"none"};
	$scope.showingPoints = {"display":"none"};
	$scope.correctWrong = {"display":"none"};

	$scope.top_pos = $scope.top_pos-31;
	$scope.currentMoney = {"background-position-y": $scope.top_pos+"px"};
	$rootScope.response=0;
	}
	if(i==10)
	{
		var value = myData[i-1].amount;
		var name = $scope.urlParam('val');
		$window.location.href = "restartPage.html?money="+value+"&name="+name;
	}
};

$scope.lock = function(){
	$scope.chartStyle = {"display": "none"};
		if($rootScope.response > 0)
		{
		console.log($rootScope.response);
		$scope.lock1 = 1;
		$rootScope.unlock = 2;
		$rootScope.lock=$scope.lock1;
		

		var aud = new Audio("audio/Lock.mp3").play();

		 $timeout(function(){
		 	if($rootScope.unlock==1){
			}	
		else if($rootScope.response == $scope.correctAnswer)
		{	
			
			var aud = new Audio("audio/applause.mp3").play();

		if($rootScope.response == '1')
		{
			$scope.optStyle1={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};				
			$scope.correctWrong = {"background":'url("images/correct.png")',"background-repeat":"no-repeat","background-position":"center"};
			$scope.showingNext = {"display":"block"};
		}
		else if($rootScope.response == '2'){
			$scope.optStyle2={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};
			$scope.correctWrong={"background":'url("images/correct.png")',"background-repeat":"no-repeat","background-position":"center"};			
			$scope.showingNext = {"display":"block"};
		}
		else if($rootScope.response == '3'){
			$scope.optStyle3={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};
			$scope.correctWrong={"background":'url("images/correct.png")',"background-repeat":"no-repeat","background-position":"center"};				
			$scope.showingNext = {"display":"block"};
		}
		else {
			$scope.optStyle4={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};
			$scope.correctWrong={"background":'url("images/correct.png")',"background-repeat":"no-repeat","background-position":"center"};				
			$scope.showingNext = {"display":"block"};
		}
	}

	else if($rootScope.response != $scope.correctAnswer)
	{
		
		var aud = new Audio("audio/Wrongans.mp3").play();

		if($rootScope.response == '1'){
			$scope.optStyle1={"background":'url("images/wrongAnswer.png")',"background-repeat":"no-repeat"};				
			$scope.correctWrong={"background":'url("images/wrong.png")',"background-repeat":"no-repeat","background-position":"center"};
			$scope.showingPoints = {"display":"block"};
		}
		else if($rootScope.response == '2'){
			$scope.optStyle2={"background":'url("images/wrongAnswer.png")',"background-repeat":"no-repeat"};				
			$scope.correctWrong={"background":'url("images/wrong.png")',"background-repeat":"no-repeat","background-position":"center"};
			$scope.showingPoints = {"display":"block"};
		}
		else if($rootScope.response == '3'){
			$scope.optStyle3={"background":'url("images/wrongAnswer.png")',"background-repeat":"no-repeat"};				
			$scope.correctWrong={"background":'url("images/wrong.png")',"background-repeat":"no-repeat","background-position":"center"};
			$scope.showingPoints = {"display":"block"};
		}
		else{
			$scope.optStyle4={"background":'url("images/wrongAnswer.png")',"background-repeat":"no-repeat"};
			$scope.correctWrong={"background":'url("images/wrong.png")',"background-repeat":"no-repeat","background-position":"center"};
			$scope.showingPoints = {"display":"block"};
		}
		if($scope.correctAnswer == '1')
			$scope.optStyle1={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};				
		else if($scope.correctAnswer == '2')
			$scope.optStyle2={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};				
		else if($scope.correctAnswer == '3')
			$scope.optStyle3={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};				
		else
			$scope.optStyle4={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};	
	}
$rootScope.lock = 0;
},3500);
}
};
$scope.unlock = function(){
	alert("you have unlocked the selected option");
	$scope.lock1 = 2;
	$rootScope.unlock = 1;
	$rootScope.lock = $scope.lock;
	/*$scope.correctAnswer=myData[i-1].answer;*/

	$scope.optStyle1 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle2 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle3 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle4 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
};

$scope.optionSelected1 = function() {
	$rootScope.response = 1;
	$scope.optStyle1 = {"background":'url("images/answerClicked.png")',"background-repeat":"no-repeat"};
	$scope.optStyle2 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle3 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle4 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
};
$scope.optionSelected2 = function() {
	$rootScope.response = 2;
	$scope.optStyle1 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle2 = {"background":'url("images/answerClicked.png")',"background-repeat":"no-repeat"};
	$scope.optStyle3 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle4 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
};
$scope.optionSelected3 = function() {
	$rootScope.response = 3;
	$scope.optStyle1 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle2 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle3 = {"background":'url("images/answerClicked.png")',"background-repeat":"no-repeat"};
	$scope.optStyle4 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
};
$scope.optionSelected4 = function() {
	$rootScope.response = 4;
	$scope.optStyle1 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle2 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle3 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle4 = {"background":'url("images/answerClicked.png")',"background-repeat":"no-repeat"};
};

$scope.viewEarnedPoints =function() {
	var value = $scope.moneyEarned;
	var name = $scope.urlParam('val');
	$window.location.href = "restartPage.html?money="+value+"&name="+name;
	new Audio("audio/Correctans.mp3").play();
	
};

$scope.fiftyFifty = function() {
	
	$scope.crossStyleFiftyFifty = {"display":"block"};
	if($scope.flag==0){

		
		var aud = new Audio("audio/5050-r.mp3").play();
	$scope.fiftyValue1 = myData[i].fiftyFifty[0];
	$scope.fiftyValue2 = myData[i].fiftyFifty[1];

	if($scope.fiftyValue1==1) {
		$scope.optA="";
	}
	else if($scope.fiftyValue1==2) {
		$scope.optB="";
	}
	else if($scope.fiftyValue1==3) {
		$scope.optC="";
	}
	else {
		$scope.optD="";
	}

	if($scope.fiftyValue2==1) {
		$scope.optA="";
	}
	else if($scope.fiftyValue2==2) {
		$scope.optB="";
	}
	else if($scope.fiftyValue2==3) {
		$scope.optC="";
	}
	else {
		$scope.optD="";
	}
	$scope.flag=1;
}
};
$scope.peoplePoll = function() {

if($scope.peopleFlag==0) {
	
	var aud = new Audio("audio/peoplepoll.mp3").play();
	$timeout(function () {
	if($scope.peopleFlag==0)
	{
	$scope.chartStyle = {"display":"block"};
	$scope.correctWrong = {"display":"block"};
	$scope.crossStylePeoplePoll = {"display":"block"};
	$scope.peoplePoll1 = myData[i].peoplePoll[0];
	$scope.peoplePoll2 = myData[i].peoplePoll[1];
	$scope.peoplePoll3 = myData[i].peoplePoll[2];
	$scope.peoplePoll4 = myData[i].peoplePoll[3];
    }
 $scope.peopleFlag=1;
 }, 3000);
}
};


});