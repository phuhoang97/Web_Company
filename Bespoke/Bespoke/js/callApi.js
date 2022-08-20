
function callApiSendData(){
    var name = document.getElementById("con_name").value;
    var phone = document.getElementById("con_phone").value;
    var email = document.getElementById("con_email").value;
    var company = document.getElementById("con_company").value;
    var note = document.getElementById("con_msg").value;

    console.log(name);
    console.log(phone);
    console.log(email);
    console.log(company);
    console.log(note);
    getTest()
    
}
// const url = "";
const postUser = async todo => {
    try {
      const response = await common_axios.post(url, todo);
      const newTodoItem = response.data;
  
      console.log(`Added a new Todo!`, newTodoItem);
  
      return newTodoItem;
    } catch (errors) {
      console.error(errors);
    }
  };

  const getTest = async () => {
    const response = await common_axios.get( )
    return response?.data || []
    
  };

  const url = `https://portal-be.herokuapp.com/api/users`

  const common_axios = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json"
    },
});