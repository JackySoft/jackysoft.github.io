/*
钢琴Demo
**/
$(function(){
	var piano = {
        keyDom: $("li"),
        url: "",
        audioOn: 0,
        timeRuner: null,
        timeCount: 0,
        step: 0,
        lazyTimer: [],
        extraTimer: null,
        audios:$(".piano_audio audio")
    };

	piano.keyDom.each(function(i){
		$(this).hover(function(){
			$(this).find(".hover-bg").stop(true,false).animate({"top":0},200);
			playMusic(i);
		},function(){
			var index = $(this).attr("index");
			//$(".piano_audio audio").eq(index).get(0).pause();
			var bg = $(this).find(".hover-bg");
			bg.animate({"top":"66px"},200);
		});
	});

	function playMusic(i){
		var audio = $(".piano_audio audio").eq(i).get(0);
		if (1 == piano.audioOn) try {
            audio.currentTime = 0,
            audio.play()
        } catch(e) {
            console.log(e)
        }
	}
	
	var keyObject={
		"65":0,"49":0,"97":0,
		"83":1,"50":1,"98":1,
		"68":2,"51":2,"99":2,	
		"70":3,"52":3,"100":3,
		"71":4,"53":4,"101":4,
		"72":5,"54":5,"102":5,
		"74":6,"55":6,"103":6,
		"75":7,"56":7,"104":7,
		"76":8,"57":8,"105":8
	}
	$(document).keydown(function(event) {
		var keyCode = event.keyCode,index = keyObject[keyCode];
		playAnimate(index)
		playMusic(index);
    });

    function playAnimate(i){
		piano.keyDom.eq(i).find("div").stop(true,false).animate({"top":0},200);

		piano.keyDom.eq(i).find("div").animate({"top":"66px"},200);
    }

    initAutoMusic(location.href);

    function initAutoMusic(initUrl) {
        var testTimer = setInterval(function() {
         (piano.audioOn = 1) && (clearInterval(testTimer), setTimeout(function() {
                var paramReg = /\#music=/,
                start = initUrl.search(paramReg) + 8,
                end = initUrl.length,
                params = initUrl.substring(start, end),
                dataArr = params.split("-"),
                music = parseData(dataArr);
                listen(music)
            },
            1500))
        },
        500)
    }

    function parseData(arr) {
        var autoPlayData = {};
        autoPlayData.data = [];
        for (var jsonObj = autoPlayData.data,
        len = arr.length,
        i = 0; len > i; i++) {
            var newArr = arr[i].split(":"),
            key = newArr[0],
            time = newArr[1];
            if (0 != key) {
                var newObj = {};
                newObj.key = key,
                newObj.time = time,
                jsonObj.push(newObj)
            }
        }
        return autoPlayData
    }

    function listen(playData) {
        for (var data = playData.data,
        len = data.length,
        startTime = 0,
        i = 0; len > i; i++) {
            var now = data[i],
            key = now.key,
            time = startTime + 100 * now.time;
            timeOut(key, time),
            startTime = time
        }
    }
    function timeOut(key, time) {
        var eachTimer = setTimeout(function() {
            playAnimate(key)
			playMusic(key);
        },
        time);
        piano.lazyTimer.push(eachTimer)
    }

});