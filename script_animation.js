
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext('2d');
    canvas.width = document.innerWidth;
    canvas.height = document.innerHeight;;

    let particlesArray;

    class Particle {
        constructor(x,y,vx,vy,color,size){
            this.x = x;
            this.y = y;
            this.vx = vx;
            this.vy = vy;
            this.color = color;
            this.size = size
        }
        draw(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0 , Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
        update(){
            if (this.x > canvas.width || this.x <0){
                this.vx = -this.vx;
            }
            if (this.y > canvas.height || this.y < 0){
                this.vy = -this.vy;
            }
            this.x += this.vx;
            this.y += this.vy;
            this.draw();
        }
    }

    function init(){
        particlesArray = [];
        let nOP = (canvas.height * canvas.width) / 10000;
        for (let i = 0; i < nOP; i++){
            let size = 2.5;
            let x = (Math.random() * ((innerWidth - 2 * size)-(size * 2)) + 2 * size);
            let y = (Math.random() * ((innerHeight - 2 * size)-(size * 2)) + 2 * size);
            let vx = (Math.random() * 3) - 1.5;
            let vy = (Math.random() * 3) - 1.5;
            let color = "gray";
            particlesArray.push(new Particle(x,y,vx,vy,color,size));
        }
    }

    function dist(a, b){
        let d = (a.x-b.x)*(a.x-b.x)+(a.y-b.y)*(a.y-b.y);
        return d;
    }

    function connect(){
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++){
            for (let b = a; b < particlesArray.length; b++){
                let dist = (particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x) 
                        + (particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y);
                if (dist < (canvas.width/7) * (canvas.height/7)){
                    opacityValue = 1 - (dist/20000)
                    ctx.strokeStyle = "rgba(140, 85, 31, "+opacityValue+")";
                    ctx.linewidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x,particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x,particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate(){
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,innerWidth,innerHeight);
        for (let i = 0; i<particlesArray.length; i++){
            particlesArray[i].update()
        }
        connect()
    }

    window.addEventListener("resize", function(){canvas.width = this.innerWidth; 
        canvas.height = this.innerHeight; 
        init(); })

    init();
    animate();