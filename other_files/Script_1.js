const circle = document.querySelector('#bg');

        function removeIntro() {
          circle.classList.remove('intro');
        }

        function circleMove(e) {
          removeIntro();
          circle.style.setProperty('--x', e.clientX + 'px');
          circle.style.setProperty('--y', e.clientY + 'px');
        }

        document.addEventListener('mousemove', circleMove);
        circle.addEventListener('touchmove', (e) => {
          removeIntro();
          let touch = e.touches[0];
          e.preventDefault();
          circle.style.setProperty('--x', touch.clientX + 'px');
          circle.style.setProperty('--y', touch.clientY + 'px');
        });