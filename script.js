//Q: write a code when cursor will moved left from right, the bg color of rectangular will be changed to red same for right from left it will be blue

const cursor = document.querySelector('#centre');
cursor.addEventListener('mousemove', function(details){
    const rectangular = cursor.getBoundingClientRect()
    const cursorX = details.pageX - rectangular.left;
    
    if(cursorX < rectangular.width/2) {
        const red = gsap.utils.mapRange(0,rectangular.width/2, 255, 0, cursorX);
        gsap.to(cursor, {
          backgroundColor: `rgb(${red}, 0, 0)`,
          ease: "power4"
        });
    }
    else {
      const blue = gsap.utils.mapRange(rectangular.width/2, rectangular.width, 0, 255, cursorX);
        gsap.to(cursor, {
          backgroundColor: `rgb(0, 0, ${blue})`,
          ease: "power4"
        });
    }
})

cursor.addEventListener('mouseleave', () =>{
  gsap.to(cursor, {
    backgroundColor: "white",
  });
})

