
document.getElementsByTagName('button')[0]
    .addEventListener('click', function(){
        message = document.getElementById('message');
        message.innerText = "I'm right";
    });

    document.getElementsByTagName('button')[1]
        .addEventListener('click', function(){
            message = document.getElementById('message');
            message.innerText = "No, I'm right";
    });