// Write your solution here! 

let counter = 0;

let timer = setInterval(function(){
    counter++;
    document.getElementById('counter').textContent = counter;
    }, 1000);

document.getElementById('plus').addEventListener('click', function() {
    counter++;
    document.getElementById('counter').textContent = counter;
})

document.getElementById('minus').addEventListener('click', function(){
    counter--;
    document.getElementById('counter').textContent = counter;
})

let likes = 0;
    document.getElementById('heart').addEventListener('click', function(){
        console.log(`${counter} has been liked ${likes} time.`)
        likes++;
        const li = document.createElement('li');
        li.textContent = `${counter} has been liked ${likes} time.`
        document.querySelector('.likes').append(li)  
    })

let isPaused = false;

function pauseResume() {
    if (isPaused) {
        isPaused = false;
        document.getElementById('plus').disabled = false;
        document.getElementById('minus').disabled = false;
        document.getElementById('pause').textContent = 'Pause';
    } else {
        isPaused = true;
        clearInterval(timer)
        document.getElementById('plus').disabled = true;
        document.getElementById('minus').disabled = true;
        document.getElementById('pause').textContent = 'Resume';
    }
}
document.getElementById('pause').addEventListener('click', pauseResume);


    const form = document.getElementById('comment-form')
    form.addEventListener('submit', function(event){
        event.preventDefault();
        const commentItem = document.getElementById('comment-input')
        console.log(commentItem.value);
        const li = document.createElement('li')
        li.textContent = commentItem.value;
        document.getElementById('list').append(li)
    })
