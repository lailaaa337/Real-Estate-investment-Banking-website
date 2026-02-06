function linkk(event) {
    event.preventDefault(); 
    console.log('Home link clicked');
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.querySelector('.home');
    console.log(homeLink); 
    if (homeLink) {
        homeLink.addEventListener('click', linkk);
    } else {
        console.log('Home link not found!');
    }
});



function scrollToLolaDifference(event) {
    event.preventDefault(); 
    const lolaDifferenceButton = document.getElementById('lola-difference-btn');
    if (lolaDifferenceButton) {
        lolaDifferenceButton.scrollIntoView({
            behavior: 'smooth', 
            block: 'center'
        });
    }
}



document.addEventListener('DOMContentLoaded', function() {
    const theLolaDifferenceLink = document.querySelector('.the');
    if (theLolaDifferenceLink) {
        theLolaDifferenceLink.addEventListener('click', scrollToLolaDifference);
    } else {
        console.log('The LOLA Difference link not found!');
    }
});


function scrollToServices(event) {
    event.preventDefault();
    const serviceButton = document.getElementById('btn_exp');
    if (serviceButton) {
        serviceButton.scrollIntoView({
            behavior: 'smooth', 
            block: 'center'
        });
    }
}



document.addEventListener('DOMContentLoaded', function() {
    const theserviceLink = document.querySelector('.serv');

    if (theserviceLink) {
        theserviceLink.addEventListener('click', scrollToServices);
    } else {
        console.log('The explore link not found!');
    }
});



function logAboutUsMessage(event) {
    event.preventDefault(); 
    console.log('Thank you for checking out the website! We are a real estate investment banking group');
}


document.addEventListener('DOMContentLoaded', function() {
    const aboutUsLink = document.querySelector('.about');

    
    if (aboutUsLink) {
        aboutUsLink.addEventListener('click', logAboutUsMessage);
        console.log('Event listener added to "About Us" link.');
    } else {
        console.log('The "About Us" link was not found!');
    }
});




function logLeadershipMessage(event) {
    event.preventDefault(); 
    console.log('Leadership at Lola: Our experienced senior leadership team guides our strategic decisions and drives our growth.');
}

document.addEventListener('DOMContentLoaded', function() {
    const leadershipLink = document.querySelector('.leader');
    if (leadershipLink) {
        leadershipLink.addEventListener('click', logLeadershipMessage);
        console.log('Event listener added to "Leadership" link.');
    } else {
        console.log('The "Leadership" link was not found!');
    }
});


function scrollToResult(event) {
    event.preventDefault();  
    const resultButton = document.getElementById('lola-result');

    if (resultButton) {
       
        resultButton.scrollIntoView({
            behavior: 'smooth',
            block: 'center'     
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
   
    const resultLink = document.querySelector('.res');  
    if (resultLink) {
       
        resultLink.addEventListener('click', scrollToResult);
        console.log('Event listener added to "Results" link.');
    } else {
        console.log('The "Results" link was not found!');
    }
});




function scrollToLolaDifference(event) {
    event.preventDefault(); 

   
    const lolaDifferenceButton = document.getElementById('lola-difference-btn');
    if (lolaDifferenceButton) {
        lolaDifferenceButton.scrollIntoView({
            behavior: 'smooth', 
            block: 'center' 
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
   
    const theLolaDifferenceLink = document.querySelector('.cl');
    
   
    if (theLolaDifferenceLink) {
        theLolaDifferenceLink.addEventListener('click', scrollToLolaDifference);
    } else {
        console.log('The LOLA Difference link not found!');
    }
});



function scrollToContactUs(event) {
    event.preventDefault(); 

   
    const contactUsElement = document.getElementById('contactUs');
    
    if (contactUsElement) {
        contactUsElement.scrollIntoView({
            behavior: 'smooth', 
            block: 'start'      
        });
    } else {
        console.log('The "Contact Us" element was not found!');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const contactsLink = document.querySelector('.con');
    
    
    if (contactsLink) {
        contactsLink.addEventListener('click', scrollToContactUs);
        console.log('Event listener added to "Contacts" link.');
    } else {
        console.log('The "Contacts" link was not found!');
    }
});



function handleExploreClick(event) {
    event.preventDefault(); 

   
    const userConfirmed = confirm('Do you want to see more service information?');

    if (userConfirmed) {
        alert('More service information will be displayed soon!');
    } else {
        alert('You chose not to view more information.');
    }
}



document.addEventListener('DOMContentLoaded', function() {
    
    const exploreButton = document.querySelector('#btn_exp');
    
    if (exploreButton) {
        
        exploreButton.addEventListener('click', handleExploreClick);
    } else {
        console.log('The "Explore" button was not found!');
    }
});




function showFinanceImage(event) {
    event.preventDefault(); 

    
    const financeImage = event.target.nextElementSibling;
    
    if (financeImage) {
        
        financeImage.style.display = (financeImage.style.display === "none" || financeImage.style.display === "") ? "block" : "none";
    }
}


document.addEventListener('DOMContentLoaded', function() {
   
    const viewMoreLinks = document.querySelectorAll('.View-finance');
    
    
    viewMoreLinks.forEach(function(link) {
        link.addEventListener('click', showFinanceImage);
    });
});



function showdebtImage(event) {
    event.preventDefault();  
    
    const debtImage = event.target.nextElementSibling;
    
    if (debtImage) {
       
        debtImage.style.display = (debtImage.style.display === "none" || debtImage.style.display === "") ? "block" : "none";
    }
}


document.addEventListener('DOMContentLoaded', function() {
   
    const viewMoreLinks = document.querySelectorAll('.View-debt');
    
   
    viewMoreLinks.forEach(function(link) {
        link.addEventListener('click', showdebtImage);
    });
});




function showinvestImage(event) {
    event.preventDefault(); 
    const investmentImage = event.target.nextElementSibling; 
    if (investmentImage) {
        
        investmentImage.style.display = (investmentImage.style.display === "none" || investmentImage.style.display === "") ? "block" : "none";
    }
}


document.addEventListener('DOMContentLoaded', function() {
    
    const viewMoreLinks = document.querySelectorAll('.View-equity');
    
    
    viewMoreLinks.forEach(function(link) {
        link.addEventListener('click', showinvestImage);
    });
});


function showlandImage(event) {
    event.preventDefault();  

   
    const landImage = event.target.nextElementSibling; 
    
    if (landImage) {
       
        landImage.style.display = (landImage.style.display === "none" || landImage.style.display === "") ? "block" : "none";
    }
}


document.addEventListener('DOMContentLoaded', function() {
   
    const viewMoreLinks = document.querySelectorAll('.View-more');
    
   
    viewMoreLinks.forEach(function(link) {
        link.addEventListener('click', showlandImage);
    });
});



var btn = document.getElementById("lola-result");


btn.addEventListener("click", function(event) {
    
    var userConfirmed = confirm("Surprise!");

   
    if (userConfirmed) {
       
        window.location.href = "https://www.greenwichgrp.com/";
    }
});





var btn = document.getElementById("lola-difference-btn");


btn.onclick = function() {
    btn.innerHTML = "Thank you for clicking!";
    btn.style.backgroundColor = "#DAA520";  
    btn.style.color = "white";  
}





function scrollToLolahome(event) {
    event.preventDefault(); 
    
    const lolaHomeButton = document.getElementById('home2');
    if (lolaHomeButton) {
        lolaHomeButton.scrollIntoView({
            behavior: 'smooth', 
            block: 'center' 
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    
    const theLolaHomeLink = document.querySelector('.home');
    
    
    if (theLolaHomeLink) {
        theLolaHomeLink.addEventListener('click', scrollToLolahome);
    } else {
        console.log('The LOLA home link not found!');
    }
});






function scrollToLolaAboutus(event) {
    event.preventDefault(); 

    
    const lolaAboutusButton = document.getElementById('about2');
    if (lolaAboutusButton) {
        lolaAboutusButton.scrollIntoView({
            behavior: 'smooth', 
            block: 'center'
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    
    const theLolaAboutLink = document.querySelector('.about');
   
    if (theLolaAboutLink) {
        theLolaAboutLink.addEventListener('click', scrollToLolaAboutus);
    } else {
        console.log('The LOLA About us link not found!');
    }
});





function scrollToLolaServ(event) {
    event.preventDefault();

   
    const lolaservButton = document.getElementById('serv2');
    if (lolaservButton) {
        lolaservButton.scrollIntoView({
            behavior: 'smooth', 
            block: 'center' 
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    
    const theLolaservLink = document.querySelector('.serv');
    
    
    if (theLolaservLink) {
        theLolaservLink.addEventListener('click', scrollToLolaServ);
    } else {
        console.log('The LOLA About us link not found!');
    }
});