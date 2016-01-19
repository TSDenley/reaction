Push.debug = true;

Push.allow({
	send( userId, notification ) {
		return true;
	}
});

Meteor.methods({
	serverNotif( text, title ) {
		let badge = 1;

		Push.send({
			from: 'push',
			title: title,
			text: text,
			badge: badge,
			sound: 'airhorn.caf',
			payload: {
				title: title,
				text: text,
				historyId: result
			},
			query: {
				// Send to all users
			}
		});
	},

	userNotif( test, title, userId ) {
		let badge = 1;

		Push.send({
			from: 'push',
			title: title,
			text: text,
			badge: badge,
			sound: 'airhorn.caf',
			payload: {
				title: title,
				historyId: result
			},
			query: {
				userId: userId // Send to a specific user
			}
		});
	}
});
