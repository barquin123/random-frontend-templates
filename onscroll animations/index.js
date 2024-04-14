const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            //adding class
            entry.target.classList.add('show');
        }else{
            //in order to show animation more than once or every time
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));