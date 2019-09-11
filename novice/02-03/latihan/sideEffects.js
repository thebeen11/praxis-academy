let meetups = {name: 'JS', isActive:true, members:49};

const schedulemeetups = (date, place) => {
    meetups.date = date;
    meetups.place = place;

    if (meetups.members < 50) 
        meetups.isActive = false;
        }
    
        const publishMeetup = () => {
            if (meetups.isActive) {
             meetups.publish =true;   
            }
        }

schedulemeetups('today', 'Bnagalore');
publishMeetup();
console.log(meetups);

