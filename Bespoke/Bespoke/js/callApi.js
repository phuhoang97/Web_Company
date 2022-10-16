function callApiSendData() {
  var name = document.getElementById("con_name").value;
  var phone = document.getElementById("con_phone").value;
  var email = document.getElementById("con_email").value;
  var company = document.getElementById("con_company").value;
  var note = document.getElementById("con_msg").value;

  const user = {
    full_name: name,
    phone: phone,
    bank_name: email,
    user_name: company,
    citizen_id: note,
    password: "abc",
  };

  if (name != '' && phone != '') {
    postUserCreate(user);
  }
}

const urlPost = "https://portal-be-11-10.herokuapp.com/create";

function postUserCreate(params) {
  const response = common_axios.post(urlPost, params);
  return response?.data || [];
}

const postUser = async (todo) => {
  try {
    const response = await common_axios.post(urlPost, todo);
    const newTodoItem = response.data;

    console.log(`Added a new Todo!`, newTodoItem);

    return newTodoItem;
  } catch (errors) {
    console.error(errors);
  }
};

const getTest = async () => {
  const response = await common_axios.get();
  return response?.data || [];
};

const url = `https://portal-be-11-10.herokuapp.com`;
const common_axios = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});
