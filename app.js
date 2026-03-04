//career buttons
const button = document.getElementsByTagName('button');

    button.addEventListener('click', function () {
        const career = this.getAttribute('data-career');
        const careerInfo = document.getElementById(career);
        if (careerInfo.style.display === 'block') {
            careerInfo.style.display = 'none';
        } else {
            careerInfo.style.display = 'block';
        }
    });

