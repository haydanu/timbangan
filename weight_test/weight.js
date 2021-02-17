;
(function() {

  let userData = [];

  let updateTable = function() {
    let mainTable = document.getElementById('mainTable'),
        tableHead = document.getElementById('tableHead'),
        tableBody = document.createElement('tbody');

    while (mainTable.firstChild) {
      mainTable.removeChild(mainTable.firstChild);
    }

    mainTable.appendChild(tableHead);

    for (let i = 0; i < userData.length; i++) {
      let tr = document.createElement('tr'),
          td0 = document.createElement('td'),
          td1 = document.createElement('td'),
          td2 = document.createElement('td'),
          td3 = document.createElement('td'),
          td4 = document.createElement('td'),
          td5 = document.createElement('td'),
          deleteBtn = document.createElement('input'),
          editBtn = document.createElement('input');

      deleteBtn.setAttribute('type', 'button');
      deleteBtn.setAttribute('value', 'Delete');
      deleteBtn.setAttribute('class', 'deleteBtn');
      deleteBtn.setAttribute('id', i);

      editBtn.setAttribute('type', 'button');
      editBtn.setAttribute('value', 'Edit');
      editBtn.setAttribute('id', i);

      tr.appendChild(td0);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      td0.innerHTML = userData[i].date;
      td1.innerHTML = userData[i].max;
      td2.innerHTML = userData[i].min;
      td3.innerHTML = userData[i].variance;
      td4.appendChild(editBtn);
      td5.appendChild(deleteBtn);

      deleteBtn.onclick = (function() {
        return function() {
          if (confirm("Are you sure you want to delete?")) {
            let deleteId = this.getAttribute('id');
            userData.splice(deleteId, 1);
            updateTable();
          }
        };
      })();

      editBtn.addEventListener('click', function() {
        let editId = this.getAttribute('id');
        updateForm(editId);
      }, false);

      tableBody.appendChild(tr);
    }
    mainTable.appendChild(tableBody);
  }

  let updateForm = function(id) {
    let dateUser = document.getElementById('date'),
        maxUser = document.getElementById('max'),
        minUser = document.getElementById('min'),
        saveButton = document.getElementById('saveBtn');

    dateUser.value = userData[id].date;
    maxUser.value = userData[id].max;
    minUser.value = userData[id].min;
    saveButton.value = 'Update';
    saveButton.setAttribute('data-update', id);
  }

  let saveData = function() {
    let newDateUser = document.getElementById('date').value,
        newMaxUser = document.getElementById('max').value,
        newMinUser = document.getElementById('min').value,
        dataToAdd = {
        date: newDateUser,
        max: newMaxUser,
        min: newMinUser,
        variance: max.value - min.value
      };
    userData.push(dataToAdd);
    updateTable();
  }

  let updateData = function(id) {
    let updateDate = document.getElementById('date').value,
        updateMax = document.getElementById('max').value,
        updateMin = document.getElementById('min').value;

    userData[id].date = updateDate;
    userData[id].max = updateMax;
    userData[id].min = updateMin;
    updateTable();
  }

  var refreshForm = function() {
    let dateUser = document.getElementById('date'),
        maxUser = document.getElementById('max'),
        minUser = document.getElementById('min'),
        saveButton = document.getElementById('saveBtn');

		dateUser.value = '';
		maxUser.value = '';
		minUser.value = '';
		saveButton.value = 'Save';
		saveButton.removeAttribute('data-update');
  }

  let init = function() {
    updateTable();

    let btnSave = document.getElementById('saveBtn');

    btnSave.onclick = function() {
      if (btnSave.getAttribute('data-update')) {
        updateData(btnSave.getAttribute('data-update'));
      } else {
        saveData();
      }
        refreshForm();
    };
  };

    init();

})();
