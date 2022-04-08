
   const canvas= document.getElementById('intro');
    const ctx=canvas.getContext('2d');
 
  function draw (){

    ctx.fillStyle='turquoise';
    ctx.fillRect(10, 10, 25, 30);

    ctx.fillStyle='yellow';
    ctx.fillRect(30, 30, 25, 30);

    ctx.fillStyle='salmon';
    ctx.fillRect(20, 20, 25, 30);


    ctx.fillStyle='turquoise';
    ctx.fillRect(1400, 10, 25, 30);

    ctx.fillStyle='yellow';
    ctx.fillRect(1380, 30, 25, 30);
    
    ctx.fillStyle='salmon';
    ctx.fillRect(1390, 20, 25, 30);
  }
  draw()




    

