const bodyElement = document.querySelector('.body');
  sidebarElement = document.querySelector('.sidebar'),
  toggleElement = document.querySelector('.toggle'),
  SearchBtnElement = document.querySelector('.search-box'),
  modeSwitch = document.querySelector('.mode'),
  modeTextElement = document.querySelector('.mode-text');

  let isFullNameDisplaying = true;

  toggleElement.addEventListener(
    'click',
    () => {
      sidebarElement.classList.toggle('close');

      if(document.getElementById('heading').innerText === 'Navbar')
        {
          document.getElementById('heading').innerText = 'Nav';
        } else {
          document.getElementById('heading').innerText = 'Navbar';
        }

        if(document.getElementById('name').innerText === `©Sumit Sah`) {
          document.getElementById('name').innerHTML = `&#169;SS`;
        } else {
          document.getElementById('name').innerHTML = `&#169;Sumit Sah`;
        }

    }

  )

  modeSwitch.addEventListener(
    'click',
    () => {
      bodyElement.classList.toggle('dark');

      if(bodyElement.classList.contains('dark')) {
        modeTextElement.innerHTML = 'Light Mode';
        document.querySelector('.sun').style.opacity = 1;
        document.querySelector('.moon').style.opacity = 0;
      } else {
        modeTextElement.innerHTML = 'Dark Mode';
        document.querySelector('.sun').style.opacity = 0;
        document.querySelector('.moon').style.opacity = 1;
      }
    }
  )