//9.2.4 bottom of page create html
const profileDataArgs = process.argv.slice(2, process.argv.length);
//why did lesson snapshot only show 'const progileDataArgs = process.argv.slice(2);'?
const [name, github] = profileDataArgs;
// const printProfileData = profileDataArr => {
//     //This...
//     for (let i=0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }
//     console.log('=====================');
    
//     //Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem)) 
//     }
// };

// printProfileData(profileDataArgs);

const generatePage = (userName, githubName) => {
    return`
    Name: ${userName}, 
    Github: ${githubName}
    `;
};
console.log(generatePage(name, github));