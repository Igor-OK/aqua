$(document).ready(function(){

	//==============init Scrollmagic
	var controller = new ScrollMagic.Controller();

	//==============pin the intro (thru all document)
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '.header',
		triggerHook: 0,
		duration: '200%'  // столько крутит до начала движения
	})
	.setPin('.header',{pushFollowers: false})
	.addTo(controller);

	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: '.header',
		triggerHook: 0,
		duration: '200%'  // столько крутит до начала движения
	})
	.setPin('.main-text',{pushFollowers: false})
	.addTo(controller);

	var pinIntroScene3 = new ScrollMagic.Scene({
		triggerElement: '.header',
		triggerHook: 0,
		duration: '200%'  // столько крутит до начала движения
	})
	.setPin('.courses',{pushFollowers: false})
	.addTo(controller);

	var pinIntroScene4 = new ScrollMagic.Scene({
		triggerElement: '.header',
		triggerHook: 0,
		duration: '200%'  // столько крутит до начала движения
	})
	.setPin('.teachers',{pushFollowers: false})
	.addTo(controller);

	var pinIntroScene5 = new ScrollMagic.Scene({
		triggerElement: '.header',
		triggerHook: 0,
		duration: '200%'  // столько крутит до начала движения
	})
	.setPin('.find-us',{pushFollowers: false})
	.addTo(controller);

	//================ Starting tween scene scrollmagic (already works)

	var tweenHandyText = TweenMax.to('.start-animation', 1, {transform:'scale(1)', ease: Linear.easeNone});
	var whiteUnderWear = new ScrollMagic.Scene({
		offset: 0, //отступ
		duration: 350 // продолжение анимации
	})
	.setTween(tweenHandyText)
	.addIndicators(true)
	.addTo(controller)


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
		offset: 555, //отступ
		duration: 300 // продолжение анимации
	})
	.setTween(tweenGirl)
	.addIndicators(true)
	.addTo(controller)


	// ===============loop for appearing of courses-card
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



	//animated gradient in canvas
	var granimInstance = new Granim({
    element: '#canvas-basic',
	    name: 'basic-gradient',
	    direction: 'left-right',
	    opacity: [1, 1],
	    isPausedWhenNotInView: true,
	    states : {
	        "default-state": {
	            gradients: [
	                ['#AA076B', '#61045F'],
	                ['#02AAB0', '#00CDAC'],
	                ['#DA22FF', '#9733EE']
	            ]
	        }
	    }
	});

	// resize canvas for according content (.main text)
	var gradientCanvas = document.getElementById('canvas-basic');
	var mainText = document.querySelector('.main-text-content');
	gradientCanvas.style.height = mainText.offsetHeight+120+'px';




	// ParticlesJS Config.
	particlesJS("particles-js", {
		particles: {
			number: {
				value: 80,
				density: {
					enable: true,
					value_area: 700
				}
			},
			color: {
				value: "#000000"
			},
			shape: {
				type: "circle",
				stroke: {
					width: 0,
					color: "#eeeeee"
				},
				polygon: {
					nb_sides: 5
				}
			},
			opacity: {
				value: 0.5,
				random: false,
				anim: {
					enable: false,
					speed: 1,
					opacity_min: 0.1,
					sync: false
				}
			},
			size: {
				value: 2,
				random: true,
				anim: {
					enable: false,
					speed: 40,
					size_min: 0.1,
					sync: false
				}
			},
			line_linked: {
				enable: true,
				distance: 150,
				color: "#00356B", //line color setted here
				opacity: 0.7,
				width: 1
			},
			move: {
				enable: true,
				speed: 4,
				direction: "none",
				random: false,
				straight: false,
				out_mode: "out",
				bounce: false,
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200
				}
			}
		},
		interactivity: {
			detect_on: "canvas",
			events: {
				onhover: {
					enable: true,
					mode: "grab"
				},
				onclick: {
					enable: true,
					mode: "push"
				},
				resize: true
			},
			modes: {
				grab: {
					distance: 140,
					line_linked: {
						opacity: 1
					}
				},
				bubble: {
					distance: 400,
					size: 40,
					duration: 2,
					opacity: 8,
					speed: 3
				},
				repulse: {
					distance: 200,
					duration: 0.4
				},
				push: {
					particles_nb: 4
				},
				remove: {
					particles_nb: 2
				}
			}
		},
		retina_detect: true
	});






}); // end of document.ready


