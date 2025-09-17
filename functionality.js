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

// CHANGE STYLE FUNCTION 

      function changeStyle(elem, styleProp, styleValue) {
        elem.style[styleProp] = styleValue;
        return getComputedStyle(elem)[styleProp];
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

// CHANGING SETTINGS

      function changeSetting(e) {
        const body = document.querySelector('body');
        const nav = document.querySelector('nav');
        const h1 = document.querySelector('h1');
        const h2 = document.querySelectorAll('h2');
        const h3 = document.querySelectorAll('h3');
        const h4 = document.querySelectorAll('h4');
        const uList = document.querySelectorAll('ul');
        const listItem = document.querySelectorAll('li');
        const footer = document.querySelector('footer');
        
        
        if (e.innerHTML === 'Dark') {
            changeStyle(body, 'backgroundColor', '#2f333a');
            changeStyle(footer, 'backgroundColor', '#f5a749' );
            changeStyle(h2[0], 'color', '#f5a749');
            changeStyle(h3[0], 'color', '#f5a749');
            for (ul of uList) {
                changeStyle(ul, 'backgroundColor', '#1d1d1dff')
            }
        } else if (e.innerHTML === 'Light') {
            changeStyle(body, 'backgroundColor', '#bbbbbbff');
            changeStyle(footer, 'backgroundColor', '#4799d4' );
            changeStyle(h2[0], 'color', '#4799d4');
            changeStyle(h3[0], 'color', '#4799d4');
            for (ul of uList) {
                changeStyle(ul, 'backgroundColor', '#4799d4')
            }
        } else if (e.innerHTML === 'Small' ||
                   e.innerHTML === 'Medium' ||
                   e.innerHTML === 'Large') {
                   changeFs(e);
        }
      };

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