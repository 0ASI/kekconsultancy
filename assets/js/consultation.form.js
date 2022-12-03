function validateName() {
            var name = document.getElementById('name').value;
            if(name.length == 0) {
              alert("Name can't be blank") ;
              return false;

            }
            else {
              return true;
            }
            return true;
          }


        function validateForm() {
          if (!validateName()) {

            alert("Form not submitted");//Validation Message
            return false;
          }
          else {
            submitted=true;
            return true;
          }
        }
