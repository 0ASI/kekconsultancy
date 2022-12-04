function validateName() {
				var name = document.getElementById('name').value;
				if(name.length == 0) {
					alert("Name can't be blank") ;
					return false;

				}
				if (!name.match(/^[A-Za-z\s]{2,}$/)) {
					alert("Please enter your correct name") ;//Validation Message
					return false;
				}
				return true;
			}

			function validatePhone() {
				var phone = document.getElementById('phone').value;
				if(phone.length == 0) {
					alert("Phone number can't be blank") ;//Validation Message
					return false;
				}

				if(!phone.match(/^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$/)) {
				 alert("Please enter a correct phone number") ;//Validation Message
				 return false;
			 }

			 return true;

		 }

		 function validateEmail () {

			var email = document.getElementById('email').value;
			if(email.length == 0) {
				alert("Email can't be blank") ;//Validation Message
				return false;

			}

			if(!email.match(/^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
				alert("Please enter a correct email address") ;//Validation Message
				return false;

			}

			return true;

		}

		function validateSubject () {

		 var subject = document.getElementById('subject').value;
		 if(subject.length == 0) {
			 alert("Subject can't be blank") ;//Validation Message
			 return false;

		 }

		 if(!subject.match(/^[A-Za-z0-9\s]{2,20}$/)) {
			 alert("Subject max letters are 20 with no special characters") ;//Validation Message
			 return false;

		 }

		 return true;

	 }

	 function validateMessage () {

		var message = document.getElementById('message').value;
		if(message.length == 0) {
			alert("Message can't be blank") ;//Validation Message
			return false;

		}

		if(message.match(/(http|www|html|.ru|.com|.net|href|.ga)/)) {
			alert("Please enter a correct message with no url") ;//Validation Message
			return false;

		}

		return true;

	}


		function validateForm() {
			if (!validateName() || !validatePhone() || !validateEmail() || !validateSubject () || !validateMessage ()) {

				alert("Form not submitted");//Validation Message
				return false;
			}
			else {
				submitted=true;
				return true;
			}
		}
