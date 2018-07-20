$(document).ready(function(){

	//==============init Scrollmagic
	var controller = new ScrollMagic.Controller();

	//==============pin the intro (thru all document)
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '.header',
		triggerHook: 0,
		duration: '230%'  // столько крутит до начала движения
	})
	.setPin('.header',{pushFollowers: false})
	.addTo(controller);

	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: '.header',
		triggerHook: 0,
		duration: '230%'  // столько крутит до начала движения
	})
	.setPin('.main-text',{pushFollowers: false})
	.addTo(controller);

	var pinIntroScene3 = new ScrollMagic.Scene({
		triggerElement: '.header',
		triggerHook: 0,
		duration: '230%'  // столько крутит до начала движения
	})
	.setPin('.courses',{pushFollowers: false})
	.addTo(controller);

	//================tween scene scrollmagic (works)
	var tweenWhite = TweenMax.to('.under-animation', 1, {opacity:0, ease: Linear.easeNone});
	var whiteUnderWear = new ScrollMagic.Scene({
		offset: 200, //отступ
		duration: 400 // продолжение анимации
	})
	.setTween(tweenWhite)
	.addIndicators(true)
	.addTo(controller)


	var tweenGirl = TweenMax.to('.water-colour-gif', 1, {opacity:1, ease: Linear.easeNone});
	var whiteUnderWear = new ScrollMagic.Scene({
		offset: 800, //отступ
		duration: 300 // продолжение анимации
	})
	.setTween(tweenGirl)
	.addIndicators(true)
	.addTo(controller)


	// ===============loop for courses
	$('.course-card').each(function(){
			//build a scene of appearing of courses (one by one)
		var courseScene = new ScrollMagic.Scene({
			triggerElement: this,
			// duration: '130%', // use it for dissapearind at the top of the page
			triggerHook: 1,    //trigger hook is in a bottom of a page (almost)
			reverse: false
			// to make play animation once you should delete duration and add 'reverse: false'
		})
		.setClassToggle(this, 'fade-in')
		.addIndicators({
			name: 'course scene',
			colorTrigger: 'black',
			colorStart: 'coral',
			colorEnd: 'pink'
		})
		.addTo(controller);
	});


});

	// var underRule = CSSRulePlugin.getRule(".under");

	// TweenMax.to(underRule, 3, {
	// 	cssRule: {
	// 		backgroundColor: "yellow"
	// 	},
	// 	ease: Linear.easeNone,
	// 	repeat: -1,
	// 	yoyo: true
	// });