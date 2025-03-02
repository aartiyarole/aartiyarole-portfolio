
    // Initialize EmailJS with your Public Key
    emailjs.init("lc7Pi4nRwctWn_EAZ");

    // Select the form and add an event listener
    document.querySelector("#Contact").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        let formData = {
            to_name: "Aarti Yarole",
            from_name: document.querySelector("input[placeholder='Enter Your Name']").value,
            email: document.querySelector("input[placeholder='Enter Your Email']").value,
            message: document.querySelector("textarea[placeholder='Enter your message']").value
        };

        // Send email using EmailJS
        emailjs.send("service_p26w2ce", "template_qvopfm4", formData)
        .then(function(response) {
            alert("Message sent successfully!");
           
        }, function(error) {
            alert("Failed to send message. Please try again.");
            
        });

        // Optionally, clear the form fields after submission
        document.querySelector("form").reset();
    });

const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}
function CloseMenu(){
    sideMenu.style.transform = 'translate(16rem)';
}

window.addEventListener('scroll', () => {
    if(scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg','shadow-sm',
            'dark:bg-darkTheme','dark:shadow-white/20'
        );
        navLinks.classList.remove('bg-white','shadow-sm' , 'bg-opacity-50', 'dark: border',
            'dark:border-white/50', "dark:bg-transparent"
        );


    }
    else{
        
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg','shadow-sm',
            'dark:bg-darkTheme','dark:shadow-white/20')
        navLinks.classList.add('bg-white','shadow-sm' , 'bg-opacity-50', 'dark: border',
            'dark:border-white/50', "dark:bg-transparent")
    }
    
})

// dark mode and light mode

document.documentElement.classList.toggle(
    'dark',
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
  
  function toggleTheme(){
    document.documentElement.classList.toggle('dark')

    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }
    else{
        localStorage.theme = 'light'

    }
  }
