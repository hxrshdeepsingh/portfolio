    const z = document.getElementById("span-date");
    const q = document.getElementById("blux");
    const u = document.getElementById("name");

    function x() {
        let time = setInterval(function() {
            let w = new Date();
            let s = w.getSeconds();
            let m = w.getMinutes();
            let h = w.getHours();
            z.innerHTML = `${s} : ${m} : ${h}`;
        }, 1000);
    }

    x();

    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
    
        q.style.top = mouseY + 'px';
        q.style.left = mouseX + 'px';
        console.log(mouseX, mouseY);
    });

    u.addEventListener('mouseover', (event) =>{
        q.style.width = '100px'
        q.style.height = '100px'
        q.style.transition = '0.5s'
        q.style.background = 'white'
        q.style.opacity = '0.4'
    })

    u.addEventListener('mouseleave', (event) =>{
        q.style.width = '20px'
        q.style.height = '20px'
        q.style.transition = 'left 0.2s ease, top 0.2s ease'
        q.style.background = 'white'
        q.style.border = 'none'
        q.style.opacity = '1'
        q.style.filter = 'none'

    })