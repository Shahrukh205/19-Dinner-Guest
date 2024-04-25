import { Console } from "console";
import { getDefaultAutoSelectFamilyAttemptTimeout } from "net";

let Guest_List :string[] = ['Imran Khan','Nawaz Sharif','Asif Ali Zardari'];
// for(let i=0; i <Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

// }

let absent_Guest :string = 'Imran Khan' ;
let new_Guest : string = 'Kamran Tessori' ;
Guest_List[0] = new_Guest ;

// for(let i=0; i <Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

// }

// console.log(`Mr. ${absent_Guest} is not coming to the party.`);
// console.log('Good News! We find Big Table So we are inviting 3 more guests.')

// Array me 3 guest add kiye hein.
Guest_List.unshift('Sir Zia Khan') ;
Guest_List.splice(2 , 0 , 'Maryam Nawaz');
Guest_List.push('Bilawal Bhutto Zardari');

// Yahan pr mne 6 guest ky array ko print krwaya he.
// for(let i=0; i <Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

// }

// Sorry Message to guest for not inviting.
// console.log('\nSorry we can not arrange big table, Only Two peoples will be invited.');

// Yahan pr mne guest remove kiye hein.
while(Guest_List.length > 2){
    let remove_Guest = Guest_List.pop();
    // console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}

// Hamare bache hoey 2 invited guest.
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
// }

// Mene sare guest array se remove krdye hein.
Guest_List.splice(0, 2);
console.log(Guest_List);

//Exercise 19
//Print a message indicating the number of people you are inviting to dinner.
console.log(`Total number of Guest Are: ${Guest_List.length}`);