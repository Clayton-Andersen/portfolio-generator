const profileDataArgs = process.argv.slice(2, process.argv.length);
//why did lesson snapshot only show 'const progileDataArgs = process.argv.slice(2);'?

const printProfileData = profileDataArr => {
    //This...
    for (let i=0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }
    console.log('=====================');
    
    //Is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem)) 
    }
};

printProfileData(profileDataArgs);
