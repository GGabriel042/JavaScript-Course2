const saveEl = document.getElementById("input-btn");
const saveTabEl = document.getElementById("save-tab");
const removeAllEl = document.getElementById("remove-all-btn");
const inputEl = document.getElementById("input-el");
const listEl = document.getElementById("ul-el");
let myLeads = [];

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));



if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}


/* saveTabEl.addEventListener("click", () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  })
});
 */


saveEl.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});


removeAllEl.addEventListener("click", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});




function render(leads) {
  let listItems = "";

  for (i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a target="_blank" href="${leads[i]}">
          ${leads[i]}
        </a>
      </li>`

  }
  listEl.innerHTML = listItems;
}


