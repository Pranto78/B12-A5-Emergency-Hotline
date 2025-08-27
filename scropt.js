
// love clicking

const loveButtons = document.getElementsByClassName('love-btn');

for (let btn of loveButtons) {
    btn.addEventListener('click', function () {
        const counter = document.getElementById('love-counter');
        counter.innerText = parseInt(counter.innerText) + 1;
    });
}

// copy clicking

const copyButton = document.getElementsByClassName('copy-btn');

for(const copyBtn of copyButton){
    copyBtn.addEventListener('click', function(){
        const copyCounter = document.getElementById('copy-counter');
        copyCounter.innerText = parseInt(copyCounter.innerText) + 1;

        const card = this.closest('.cards');

        // Find the text you want to copy inside this card
        const textToCopy = card.querySelector('.info').innerText;

        // Use the Clipboard API to copy
        navigator.clipboard.writeText(textToCopy).then(function() {
            alert('Copied to clipboard: ' + textToCopy);
        }).catch(function(err) {
            console.error('Failed to copy: ', err);
        });

        
    });
}


// call clicking
const callAlert = document.getElementsByClassName('call-alert');
const coinElement = document.getElementById('coin-counter');

const historyContainer = document.querySelector(".call-history");

for(const alertBtn of callAlert){
    alertBtn.addEventListener('click',function (){
        const coins = parseInt(coinElement.innerText);

        if(coins < 20){
            alert("Not Enough Coins You need at least 20 coin to make a call");
            return;
        }



        const card = alertBtn.closest('.cards');
        const serviceName = card.querySelector('.service-name').innerText;
        const serviceNumber = card.querySelector('.service-number').innerText;
  
        alert(serviceName + "\n" + serviceNumber);
    
        coinElement.innerText = coins - 20;


        // time
        const now = new Date();
        const currentTime = now.toLocaleTimeString();
        // call history
         const historyItem = document.createElement("div");
         historyItem.classList.add(  "flex",  "justify-between",  "items-center",  "p-3", "mb-2","bg-[#fafafa]","rounded-lg", "shadow");

        historyItem.innerHTML =
           '<div class="flex flex-col">' +
                '<span class="font-semibold">' + serviceName + '</span>' +
                '<span class="text-gray-600">' + serviceNumber + '</span>' +
            '</div>' +
            '<span class="text-sm text-gray-500">' + currentTime + '</span>';

         historyContainer.appendChild(historyItem);
    })
}


