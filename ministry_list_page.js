const create_link_to_twitter = (username) => {
  window.open(`https://twitter.com/${username}`, "_blank");
};
const ministry_menu_button = () => {
  if ($(".ministry_list_navbar").css("height") == "0px") {
    $(".ministry_list_navbar").css("height", "auto");
    //$('.ministry_list_navbar').css('width', '100%');
    $(".ministry_list_navbar").css("border-top", "1px solid white");
  } else {
    $(".ministry_list_navbar").css("height", "0px");
    //$('.ministry_list_navbar').css('width', '0%');
    $(".ministry_list_navbar").css("border-top", "none");
  }
};
$(document).on("click", ".Ministry_twitter_handle_link", function () {
  username = $(this).html();
  create_link_to_twitter(username);
});
$(document).on("click", ".Minister_twitter_handle_link", function () {
  username = $(this).html();
  create_link_to_twitter(username);
});
$(document).on("click", "#ministry_list_menu_icon", ministry_menu_button);

let data = [
  {
    ministry: "Ministry of Petroleum",
    ministryHandle: "Abdulaz29562466",
    minister: "Alhaji Abdulazeez",
    ministerHandle: "Abdulaz29562466",
    amount: 10000000,
  },
  {
    ministry: "Ministry of Women Affairs",
    ministryHandle: "aisha@buha.ri",
    minister: "Aisha Buhari",
    ministerHandle: "aisha@buha.ri",
    amount: 50000000,
  },
  {
    ministry: "Ministry of Education",
    ministryHandle: "simeon979",
    minister: "Adegbola Simeon",
    ministerHandle: "simeon979",
    amount: 30000000,
  },
  {
    ministry: "Ministry of Internal Affairs",
    ministryHandle: "tongueblastingcoder",
    minister: "TongueBlasting Coder",
    ministerHandle: "tongueblastingcoder",
    amount: 40000000,
  },
];

let displayedData = [];

window.onload = () => {
  let table = document.querySelector("table");
  for (let item of data) {
    let row = document.createElement("tr");
    row.appendChild(createCol(item.ministry, []));
    row.appendChild(
      createCol(item.ministryHandle, ["Ministry_twitter_handle_link"])
    );
    row.appendChild(createCol(item.minister, []));
    row.appendChild(
      createCol(item.ministerHandle, ["Minister_twitter_handle_link"])
    );
    let amountInNaira = new Intl.NumberFormat("en-ng", {
      style: "currency",
      currency: "NGN",
    }).format(item.amount);
    row.appendChild(createCol(amountInNaira, []));
    table.appendChild(row);
  }
  document.querySelector("#filter").addEventListener("input", search);
};

const createCol = (content, classes) => {
  let contentCol = document.createElement("td");
  contentCol.innerText = content;
  for (let aClass of classes) {
    contentCol.classList.add(aClass);
  }
  return contentCol;
};

const search = ({ target: value }) => {
  let regexp = new RegExp(value.value.toLowerCase());
  let allMinistries = document.querySelectorAll("td:first-child");
  for (let ministry of allMinistries) {
    if (!regexp.test(ministry.textContent.toLowerCase())) {
      ministry.parentElement.classList.add("remove");
    } else {
      ministry.parentElement.classList.remove("remove");
    }
  }
};
