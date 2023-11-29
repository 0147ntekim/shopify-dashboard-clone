const listInfos = document.querySelectorAll('.li-info');
const contentInfo = document.querySelectorAll('.content')
const image = document.querySelectorAll(".images")
const spinner = ["https://crushingit.tech/hackathon-assets/icon-spinner.svg", "https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg"]

listInfos.forEach(function(listInfo, index){
    listInfo.addEventListener('click', function(){
        
        if(contentInfo[index].style.display === "none"){
            contentInfo[index].style.display = 'flex';
        }else{
            contentInfo[index].style.display = 'none';
        }

        /**image[index].src = spinner[0]
        image[index].classList.add("anime")**/



        
        listInfos.forEach((l, i) => {
            if(i !== index) {
                contentInfo[i].style.display = 'none'
            }
        }) 

    })
})

const arrow = document.querySelector('.down_arrow')
const dropdowncontent = document.querySelector('.drop_down_content')

arrow.addEventListener('click', function (){
    dropdowncontent.classList.toggle('active')
})



const notifiyer = document.querySelector('.notification')
const notify = document.querySelector('.notification_inner')

notifiyer.addEventListener('click', function(){
    notify.classList.toggle('active2')
})


const profiles = document.querySelector('.profile')
const profileInfo = document.querySelector('.profile_inner')


profiles.addEventListener('click', function(){
    profileInfo.classList.toggle('active3')
})