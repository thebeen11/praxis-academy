let meetups = [
    {name:'JavaScript', isActive:true, members:700},
    {name:'Angular', isActive:true, members:900},
    {name:'Node', isActive:false, members:600},
    {name:'React', isActive:true, members:500}
];

let activeMeetups = [];
for (let i = 0; i < meetups.length; i++) {
    let m = meetups[i];
    if (m.isActive) {
        activeMeetups.push(m);
    }
}

console.log(activeMeetups);

let activeMeetupsFP =[];
activeMeetupsFP = (meetups.filter((m)=>{
    return m.isActive;
}));

console.log(activeMeetupsFP);

