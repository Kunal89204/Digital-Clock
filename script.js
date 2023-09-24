function time(){
            const date = new Date(); // Create a new date object on each call
            const hour = document.getElementById("hours");
            const min = document.getElementById("min");
            const sec = document.getElementById("sec");
            
            hour.textContent = date.getHours();
            min.textContent = date.getMinutes();
            sec.textContent = date.getSeconds();
        }

        setInterval(time, 1000);

        time(); // Initial update