// toggle display of current section

      function toggleDisplay(e) {
        if (getComputedStyle(e).display === 'none') {
          e.style.display = 'block';
        } else {
          e.style.display = 'none';
        }
      }

// toggle chevron changes and call display function

      function toggleContent(e) { 
        const section = e.currentTarget;
        const content = section.nextElementSibling;
        toggleDisplay(content);
        const chevron = section.querySelector('.fa-solid');
        chevron.classList.toggle('fa-circle-chevron-down');
        chevron.classList.toggle('fa-circle-chevron-up');
      }


// toggle the changes from the pages settings

// CHANGE THE BACKGROUND COLOR

      function changeBg(theme) {
        if (theme.innerHTML === 'Dark') {
            document.body.style.backgroundColor = '#2f333a';
        } else if (theme.innerHTML ==='Light') {
            document.body.style.backgroundColor = '#cacacaff';
        }
      }

// CHANGE THE FONT SIZE

      function changeFs(size) {
        if (size.innerHTML === 'Small') {
            document.body.style.fontSize = '12px';
        } else if (size.innerHTML === 'Medium') {
            document.body.style.fontSize = '16px';
        } else if (size.innerHTML === 'Large') {
            document.body.style.fontSize = '20px';
        }
      }

// 

      function changeSetting(e) {
        if (e.innerHTML === 'Dark' ||
            e.innerHTML === 'Light') {
            changeBg(e);
        } else if (e.innerHTML === 'Small' ||
                   e.innerHTML === 'Medium' ||
                   e.innerHTML === 'Large') {
                   changeFs(e);
        }
      }

// BUTTON ASSIGNMENT

      function assignBtn(e) {
        const currentBtn = e.currentTarget;
        changeSetting(currentBtn);
      }

      window.addEventListener('load', function (e) {
        const sections = document.querySelectorAll('.section');

        for (section of sections) {
          section.addEventListener('click', toggleContent)
        }

        const settingList = document.getElementById('settings-list');
        const settingBtn = settingList.getElementsByTagName('button');

        for (btn of settingBtn) {
            btn.addEventListener('click', assignBtn)
        }
      });