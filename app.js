const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-img')
const names = document.getElementById('name')
const date = document.getElementById('date')
const animatedBg = document.querySelectorAll(".animated-bg")
const animatedBgtext = document.querySelectorAll(".animated-bg-text") 

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
    title.innerHTML = 'Lorem ipsum dolor sit'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque deleniti nisi velit fugiat.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
    names.innerHTML = "John Doe"
    date.innerHTML = "Oct 08, 2020"
    animatedBg.forEach((bg) => bg.classList.remove('animated-bg'))
    animatedBgtext.forEach((bg) => bg.classList.remove('animated-bg-text'))
}