
// If.js -- Rudyard Kipling's poem IF, reimagined in JavaScript ES6
if( you ) {
	// If you can keep your head when all about you   
	//    Are losing theirs and blaming it on you,   

	all.on( 'losinghead', heads => you.keep_head() );
	all.on( 'blamingyou', blame => you.keep_head() );

	// If you can trust yourself when all men doubt you,
	//    But make allowance for their doubting too;   

	all.on( 'doubtyou', () => you.trust( you ) );
	all.on( 'doubtyou', doubts => you.consider( doubts ) );

	// If you can wait and not be tired by waiting,
	//    Or being lied about, don't deal in lies,

	you.on( 'wait', () => you.tireless = true );
	you.on( 'liedabout', () => you.refuse_to_lie = true );

	// Or being hated, don't give way to hating,
	//    And yet don't look too good, nor talk too wise:

	you.on( 'being', state => (function *() { while( state !== 'hated' ) yield state; }()).next() );
	you.on( 'being.hated', () => you.express( { wisdom : you.wisdom / 2, goodness : you.goodness / 2 } );
		
	// If you can dream and not make dreams your master;   
	//    If you can think and not make thoughts your aim;   

	you.setMaster( you );
	you.dream( new Dreams() ); 
	you.setAim( you.generateAim() );

	// If you can meet with Triumph and Disaster
	//    And treat those two impostors just the same;   

	const handle_triumph = handle_diaster = new ImposterHandler();

	you.on( 'triumph', handle_triumph );
	you.on( 'diaster', handle_disaster );

	// If you can bear to hear the truth you've spoken
	//    Twisted by knaves to make a trap for fools,

	you.addListener( 'truth', truth => truth.twistedByKnaves ? you.bear_it()
		: truth.aTrapForFools ? you.bear_it() : you.carry_on() );		

	// Or watch the things you gave your life to, broken,
	//    And stoop and build â€™em up with worn-out tools:

	you.addListener( 'break', broken => you.gaveLifeTo( broken.things ) ? you.routine( broken.things ) : you.carry_on() );

	you.routine = broken_stuff => {
		you.on( 'stoop', () => you.buildUpAgain( broken_stuff, you.getWornOutTools() ) );
		you.stoop();
	};

	// If you can make one heap of all your winnings
	//    And risk it on one turn of pitch-and-toss,

	const heap = you.winnings.reduce( ( sum, winning ) => sum+winning, you.start_with );
	you.allIn( heap, (new PitchAndToss).turn() );

	And lose, and start again at your beginnings
			And never breathe a word about your loss;

	you.on( 'loseeverything', loss => { you.startAgain( you.begginings ); delete you.words[ loss ]; } );

	// If you can force your heart and nerve and sinew
	//    To serve your turn long after they are gone,   

	you.heart.on( 'gone', () => {
		try {
			you.conjureForce( you.heart, 'CONTINUE' );
		} catch( gone_error ) {
			you.heart.fire( 'gone' );
		} finally {
			you.conjureForce( you.heart, 'CONTINUE' );
		}
	} );
	you.nerve.on( 'gone', () => {
		try {
			you.conjureForce( you.nerve, 'CONTINUE' );
		} catch( gone_error ) {
			you.nerve.fire( 'gone' );
		} finally {
			you.conjureForce( you.nerve, 'CONTINUE' );
		}
	};
	you.sinew.on( 'gone', () => {
		try {
			you.conjureForce( you.nerve, 'CONTINUE' );
		} catch( gone_error ) {
			you.nerve.fire( 'gone' );
		} finally {
			you.conjureForce( you.nerve, 'CONTINUE' );
		}
	};

	//And so hold on when there is nothing in you
	//    Except the Will which says to them: â€˜Hold on!â€™

	you.on( 'empty', () => you.broadcast( you.Will.say( 'HOLDON' ) ) );

	// If you can talk with crowds and keep your virtue,   
	//    Or walk with Kingsâ€”nor lose the common touch,

	you.startAgent( new RedditAgent( { maintain : [ 'virtue' ] } ) );
	you.on( 'kingwalking', () => you.stayNotified( new RedditNotifier() ) );

	// If neither foes nor loving friends can hurt you,
	//    If all men count with you, but none too much;

	you.damageFrom.lovingFriends = 0;
	you.damageFrom.foes = 0;
	you.setCredence( all, min( all.getAverageCredibility(), you.TRUST_THRESHOLD ) );

	//If you can fill the unforgiving minute
	//    With sixty secondsâ€™ worth of distance run,   
	//Yours is the Earth and everything thatâ€™s in it,   
	//   Andâ€”which is moreâ€”youâ€™ll be a Man, my so son.

	you.RUN();
	setTimeout( () => { 
		you.easeDown();
		if( you.filledMinute ) { 
			you.possessions.addAll( Earth, Earth.getEverything() );
			you.state = 'Human';
			you.celebrate();
		} else you.retry()
	}, 60000 );
}
you.start();
