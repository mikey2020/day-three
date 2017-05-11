module.exports = {

	reverseString: (word) =>{

		//if(string == ''){
			//return null;
		//}
		let reversedWord = "";
		for(let counter = (word.length -1); counter >= 0 ; counter--){
		   //console.log(string[i]);
		   reversedWord += word[counter];
		}
		if(reversedWord === word){
		    return true;
		}
		
		return reversedWord;  
		
	}
}